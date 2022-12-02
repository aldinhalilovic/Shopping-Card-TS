import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/product/product/Product';
import { Product } from '../../models/models';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './cart.css';

const Cart: React.FC = () => {
   const navigate = useNavigate();
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
      <div className="cart">
         <div className="flex div">
            {cartProducts.length === 0 ? (
               <div className="cart-content">
                  <h1>Your cart is empty, please add something</h1>
                  <Button color={'dark'} radius="md" onClick={() => navigate('/')}>
                     Go to markets
                  </Button>
               </div>
            ) : (
               <div className="cart-products flex">
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
            )}
         </div>
      </div>
   );
};

export default Cart;
