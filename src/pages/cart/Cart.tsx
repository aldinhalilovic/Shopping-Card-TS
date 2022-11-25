import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>Cart Page</h1>
      <button onClick={handleNavigate}>Go to Home Page</button>
    </div>
  );
};

export default Cart;
