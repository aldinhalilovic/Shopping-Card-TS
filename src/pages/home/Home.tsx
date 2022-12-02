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
         <div className="flex">
            <h1>Welcome to store!</h1>
         </div>
         <div className="home-content">
            <div className="flex home-markets">
               <div className="flex home-markets-button">
                  <button className="home-buttons" onClick={() => navigate('/first?skip=0')}>
                     Prva radnja
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/second?skip=20')}>
                     Druga radnja
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/third?skip=40')}>
                     Treca radnja
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/fourth?skip=60')}>
                     Cetvrta radnja
                  </button>
                  <button className="home-buttons" onClick={() => navigate('/fifth?skip=80')}>
                     Peta radnja
                  </button>
               </div>
            </div>
            <div className="flex home-markets">
               <div className="flex home-markets-button" onClick={() => navigate('/products')}>
                  <h1>PRODUCTS</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
