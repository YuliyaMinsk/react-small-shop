import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Preloader = React.lazy(() => import('./components/layouts/Preloader'));
const ScrollToTop = React.lazy(() => import('./components/layouts/ScrollToTop'));
const Category = React.lazy(() => import('./components/pages/Category'));
// const Cart = React.lazy(() => import("./components/pages/Cart"));
// const PDP = React.lazy(() => import("./components/pages/PDP"));
// const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <ScrollToTop>
            <Preloader />
            <Routes>
              <Route exact path="/" component={Category} />
            </Routes>
          </ScrollToTop>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
