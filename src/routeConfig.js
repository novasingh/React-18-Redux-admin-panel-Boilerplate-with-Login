import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import Dashboard from "./containers/Dashboard";
import Account from "./containers/Account";
import BlankLayout from "./layout/BlankLayout";
import Login from "./containers/Auth/Login";


const RouteConfig = ({isAuthenticated}) => {
  let element = useRoutes([
    {
      path: "/",
      element: isAuthenticated ? <MasterLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/dashboard",
          element:  <Dashboard />,
        },
        {
          path: "/account",
          element:  <Account />,
        },
      ],
    },{
      path: '/',
      element:  <BlankLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '*',
          element: <Login />
        }
      ]
    }
  ]);
  return element;
};

export default RouteConfig;
