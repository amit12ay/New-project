import React, { Children } from 'react';

import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './component/Navbar';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";



import Register from './pages/Register';
import "./style.scss";


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
};

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout/>,
    Children:  [
      {

      path:"/",
      element:<Home/>
      },
      {

        path:"/single",
        element:<Single/>
        },
        {

          path:"/write",
          element:<Write/>
          },
     ]
  
  },
  {
    path: "/login",
    element: <Login/>,

  },
  {
    path: "/register",
    element: <Register/>,

  },
]);

function App() {
  return (
  
   <div className='app'>
    <div className='container'>
<RouterProvider router={router}/>
   </div>
   </div>
   
  
  )
}

export default App;
