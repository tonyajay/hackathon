import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Colleges from "./pages/Colleges";
import CollegeDetails from "./pages/CollegeDetails";
//components
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <PrivateRoute path="/compare">
          <Compare />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/colleges">
          <Colleges />
        </Route>
        <Route path="/colleges/:id" children={<CollegeDetails />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
