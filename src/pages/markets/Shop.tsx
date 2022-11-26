import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product/Product';
import { ShoppingCartContext } from '../../service/ShoppingCartContext';
import './Shop.css';

const Shop = () => {
   const { num } = useParams();
   const context = useContext(ShoppingCartContext);
   useEffect(() => {
      context?.getData(Number(num));
   }, []);

   const products = context?.data.products;
   return (
      <div className="main">
         <div>header</div>
         {context?.data.total === 0 ? (
            <div className="content">Loading...</div>
         ) : (
            <div className="content">
               {products?.map((product) => (
                  //   <div key={product.id} className="card">
                  //      <li>{product.id}</li>
                  //   </div>
                  <ProductCard product={product} />
               ))}
            </div>
         )}
      </div>
   );
};

export default Shop;
