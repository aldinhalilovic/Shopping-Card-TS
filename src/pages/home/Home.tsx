import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataAction } from '../../store/dataslice';
import { useAppDispatch } from '../../store/hooks';

const Home: React.FC = () => {
   const navigate = useNavigate();

   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(dataAction.clearData());
   }, []);

   return (
      <div
         style={{
            height: '90vh',
         }}
      >
         <h1>HOME</h1>
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
               <button onClick={() => navigate('/first?skip=0')}>First</button>
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
               <button onClick={() => navigate('/second?skip=20')}>Second</button>
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
               <button onClick={() => navigate('/third?skip=40')}>Third</button>
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
               <button onClick={() => navigate('/fourth?skip=60')}>Fourth</button>
            </div>
            <div
               style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <button onClick={() => navigate('/fifth?skip=80')}>Fifth</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
