import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <div className="container">
         <div className="navbar">
            <div className="logo flex">
               <h1 onClick={() => navigate('/')}>HomePage</h1>
            </div>{' '}
            <div className="buttons">
               <NavLink to="/cart" className={({ isActive }) => (isActive ? 'activeStyle' : 'staticStyle')}>
                  <h1>Cart</h1>
               </NavLink>
               <NavLink to="/products" className={({ isActive }) => (isActive ? 'activeStyle' : 'staticStyle')}>
                  <h1>Products</h1>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
