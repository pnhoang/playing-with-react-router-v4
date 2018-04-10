import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AmbiguousMatchExample = () => (
  <Router>
    <div>
      <h2>Ambiguous Match Example </h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/kim">Kim (dynamic)</Link>
        </li>
        <li>
          <Link to="/chris">Chris (dynamic)</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/company" component={Company} />
        <Route path="/:user" component={User} />
      </Switch>
    </div>
  </Router>
);

const About = () => <h2>About</h2>;
const Company = () => <h2>Company</h2>;
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
);

export default AmbiguousMatchExample;
