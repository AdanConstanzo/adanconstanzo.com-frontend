import React from "react";

import { Switch, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Category from "./pages/Category";
import Main from './pages/Main';

function Routes() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/articles" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default Routes;