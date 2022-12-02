import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const activeStyle = {
      color: 'black',
      textDecoration: 'none',
      fontSize: '15px',
   };

   const staticStyle = {
      fontSize: '10px',
      color: '#F5CBA7',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   };
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
               height: '100%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <div
               style={{
                  width: '300px',
                  // backgroundColor: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
               }}
            >
               <h1 onClick={() => navigate('/')}>HomePage</h1>
            </div>{' '}
            <div
               style={{
                  width: '350px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
               }}
            >
               <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : staticStyle)}>
                  <h1>Cart</h1>
               </NavLink>
               <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : staticStyle)}>
                  <h1>Products</h1>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
