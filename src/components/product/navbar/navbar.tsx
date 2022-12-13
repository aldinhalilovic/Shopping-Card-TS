import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import './navbar.css';

const Navbar = () => {
   const navigate = useNavigate();
   const cartItems = useAppSelector((state) => state.products.cartProduct.length);

   return (
      <div className="container">
         <div className="navbar">
            <div className="logo flex">
               <h1 onClick={() => navigate('/')}>HomePage</h1>
            </div>{' '}
            <div className="buttons">
               <div
                  className="flex"
                  style={{
                     position: 'relative',
                  }}
               >
                  <NavLink
                     to="/cart"
                     className={({ isActive }) => (isActive ? 'activeStyle flex' : 'staticStyle flex')}
                  >
                     <h1>Cart</h1>
                  </NavLink>
                  {cartItems !== 0 && <h5 className="flex badge">{cartItems}</h5>}
               </div>
               <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? 'activeStyle flex' : 'staticStyle flex')}
               >
                  <h1>Products</h1>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
