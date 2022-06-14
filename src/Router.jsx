import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layouts/Layout';
// import Preloader from './components/sections/Preloader';
// import ScrollToTop from './components/sections/ScrollToTop';
import Category from './components/pages/Category';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import Errorpage from './components/pages/Errorpage';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Category />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
