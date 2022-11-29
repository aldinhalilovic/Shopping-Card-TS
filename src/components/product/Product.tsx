import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { Product } from '../../models/models';
import { useAppSelector } from '../../store/hooks';

type ProductCardProps = {
   product: Product;
   handleProduct: (product: Product) => void;
   removeProduct: (product: Product) => void;
   isInCart: boolean;
};

const ProductCard = (props: ProductCardProps) => {
   const { product, handleProduct, removeProduct, isInCart } = props;
   return (
      <div className="card">
         <h1>{product.brand}</h1>
         <h1>{product.price}</h1>
         {!isInCart ? (
            <button onClick={() => handleProduct(product)}>Add to cart</button>
         ) : (
            <button onClick={() => removeProduct(product)}>Remove from Cart</button>
         )}
      </div>
   );
};

export default ProductCard;
