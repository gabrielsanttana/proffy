import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/TeacherRegister';
import TeacherList from './pages/TeacherList';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/ensinar" component={Register} />
      <Route exact path="/estudar" component={TeacherList} />
    </BrowserRouter>
  );
};

export default Router;
