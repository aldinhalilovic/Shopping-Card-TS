import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Product } from '../../models/models';

type ProductCardProps = {
   product: Product;
};

const ProductCard = (props: ProductCardProps) => {
   const { product } = props;
   return (
      <div className="card">
         <h1>{product.brand}</h1>
         <h1>{product.price}</h1>
      </div>
   );
};

export default ProductCard;
