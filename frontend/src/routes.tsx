import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Router;
