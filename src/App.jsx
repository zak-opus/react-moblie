import { Component, Suspense } from "react";
import { NavLink, Routes, Route, Navigate, Link } from "react-router-dom";
import routes from "./config/routes";
import Loading from "./pages/loading";
import "./App.less";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Link to="/login">Login</Link>
        <Link to="/user">User</Link>
        <NavLink to="/test1">Test1</NavLink>
        <NavLink to="/count">Count</NavLink>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((routeObj) => (
              <Route key={routeObj.path} {...routeObj} />
            ))}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
