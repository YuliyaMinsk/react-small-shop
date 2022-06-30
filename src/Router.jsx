import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layouts/Layout';
// import Preloader from './components/sections/Preloader';
// import ScrollToTop from './components/sections/ScrollToTop';
import Category from './components/pages/Category';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import ErrorPage from './components/pages/ErrorPage';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Category />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="product/:productid" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
