import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../Components/Header';
import Question from '../Components/Question';
import Answer from '../Components/Answer';
import Categories from '../Components/Categories';
import QuizPage from '../components/QuizPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
        <Switch>
          <Route path="/select_category" component={QuizPage} exact={true} />
          <Route path="/game" component={QuizPage} exact={true} />
        </Switch>
    </div>
  </Router>
)

export default AppRouter;
