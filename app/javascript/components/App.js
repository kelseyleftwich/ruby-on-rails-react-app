import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">Ruby on Rails with React App</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/" activeClassName="nav-link" className="nav-link">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/about" activeClassName="nav-link active" className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
