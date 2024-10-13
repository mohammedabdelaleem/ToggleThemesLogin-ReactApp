 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Profile from "./pages/profile";

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
    path: "/about",
    element: <About />,
  },


  {
    path: "/profile",
    element: <Profile />,
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
