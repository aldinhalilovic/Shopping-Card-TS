import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch } from '../../store/hooks';
import './home.css';

const Home: React.FC = () => {
   const navigate = useNavigate();

   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(dataAction.clearData());
   }, []);

   return (
      <div className="home">
         <div className="flex-column">
            <h3>Welcome to store!</h3>
            <h3>Pick your path</h3>
         </div>
         <div className="home-content">
            <div className="flex home-markets">
               <div className="flex home-markets-button">
                  <button className="home-buttons" onClick={() => navigate('/first?skip=0')}>
                     First Store
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/second?skip=20')}>
                     Second Store
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/third?skip=40')}>
                     Third Store
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/fourth?skip=60')}>
                     Fourth Store
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/fifth?skip=80')}>
                     Fifth Store
                  </button>
               </div>
            </div>
            <div className="flex home-markets">
               <div className="flex home-markets-product-button" onClick={() => navigate('/products')}>
                  <h1>PRODUCTS</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
