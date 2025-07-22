import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { memo } from "react";

function App() {
  const routes = [
    {
      path: "/signup",
      component: <Signup />,
    },
    {
      path: "/signin",
      component: <Signin />,
    },
    {
      path: "/blog/:id",
      component: <Blog />,
    },
    {
      path: "/blogs",
      component: <Blogs />,
    },
    {
      path: "/publish",
      component: <Publish />,
    },
    {
      path: "/",
      component: <Home />,
    },
  ];

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default memo(App);
