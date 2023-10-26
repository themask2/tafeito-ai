import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./screens/Login";
import App from "./App";
import Tasks from "./screens/Tasks";
import ProtectedRout from "./provider/protectedRoute";
import { useAuth } from "./provider/authProvider";

const Routes = () => {

  const authenticatedRoutes = [
    {
      path: '/',
      element: <ProtectedRout />,
      children: [
        {
          path: "/tarefas",
          element: <Tasks />

        }
      ]
    }
  ]

  const unAuthenticatedRoutes = [
    {
      path: '/login',
      element: <Login />
    }
  ]



  const router = createBrowserRouter([
    ...unAuthenticatedRoutes,
    ...authenticatedRoutes]);

  return <RouterProvider router={router} />
}

export default Routes;

