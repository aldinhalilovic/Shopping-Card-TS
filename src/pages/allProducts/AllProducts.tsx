import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product/product/Product';
import { Product } from '../../models/models';
import { dataAction, fetchCategoryProducts, fetchProductCategories, fetchStorageProducts } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const AllProducts = () => {
   const [category, setCategory] = useState<string>('');
   const [search, setSearch] = useState<string>('');
   const dispatch = useAppDispatch();
   const storageProducts = useAppSelector((state) => state.products.storageProducts.products);
   const products = useAppSelector((state) => state.products.cartProduct);
   const categories = useAppSelector((state) => state.products.categories);

   const handleProduct = (product: Product) => dispatch(dataAction.addProduct(product));
   const removeProduct = (product: Product) => dispatch(dataAction.removeProduct(product));

   const isInCart = (id: number) => {
      return products.some((prod) => prod.id === id);
   };

   const fetchHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(fetchCategoryProducts(category));
   };
   const clearProduct = () => {
      dispatch(fetchStorageProducts(''));
      setSearch('');
   };

   useEffect(() => {
      dispatch(fetchStorageProducts(search));
      dispatch(fetchProductCategories());
   }, [search]);

   return (
      <div>
         <h1>PRODUCTS</h1>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <div>
               <form onSubmit={(e) => fetchHandle(e)}>
                  {categories.map((el: string, index: number) => (
                     <li key={index}>
                        <button onClick={() => setCategory(el)}>{el}</button>
                     </li>
                  ))}
               </form>
               <button onClick={clearProduct}>Clear</button>
               <form>
                  <input
                     type={'text'}
                     placeholder="search"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
               </form>
            </div>

            <div
               style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
               }}
            >
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
         </div>
      </div>
   );
};

export default AllProducts;
