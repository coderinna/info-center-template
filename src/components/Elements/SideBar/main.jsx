import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { RiInformation2Line, RiMenuFoldLine, RiMenuUnfoldLine, RiFileListLine, RiUserSmileLine, 
  RiQuestionLine, RiShieldKeyholeLine, RiMailSendLine, RiSettings4Line} from "react-icons/ri";
import SidebarDropdown from './SidebarDropdown.jsx';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarMobileToggle from './SidebarMobileToggle.jsx';
import "./CSS/Main.css";

const UserTerms = ({
  activeTab,
  setActiveTab
}) => {

  const { t } = useTranslation();
  const keys = t("Help", { returnObjects: true });
 const version = import.meta.env.VITE_GITHUB_SHA || "VERSION";
  const date = import.meta.env.VITE_DATE_TAG || "DATE";
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (location.state?.activeTab && location.state.activeTab !== activeTab) {
      setLoading(true);
      const timer = setTimeout(() => {
        setActiveTab(location.state.activeTab);
        setLoading(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.state?.activeTab]);


const menuItems = [ 
   {
    key: "FAQ",
    title: keys?.info_tab || "Info",
    subtitle:  keys?.info_tab_text ||"Info",
    icon: <RiQuestionLine />,
    subItems: [
      { key: "UseTerms",
         label: keys?.useTerms || "UseTerms",
    path: "/use-terms",},
      { key: "PrivacyPolicy", 
        label:  keys?.privacyPolicy  ||"Privacy Policy",
    path: "/privacy-policy",},
      { key: "CookiePolicy",
         label:  keys?.cookies || "Cookies",
    path: "/cookies-policy",},
      { key: "Rules", label:  keys?.rules || "Rules",
    path: "/rules",},
    ]
  },
  {
    key: "Meistä",
    title: keys?.manual_info_center_template ||"meistä",
    subtitle: keys?.manual_tab_info_center_template || "About us",
    icon: <RiSettings4Line />,
    subItems: [
      { key: "Features", label:  keys?.features  ||"Features",
    path: "/features",},
      { key: "Countries", label:  keys?.countries  ||"Country-specific availability",
    path: "/countries",},
      { key: "Charity", label:  keys?.charity  ||"Charity",
    path: "/charity",},
    ]
  },
  {
    key: "Support",
    title: keys?.support_tab || "Support",
    subtitle: keys?.support_tab_text || "Support",
    icon: <RiMailSendLine />,
    subItems: [
      { key: "ContactUs", label: keys?.contact ||"Contact",
    path: "/contact",},
    ]
  },
  {
    key: "Updates",
    title: keys?.updates_tab || "Updates",
    subtitle: keys?.updates_tab_text || "Updates",
    icon: <RiFileListLine />,
    subItems: [
      { key: "WP", label: keys?.news || "NEWs",
    path: "/updates",}
    ]
  }
];

return (
    <div className="userterms-card">

<SidebarMobileToggle
  isMobile={isMobile}
  mobileMenuOpen={mobileMenuOpen}
  setMobileMenuOpen={setMobileMenuOpen}
/>

      <aside
        className={`sidebar-left ${collapsed ? "collapsed" : ""} ${
          mobileMenuOpen ? "mobile-open" : ""
        }`}
      >
<SidebarHeader
collapsed={collapsed}
keys={keys}
/>

        <nav className="sidebar-left-nav">
{menuItems?.map((item) => (
  <SidebarDropdown
    key={item.key}
    item={item}
    collapsed={collapsed}
    openDropdown={openDropdown}
    setOpenDropdown={setOpenDropdown}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    setMobileMenuOpen={setMobileMenuOpen}
    setLoading={setLoading}
  />
))}
          
              <span className="info_version">Version: {version}
                 <br></br>Date: {date}</span>
        </nav>
      </aside>
    </div>
);

};

export default UserTerms;
