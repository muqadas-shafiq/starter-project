import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';

import Home from './Container/Home';
import Fun from './Container/Fun';

const Layout = () => (
  <>
    
    <Outlet />
    <ScrollRestoration/>
  
    </>
);
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {path:'/fun', element:<Fun/>},
     
     
    
   
     
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default MyRoutes;
