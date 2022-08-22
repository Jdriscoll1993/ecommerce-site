import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';



const App = () => {

  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<SignIn />} />
          <Route path='contact' element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>

      </Routes>
    </>)
}

export default App;
