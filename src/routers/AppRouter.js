import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
import PlayPage from "../components/PlayPage";
import CategoriesPage from "../components/CategoriesPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/play" component={CategoriesPage} exact={true} />
        <Route path="/play/:topic" component={PlayPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
