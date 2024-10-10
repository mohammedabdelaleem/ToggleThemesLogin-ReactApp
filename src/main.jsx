import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Page2  from './pages/page2.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {DataProvider} from "./context/DataContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement :<h1>Sorry Page Not Found : 404</h1>
  },
  {
    path: "/page2",
    element: <Page2 />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
