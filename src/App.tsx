import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Shop from './pages/markets/Shop';

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/first/:num" element={<Shop />} />
            <Route path="/second/:num" element={<Shop />} />
            <Route path="/third/:num" element={<Shop />} />
            <Route path="/fourth/:num" element={<Shop />} />
            <Route path="/fifth/:num" element={<Shop />} />
         </Routes>
      </div>
   );
}

export default App;
