import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See Our Todos!</h1>
        <p>
          <Link to="/todos"> See my Todos! </Link>
        </p>
        <p>
          <Link to="/todos/new">Add a todo! </Link>
        </p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/todos" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
