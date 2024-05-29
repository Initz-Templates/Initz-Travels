import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingaporeTripPage from "./Components/SingaPore";
import Service from "./Components/Service";
import Recommendation from "./Components/Recommendation";
import ErrorBoundary from "./Components/ErrorBoundary";
import ThailandTripPage from "./Components/Thailand.jsx";
import ParisTripPage from "./Components/Paris.jsx";
import NewZealandTripPage from "./Components/NewZealand.jsx";
import BoraBoraTripPage from "./Components/BoraBora.jsx";
import LondonTripPage from "./Components/London.jsx";

const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path:'/home',
    element: <App/>,
  },
  {
    path: '/services',
    element: <Service/>,
  }, 
  {
    path: '/places',
    element: <Recommendation/>,
  },
  {
    path:'/singapore',
    element:<SingaporeTripPage/>,
  },  
  {
    path:'/thailand',
    element:<ThailandTripPage/>,
  }, 
  {
    path:'/paris',
    element:<ParisTripPage/>,
  }, 
  {
    path:'/newzealand',
    element:<NewZealandTripPage/>
  },
  {
    path:'/borabora',
    element:<BoraBoraTripPage/>
  },
  {
    path:'/london',
    element:<LondonTripPage/>
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
    <RouterProvider router={router}/>
    </ErrorBoundary>
  </React.StrictMode>
);
