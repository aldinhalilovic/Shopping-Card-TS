import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/product/product/Product';
import { Product } from '../../models/models';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

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
      <div
         style={{
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <div
            style={{
               // minHeight: '90vh',
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {cartProducts.length === 0 ? (
               <div
                  style={{
                     height: '40vh',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-evenly',
                     alignItems: 'center',
                  }}
               >
                  <h1>Your cart is empty, please add something</h1>
                  <Button color={'dark'} radius="md" onClick={() => navigate('/')}>
                     Go to markets
                  </Button>
               </div>
            ) : (
               <div
                  style={{
                     width: '100%',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     backgroundColor: '#ccc',
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
            )}
         </div>
      </div>
   );
};

export default Cart;
