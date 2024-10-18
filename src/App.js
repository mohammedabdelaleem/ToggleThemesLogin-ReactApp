 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/profile";
import Error404 from "./pages/Error404";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"


import {useContext } from "react";
import ThemeContext from "./context/ContextData";

import "./theme.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>,
  },

  
  {
    path: "/Signin",
    element: <Signin />,
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
