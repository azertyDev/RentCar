import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/user";
import Login from "./Pages/Login/Login";
import Cars from "./Pages/Cars/cars";
import AdminCarsComponent from './Pages/AdminCars/adminCars';

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path={['/admin', '/admin2']} component={Users} />
          <Route exact path="/admincars" component={AdminCarsComponent} />
          <Route exact path="/cars/:name" component={Cars} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
