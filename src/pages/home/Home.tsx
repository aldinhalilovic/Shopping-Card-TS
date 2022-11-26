import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../service/ShoppingCartContext';

const Home: React.FC = () => {
   const context = useContext(ShoppingCartContext);
   const navigate = useNavigate();
   const navigateHandle = () => {
      navigate('/cart');
   };
   useEffect(() => {
      context?.setData({
         limit: 0,
         products: [],
         skip: 0,
         total: 0,
      });
   }, []);
   return (
      <div>
         <h1>Welcome to my Home Page</h1>
         <button onClick={navigateHandle}>Go to Cart</button>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'blue',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/first/0')}>First</button>
            </div>
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'red',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/second/20')}>Second</button>
            </div>
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'green',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/third/40')}>Third</button>
            </div>
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'yellow',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/fourth/60')}>Fourth</button>
            </div>
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: '#ccc',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/fifth/80')}>Fifth</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
