 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import NotSighIn from "./pages/NotSighIn"


import {useContext } from "react";
import ThemeContext from "./context/ContextData";

import "./theme.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  
  {
    path: "/Signin",
    element: <Signin />,
  }
  
  ,

  {
    path: "/NotSighIn",
    element: <NotSighIn />,
  }
  ,

  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);


function App() {
  const {theme} = useContext(ThemeContext);



  return (
  <div className={`${theme}`}>
      <RouterProvider router={router} /> 
  </div>
  )
  
}

export default App;
