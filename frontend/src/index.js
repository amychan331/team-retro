import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import AppliancesPage from "views/AppliancesPage/AppliancesPage.jsx";
import HomeownerPage from "views/HomeownerPage/HomeownerPage.jsx";
import RenterPage from "views/RenterPage/RenterPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/component" component={Components} />
      <Route path="/appliances" component={AppliancesPage} />
      <Route path="/homeowner" component={HomeownerPage} />
      <Route path="/renter" component={RenterPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
