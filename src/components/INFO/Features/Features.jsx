import React from "react";
import { useTranslation } from "react-i18next";
import "./CSS/Features.css";
import ChatFeature from "./items/ChatFeature";
import FeedFeature from "./items/FeedFeature";
import ProfileFeature from "./items/ProfileFeature";
import DateFeature from "./items/DateFeature";
import ChannelsFeature from "./items/ChannelsFeature";
import CreatorsFeature from "./items/CreatorsFeature.jsx";
import { Helmet } from "react-helmet-async";

const Features = () => {

  const { t } = useTranslation();
  const keys = t("Features", { returnObjects: true });

  const seo = {
  title: "Features & Benefits | info_center_template",
  description:
    "Explore info_center_template features including VIP tools, messaging, profiles, discovery features, and community functions.",
  url: "https://www.info_center_template.com/features",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: seo.title,
  description: seo.description,
  url: seo.url,
};

  return (     <main><section>
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
    <div className="Features_container" 
    aria-label={keys?.header || "Features"}>

      <h1 className="Features_header">{keys?.header || "Features"}</h1>

      <div className="Features_grid">
        <ChatFeature />
        <FeedFeature />
        <ProfileFeature />
      </div>
    </div>
           </section></main>
  );
};

export default Features;