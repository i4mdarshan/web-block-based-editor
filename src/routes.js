import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

const Router = () => {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <Auth /> },
      ],
    },
    {
      element: <AppLayout />,
      children: [
        { path: "/home", element: <Home /> }
      ],
    },
  ]);
  return element;
};

export default Router;
