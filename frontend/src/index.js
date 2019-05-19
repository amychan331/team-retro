import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import AppliancesHome from "views/AppliancesPage/AppliancesHome.jsx";
import Heater from "views/AppliancesPage/Heater.jsx";
import WaterHeater from "views/AppliancesPage/WaterHeater.jsx";
import AC from "views/AppliancesPage/AC.jsx";
import Vehicle from "views/AppliancesPage/Vehicle.jsx";
import Ownership from "views/AppliancesPage/Ownership.jsx";
import HomeownerPage from "views/HomeownerPage/HomeownerPage.jsx";
import RenterPage from "views/RenterPage/RenterPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/appliances" component={Heater} />
      <Route path="/appliances/heater" component={Heater} />
      <Route path="/appliances/waterheater" component={WaterHeater} />
      <Route path="/appliances/ac" component={AC} />
      <Route path="/appliances/vehicle" component={Vehicle} />
      <Route path="/appliances/ownership" component={Ownership} />
      <Route path="/homeowner" component={HomeownerPage} />
      <Route path="/renter" component={RenterPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
