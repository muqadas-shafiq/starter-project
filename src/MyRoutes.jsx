import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Container/Home'
import About from "./Container/about/page"
import ContactPage from "./Container/contact/page"
import SoftwareServices from './Container/services/software-dev/page'
import UIUX from './Container/design/ui-ux/page'
import Wireframing from './Container/design/wireframing-prototyping/page'
import Product from './Container/design/product/page'
import Design from './Container/design/page'
import SaasDev from './Container/services/saas-dev/page'
import AppDev from './Container/services/app-dev/page'
import WebDeb from './Container/services/webdev/page'
import Work from "./Container/work/page"
import Services from './Container/services/page'
import CloudService from './Container/cloud-service/page'
import AIService from './Container/ai-service/page'
import DigitalMarketing from './Container/services/digital-marketing/page'
import EducationWork from "./Container/work/education/page"
import FinanceWork from "./Container/work/finance/page"
import TravelWork from "./Container/work/travel/page"
import MarketWork from "./Container/work/marketing/page"
import HealthWork from "./Container/work/health/page"
import FoodWork from "./Container/work/food/page"
import SEO from './Container/services/seo/page'
import EdTech from './Container/industries/Edtech/page'
import Fintech from './Container/industries/fintech/page'
import Market from "./Container/industries/marketing/page"
import Travel from "./Container/industries/travel/page"
import Health from "./Container/industries/healt-care/page"
import Food from "./Container/industries/food/page"
import OurTeam from './Container/OurTeam/OurTeam'
import AmirIlyas from './Container/OurTeam/AmirIlyas'
import Hamza from './Container/OurTeam/Hamza'
import Raja from './Container/OurTeam/Raja'
import Umar from './Container/OurTeam/Umar'
import PrivacyPolicy from "./Container/privacy-policy/page"
import Conditions from "./Container/terms-condition/page"
import Cookie from "./Container/cookies/page"
const MyRoutes = () => {
  return (
    <div>
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<Work/>} path="/work"/>
        <Route element={<ContactPage/>} path="/contact"/>
        <Route element={<SoftwareServices/>} path="/services/software-dev"/>
        <Route element={<WebDeb/>} path="/services/webdev"/>
        <Route element={<AppDev/>} path="/services/app-dev"/>
        <Route element={<SaasDev/>} path="/services/saas-dev"/>
        <Route element={<Design/>} path="/design"/>
        <Route element={<Wireframing/>} path="/design/wireframing-prototyping"/>
        <Route element={<UIUX/>} path="/design/ui-ux"/>
        <Route element={<Product/>} path="/design/product"/>
        <Route element={<CloudService/>} path="/cloud-service"/>
        <Route element={<AIService/>} path="/ai-service"/>
        <Route element={<DigitalMarketing/>} path="/services/digital-marketing"/>
        <Route element={<SEO/>} path="/services/seo"/>
        <Route element={<FoodWork/>} path="/work/food"/>
        <Route element={<HealthWork/>} path="/work/health"/>
        <Route element={<MarketWork/>} path="/work/marketing"/>
        <Route element={<EducationWork/>} path="/work/education"/>
        <Route element={<FinanceWork/>} path="/work/finance"/>
        <Route element={<TravelWork/>} path="/work/travel"/>
        <Route element={<EdTech/>} path="/industries/Edtech"/>
        <Route element={<Fintech/>} path="/industries/fintech"/>
        <Route element={<Market/>} path="/industries/marketing"/>
        <Route element={<Travel/>} path="/industries/travel"/>
        <Route element={<Health/>} path="/industries/healt-care"/>
        <Route element={<Food/>} path="/industries/food"/>
        <Route element={<OurTeam/>} path="/our-team"/>
        <Route element={<AmirIlyas/>} path="/our-team/Founder"/>
        <Route element={<Hamza/>} path="/our-team/designer"/>
        <Route element={<Raja/>} path="/our-team/seo-team-lead"/>
        <Route element={<Umar/>} path="/our-team/techniqal-advisor"/>
        <Route element={<Cookie/>} path="/cookies"/>
        <Route element={<PrivacyPolicy/>} path="/privacy-policy"/>
        <Route element={<Conditions/>} path="/terms-condition"/>
        </Routes>
    </div>
  )
}

export default MyRoutes