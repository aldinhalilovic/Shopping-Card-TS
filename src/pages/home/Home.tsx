import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext, ShoppingCartContextProvider } from '../../service/ShoppingCartContext';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const navigateHandle = () => {
        navigate('/cart');
    };

    const context = useContext(ShoppingCartContext);
    useEffect(() => {
        context?.getData();
    }, []);

    console.log(context?.data);
    return (
        <div>
            <h1>Welcome to my Home Page</h1>
            <button onClick={navigateHandle}>Go to Cart</button>
            {context?.data.map((el) => (
                <li>{el.limit}</li>
            ))}
        </div>
    );
};

export default Home;
