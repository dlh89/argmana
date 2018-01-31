import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import CategoriesPage from './components/CategoriesPage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Navbar from './components/Navbar';

const routes = (
  <BrowserRouter>
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));