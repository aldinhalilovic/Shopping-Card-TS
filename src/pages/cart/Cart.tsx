import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/product/product/Product';
import { Product } from '../../models/models';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Cart: React.FC = () => {
   const navigate = useNavigate();
   const handleNavigate = () => {
      navigate('/');
   };

   const dispatch = useAppDispatch();

   const cartProducts = useAppSelector((state) => state.products.cartProduct);
   const handleProduct = (product: Product) => {
      dispatch(dataAction.addProduct(product));
   };

   const removeProduct = (product: Product) => {
      dispatch(dataAction.removeProduct(product));
   };

   const isInCart = (id: number) => {
      return cartProducts.some((prod) => prod.id === id);
   };

   return (
      <div>
         <h1>Cart Page</h1>
         <br />
         <br />
         <br />

         <div
            style={{
               display: 'flex',
            }}
         >
            {cartProducts.map((product) => (
               <ProductCard
                  product={product}
                  key={product.id}
                  handleProduct={(product: Product) => handleProduct(product)}
                  removeProduct={(product: Product) => removeProduct(product)}
                  isInCart={isInCart(product.id)}
               />
            ))}
         </div>
      </div>
   );
};

export default Cart;
