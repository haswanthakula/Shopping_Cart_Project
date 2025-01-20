import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
