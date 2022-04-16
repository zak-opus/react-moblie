import { Component, Suspense } from "react";
import { NavLink, Routes, Route, Navigate, Link } from "react-router-dom";
import routes from "./config/routes";
import Loading from "./pages/loading";
export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/user">User</Link>
        <NavLink to="/test1">Test1</NavLink>
        <Suspense fallback={<Loading></Loading>}>
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
