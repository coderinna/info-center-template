import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CustomLanguageSelector} from "../../Language/CustomLanguageSelector.jsx";
import { Link } from 'react-router-dom';
import "./CSS/Main.css";

export default function Navbar() {
  

  return (
    <nav className="navbar" >

      <div className="navbar_content">

        <div className="navbar__logo">
         <Link to="/" >
LOGO
          </Link>
        </div>
                <CustomLanguageSelector />


      </div>

    </nav>
  );
}
