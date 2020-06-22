import React from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => {
  return (
      <Router>
        <Header />
        <Route path="/" exact component={TodoApp} />
        <Route path="/about" component={About} />
      </Router>
  );
};
