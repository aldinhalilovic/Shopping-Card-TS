import { Route, Routes } from 'react-router-dom';
import Navbar from './components/product/navbar/navbar';
import AllProducts from './pages/allProducts/AllProducts';
import Cart from './pages/cart/Cart';
import Detail from './pages/detail/detail';
import Error from './pages/Error/Error';
import Home from './pages/home/Home';
import Shop from './pages/markets/Shop';

function App() {
   return (
      <div
         style={{
            backgroundColor: '#ccc',
         }}
      >
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/first" element={<Shop />} />
            <Route path="/second" element={<Shop />} />
            <Route path="/third" element={<Shop />} />
            <Route path="/fourth" element={<Shop />} />
            <Route path="/fifth" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
