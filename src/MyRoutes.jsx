import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';
import Home from './Container/Home';
import About from './Container/about/page';
import ContactPage from './Container/contact/page';

// import Work from './Container/work/page';

import PrivacyPolicy from './Container/privacy-policy/page';
import Conditions from './Container/terms-condition/page';
import Cookie from './Container/cookies/page';
import Navbar from './components/Navbar';
import Footer from "./components/footer/Footer"

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <ScrollRestoration/>
    <Footer />
    </>
);
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
     
    
      { path: '/contact', element: <ContactPage /> },
   
 
     
      { path: '/cookies', element: <Cookie /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/terms-condition', element: <Conditions /> },
     
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default MyRoutes;
