// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Blog from "./pages/Blog";
import Main from './pages/Main';
import Blogs from './pages/Blogs';
// Component
function Routes() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog/:id" component={Blog} exact />
        <Route path="/blogs" component={Blogs} exact />
      </Switch>
    </div>
  );
}

export default Routes;