import { Button, MultiSelect, TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product/product/Product';
import { Product } from '../../models/models';
import { dataAction, fetchCategoryProducts, fetchProductCategories, fetchStorageProducts } from '../../store/dataslice';
import { useAppDispatch, useAppSelector, useDebounce } from '../../store/hooks';
import './style.css';

const AllProducts = () => {
   const [category, setCategory] = useState<string[]>([]);
   const [search, setSearch] = useState<string>('');
   const debouncedValue = useDebounce<string>(search, 100);
   const storageProducts = useAppSelector((state) => state.products.storageProducts.products);
   const products = useAppSelector((state) => state.products.cartProduct);
   const categories = useAppSelector((state) => state.products.categories);
   const dispatch = useAppDispatch();

   const handleProduct = (product: Product) => dispatch(dataAction.addProduct(product));
   const removeProduct = (product: Product) => dispatch(dataAction.removeProduct(product));

   const isInCart = (id: number) => {
      return products.some((prod) => prod.id === id);
   };

   useEffect(() => {
      dispatch(fetchStorageProducts(search));
      dispatch(fetchProductCategories());
   }, [debouncedValue]);

   useEffect(() => {
      if (category.length === 0) {
         dispatch(fetchStorageProducts(''));
      } else {
         dispatch(fetchCategoryProducts(category));
      }
   }, [category]);
   return (
      <div className="page">
         {storageProducts.length === 0 && !search ? (
            <div
               style={{
                  height: '90vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         ) : (
            <div>
               <Button
                  className="button"
                  onClick={() =>
                     window.scroll({
                        top: 0,
                        behavior: 'smooth',
                     })
                  }
                  radius="xl"
                  size="sm"
                  color={'dark'}
               >
                  Up
               </Button>
               <div className="page-content">
                  <div>
                     <div className="page-forms">
                        <MultiSelect
                           radius="md"
                           size="md"
                           data={categories.map((el: string) => el)}
                           value={category}
                           onChange={setCategory}
                           label="Pick category"
                           placeholder="categories"
                           maxSelectedValues={1}
                           searchable
                           nothingFound="Nothing found"
                        />
                        <form>
                           <TextInput
                              radius="md"
                              type={'text'}
                              placeholder="search"
                              label="Search Product"
                              value={search}
                              onChange={(e) => setSearch(e.currentTarget.value)}
                           />
                        </form>
                     </div>
                  </div>
                  {storageProducts.length === 0 ? (
                     <div className="page-empty flex">
                        <h1>No Such Products...</h1>
                     </div>
                  ) : (
                     <div className="page-products flex">
                        {storageProducts.map((product) => (
                           <ProductCard
                              product={product}
                              isInCart={isInCart(product.id)}
                              handleProduct={(product: Product) => handleProduct(product)}
                              removeProduct={(product: Product) => removeProduct(product)}
                              key={product.id}
                           />
                        ))}
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default AllProducts;
