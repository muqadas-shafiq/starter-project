import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';

import { Home } from './Home';

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
     
     
    
   
     
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default MyRoutes;
