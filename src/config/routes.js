import { lazy } from "react";
// 配置路由信息
// import Login from "../pages/Login";
// // import User from "../pages/User";
// import User from "../container/Count";
// import Test1 from "../pages/Test1";
// 懒加载
const Login = lazy(() => import("../pages/Login"));
const User = lazy(() => import("../container/Count"));
const Test1 = lazy(() => import("../pages/Test1"));
const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/test1",
    element: <Test1 />,
  },
];
export default routes;
