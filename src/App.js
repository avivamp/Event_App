import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import config from "./config.json";
import http from "./services/httpService";
import Home from "./components/home";
import About from "./components/about";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import EventDetail from "./components/eventDetails";

class App extends Component {
  state = {
    events: [],
  };

  async componentDidMount() {
    const { data } = await http.get(config.basePath + config.getEventsAPI);
    this.setState({ events: data });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/aboutUs" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route
              path="/home"
              render={(props) => (
                <Home eventDetails={this.state.events} {...props} />
              )}
            />
            <Route
              path="/event-detail"
              render={(props) => (
                <EventDetail eventDetails={this.state.events} {...props} />
              )}
            />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
