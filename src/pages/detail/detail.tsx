import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../service/instance';
import { fetchSingleProduct } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Detail = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const product = useAppSelector((state) => state.products.product);

   useEffect(() => {
      dispatch(fetchSingleProduct(id));
   }, []);
   return (
      <div
         style={{
            minHeight: '90vh',
         }}
      >
         {product.brand}
      </div>
   );
};

export default Detail;
