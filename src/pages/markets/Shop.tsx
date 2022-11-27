import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/product/Product';
import { ShoppingCartContext } from '../../service/ShoppingCartContext';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './Shop.css';

const Shop = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const context = useContext(ShoppingCartContext);

   const data = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();
   useEffect(() => {
      // console.log(searchParams.get('skip'));
      // context?.getData(Number(searchParams.get('skip')) || 0);
      dispatch(dataAction.axiosFunction(Number(searchParams.get('skip'))));
   }, []);
   console.log(data);

   const products = context?.data.products;
   return (
      <div className="main">
         <div>header</div>
         <button onClick={() => navigate('/cart')}>Cart</button>
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
