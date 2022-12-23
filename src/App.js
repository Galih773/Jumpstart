import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Landing from './Pages/Landing/Landing';
import Layout from './Pages/LayoutPages/Layout';
import Shop from './Pages/ShopProduct/Shop';
import DetailProduct from './Pages/DetailProduct/DetailProduct';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Success from './Pages/SuccessCheckout/Success';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Landing/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop/:product' element={<DetailProduct/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/cart/checkout' element={<Checkout/>}></Route>
          <Route path='/cart/checkout/success' element={<Success/>}></Route>
        </Route>

        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
