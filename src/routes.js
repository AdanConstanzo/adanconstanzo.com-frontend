// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Blog from "./pages/Blog";
import Main from './pages/Main';
import Blogs from './pages/Blogs';
import Book from './pages/Book';
import Books from './pages/Books';
import EventMap from './pages/EventMap';
import Event from './pages/Event';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
// Component
function Routes() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog/:id" component={Blog} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/book/:id" component={Book} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/eventMap" component={EventMap} exact />
        <Route path="/event/:id" component={Event} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routes;