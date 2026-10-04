import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SideBar from "../Elements/SideBar/main.jsx";
import seoMap from "./SEO/infoSeoMap";

import "./Contact/CSS/Main.css";
import "./CSS/main.css";

const UserTerms = () => {

  const location = useLocation();

  return (
    <div className="userterms-centered-layout">


      <div className="userterms-card">

        <Suspense
          fallback={
            <div className="loader-container2">
              <div className="loader2"></div>
            </div>
          }
        >
          <SideBar />

          <main className="userterms-content">
            <div className="info_tab-content">
              <Outlet />
            </div>
          </main>

        </Suspense>

      </div>
    </div>
  );
};

export default UserTerms;