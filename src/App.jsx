

import React, { useState, useEffect, Suspense, lazy, useRef} from "react";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";
import AppRoutes from "./AppRoutes.jsx";
import  { useTheme } from "./config/theme/ThemeContext.jsx";
import { useLocation } from "react-router-dom";
import Footer2 from './components/Elements/Footer2/Footer.jsx';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { useParams, useSearchParams } from "react-router-dom";
import "./CSS/App.css";
import "./CSS/index.css";
import "./CSS/goUp.css";

function App() {

  const [showGoUp, setShowGoUp] = useState(false);
const appRef = useRef(null);

useEffect(() => {
  const element = appRef.current;

  if (!element) return;

  const handleScroll = () => {
    setShowGoUp(element.scrollTop > 300);
  };

  element.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    element.removeEventListener("scroll", handleScroll);
  };
}, []);

const goUp = () => {
  appRef.current?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const seo = {
  title: "info_center_template Info Center",
  description:
    "Find help, support, safety information, community guidelines, privacy policies, account assistance, and answers to frequently asked questions about info_center_template.",
  url: `https://info.info_center_template.com/`,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: seo.title,
  description: seo.description,
  url: seo.url,
};


  return (
  <div className="app" ref={appRef}>

        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link rel="canonical" href={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="theme-color" content="#292929ff" />
    
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

  <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer2 />

      {showGoUp && (
        <button className="goUpButton" onClick={goUp}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;