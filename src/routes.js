// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Blog from "./pages/Blog";
import Main from './pages/Main';
import Blogs from './pages/Blogs';
import Book from './pages/Book';
import Books from './pages/Books';
// Component
function Routes() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog/:id" component={Blog} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/book/:id" component={Book} exact />
        <Route path="/books" component={Books} exact />
      </Switch>
    </div>
  );
}

export default Routes;