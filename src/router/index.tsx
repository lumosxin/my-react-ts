import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom'

/**
 * 引入页面
 */
const Home = lazy(() => import("@/pages/home/index"));
const Login = lazy(() => import("@/pages/login/index"));

/**
 * 配置路径
 */
const routers: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
];

export default routers;