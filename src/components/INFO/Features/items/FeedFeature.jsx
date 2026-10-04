// items/FeedFeature.jsx
import React from "react";
import { FaRss } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import FeatureCard from "../FeatureCard";
import ProfilePIC2 from "./Images/profile.webp";

const FeedFeature = () => {
  const { t } = useTranslation();
  const keys = t("Features", { returnObjects: true });

  return (
    <FeatureCard
      icon={<FaRss />}
      title={keys?.feedTitle || "Feed"}
    >
      <p>
        {keys?.feedDesc ||
          "Stay connected with everything happening in your info_center_template network — live, dynamic, and always updating."}
      </p>

      <p>
        
      {keys?.feed_text2 || "Discover trending posts, follow conversations, and explore content that interests you."}

      </p>
{!ProfilePIC2 && 
      <img
        src={ProfilePIC2}
        alt="Feed preview"
        className="Features_desc_img"
      />}

      <p>
      {keys?.feed_text3 || "Like, comment, and engage with posts in real time. Never miss important updates from people you are interested."}
      
      </p>

      {/* MINI UI MOCK (extra premium fiilis) */}
      <div className="Feed_mock">
        <div className="Feed_mock_post">
          <div className="Feed_mock_avatar"></div>
          <div className="Feed_mock_content">
            <div className="Feed_mock_line short"></div>
            <div className="Feed_mock_line"></div>
          </div>
        </div>

        <div className="Feed_mock_post">
          <div className="Feed_mock_avatar"></div>
          <div className="Feed_mock_content">
            <div className="Feed_mock_line"></div>
            <div className="Feed_mock_line short"></div>
          </div>
        </div>
      </div>

    </FeatureCard>
  );
};

export default FeedFeature;