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
import SoftwareServices from './Container/services/software-dev/page';
import UIUX from './Container/design/ui-ux/page';
import Wireframing from './Container/design/wireframing-prototyping/page';
import Product from './Container/design/product/page';
import Design from './Container/design/page';
import SaasDev from './Container/services/saas-dev/page';
import AppDev from './Container/services/app-dev/page';
import WebDeb from './Container/services/webdev/page';
import Work from './Container/work/page';
import Services from './Container/services/page';
import CloudService from './Container/cloud-service/page';
import AIService from './Container/ai-service/page';
import DigitalMarketing from './Container/services/digital-marketing/page';
import EducationWork from './Container/work/education/page';
import FinanceWork from './Container/work/finance/page';
import TravelWork from './Container/work/travel/page';
import MarketWork from './Container/work/marketing/page';
import HealthWork from './Container/work/health/page';
import FoodWork from './Container/work/food/page';
import SEO from './Container/services/seo/page';
import EdTech from './Container/industries/Edtech/page';
import Fintech from './Container/industries/fintech/page';
import Market from './Container/industries/marketing/page';
import Travel from './Container/industries/travel/page';
import Health from './Container/industries/healt-care/page';
import Food from './Container/industries/food/page';
import OurTeam from './Container/OurTeam/OurTeam';
import AmirIlyas from './Container/OurTeam/AmirIlyas';
import Hamza from './Container/OurTeam/Hamza';
import Raja from './Container/OurTeam/Raja';
import Umar from './Container/OurTeam/Umar';
import PrivacyPolicy from './Container/privacy-policy/page';
import Conditions from './Container/terms-condition/page';
import Cookie from './Container/cookies/page';
import Navbar from './components/Navbar';
import Footer from "./components/footer/Footer"
import ThreeDPage from "./Container/services/ThreeDPage/ThreeDPage"
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
      { path: '/services', element: <Services /> },
      { path: '/work', element: <Work /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/services/software-dev', element: <SoftwareServices /> },
      { path: '/services/webdev', element: <WebDeb /> },
      { path: '/services/app-dev', element: <AppDev /> },
      { path: '/services/saas-dev', element: <SaasDev /> },
      { path: '/design', element: <Design /> },
      { path: '/design/wireframing-prototyping', element: <Wireframing /> },
      { path: '/design/ui-ux', element: <UIUX /> },
      { path: '/design/product', element: <Product /> },
      { path: '/cloud-service', element: <CloudService /> },
      { path: '/ai-service', element: <AIService /> },
      { path: '/services/digital-marketing', element: <DigitalMarketing /> },
      { path: '/services/seo', element: <SEO /> },
      { path: '/work/food', element: <FoodWork /> },
      { path: '/work/health', element: <HealthWork /> },
      { path: '/work/marketing', element: <MarketWork /> },
      { path: '/work/education', element: <EducationWork /> },
      { path: '/work/finance', element: <FinanceWork /> },
      { path: '/work/travel', element: <TravelWork /> },
      { path: '/industries/Edtech', element: <EdTech /> },
      { path: '/industries/fintech', element: <Fintech /> },
      { path: '/industries/marketing', element: <Market /> },
      { path: '/industries/travel', element: <Travel /> },
      { path: '/industries/healt-care', element: <Health /> },
      { path: '/industries/food', element: <Food /> },
      { path: '/our-team', element: <OurTeam /> },
      { path: '/our-team/Founder', element: <AmirIlyas /> },
      { path: '/our-team/designer', element: <Hamza /> },
      { path: '/our-team/seo-team-lead', element: <Raja /> },
      { path: '/our-team/techniqal-advisor', element: <Umar /> },
      { path: '/cookies', element: <Cookie /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/terms-condition', element: <Conditions /> },
      { path: '/services/3d-ar-vr', element: <ThreeDPage /> },
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default MyRoutes;
