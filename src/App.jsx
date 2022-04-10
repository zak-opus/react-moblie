import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./config/routes";
export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          {routes.map((routeObj) => (
            <Route key={routeObj.path} {...routeObj} />
          ))}
          <Route path="/" element={<Navigate to="/user" />} />
        </Routes>
      </div>
    );
  }
}
