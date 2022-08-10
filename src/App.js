import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'

const Auth = () => {
  return(
    <div><h1>sign in page</h1></div>
  )
}

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='home' element={<Home />} />
          <Route path='signin' element={<Auth />} />


        </Route>

      </Routes>
    </>)
}

export default App;
