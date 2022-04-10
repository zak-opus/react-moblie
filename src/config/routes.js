// 配置路由信息
import Login from "../pages/Login";
// import User from "../pages/User";
import User from "../container/Count";
const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
];
export default routes;
