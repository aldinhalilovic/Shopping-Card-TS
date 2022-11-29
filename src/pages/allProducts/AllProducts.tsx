import React, { useEffect, useState } from 'react';
import { fetchCategoryProducts, fetchProductCategories, fetchStorageProducts } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const AllProducts = () => {
   const [category, setCategory] = useState<string>('');
   const [search, setSearch] = useState<string>('');
   const dispatch = useAppDispatch();
   const storageProducts = useAppSelector((state) => state.products.storageProducts.products);
   const categories = useAppSelector((state) => state.products.categories);

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
            <div>
               {storageProducts.map((product) => (
                  <li key={product.id}>{product.title}</li>
               ))}
            </div>
         </div>
      </div>
   );
};

export default AllProducts;
