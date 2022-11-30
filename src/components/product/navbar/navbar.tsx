import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <div
         style={{
            width: '100%',
            height: '10vh',
            borderBottom: '2px solid black',
         }}
      >
         <div
            style={{
               display: 'flex',
               justifyContent: 'space-evenly',
            }}
         >
            <h1>HomePage</h1>
            <div>
               <button onClick={() => navigate('/')}>Home</button>
               <button onClick={() => navigate('/cart')}>Cart</button>
               <button onClick={() => navigate('/products')}>Products</button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
