import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/product/Product';
import { Product } from '../../models/models';
import { dataAction, fetchMarketProducts } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './Shop.css';

const Shop = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const data = useAppSelector((state) => state.products.data);
   const producti = useAppSelector((state) => state.products.cartProduct);
   const products = data.products;

   const handleProduct = (product: Product) => {
      dispatch(dataAction.addProduct(product));
   };

   const removeProduct = (product: Product) => {
      dispatch(dataAction.removeProduct(product));
   };

   const isInCart = (id: number) => {
      return producti.some((prod) => prod.id === id);
   };

   console.log(producti);
   useEffect(() => {
      dispatch(fetchMarketProducts(Number(searchParams.get('skip'))));
   }, []);
   return (
      <div className="main">
         <h1>MARKET</h1>
         {products.length === 0 ? (
            <div className="content">Loading...</div>
         ) : (
            <div className="content">
               {products.map((product) => (
                  <ProductCard
                     product={product}
                     key={product.id}
                     handleProduct={(product: Product) => handleProduct(product)}
                     removeProduct={(product: Product) => removeProduct(product)}
                     isInCart={isInCart(product.id)}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default Shop;
