 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

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
  const {theme, toggleTheme} = useContext(ThemeContext);


  return (
  <div className={`${theme}`}>
  
      <RouterProvider router={router} />
  </div>
  )
  
}

export default App;
