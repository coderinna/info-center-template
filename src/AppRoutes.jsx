import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

const LoadingErrorHandler = lazy(() => import('./components/Errors/LoadingErrorHandler.jsx'));
const NotFound = lazy(() => import('./components/Errors/NotFound.jsx'));

const Help = lazy(() => import('./components/INFO/Main.jsx'));
const Country = lazy(() => import('./components/INFO/Country/Main.jsx'));
const Features = lazy(() => import('./components/INFO/Features/Features.jsx'));
const Incoming = lazy(() => import('./components/INFO/Incoming/Incoming.jsx'));
const SupportCharity = lazy(() => import('./components/INFO/Charity/Main.jsx'));
const UseTerms = lazy(() => import('./components/INFO/UseTerms/main.jsx'));
const PrivacyPolicy = lazy(() => import('./components/INFO/PrivacyPolicy/main.jsx'));
const CookiePolicy = lazy(() => import('./components/INFO/CookiePolicy/main.jsx'));
const Charity = lazy(() => import('./components/INFO/Charity/Main.jsx'));
const Contact = lazy(() => import('./components/INFO/Contact/Contact.jsx'));
const Rules = lazy(() => import('./components/INFO/Rules/main.jsx'));
const Updates = lazy(() => import('./components/INFO/WP/main.jsx'));

export default function AppRoutes() {

return (
  <Suspense
    fallback={<div className="info_center_template_loading"></div>}
  >
      <ScrollToTop />

<Routes>
      <Route path="/" element={<Help/>}>
    <Route index element={<UseTerms />} />
    <Route path="use-terms" element={<UseTerms />} />
    <Route path="privacy-policy" element={<PrivacyPolicy/>} />
    <Route path="cookies-policy" element={<CookiePolicy/>} />
    <Route path="rules" element={<Rules/>} />
    <Route path="contact" element={< Contact/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/support-charity" element={<SupportCharity/>} />
         <Route path="/features" element={<Features />} />  
         <Route path="/incoming" element={<Incoming />} />  
          <Route path="/countries" element={< Country  />} />  
          <Route path="/charity" element={<Charity />} />  
          <Route path="/updates" element={<Updates />} />  
</Route>
  <Route path="*" element={<NotFound />} />
</Routes>
  </Suspense>
);
}