import { Component } from "react";
import { Routes, Route, Navigate, NavLink,Link } from "react-router-dom";
import routes from "./config/routes";
export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/user">User</Link>
        <NavLink to="/test1">Test1</NavLink>
        <Routes>
          {routes.map((routeObj) => (
            <Route key={routeObj.path} {...routeObj} />
          ))}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }
}
