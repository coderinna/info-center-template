// items/ProfileFeature.jsx
import React from "react";
import { FaUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import FeatureCard from "../FeatureCard";
import ProfilePIC2 from "./Images/profile.webp";

const ProfileFeature = () => {
  const { t } = useTranslation();
  const keys = t("Features", { returnObjects: true });

  return (
    <FeatureCard
      icon={<FaUser />}
      title={keys?.profileTitle || "Profiles"}
    >
      <p>
        {keys?.profileDesc ||
          "Create a unique identity and showcase who you are."}
      </p>

      <p>
        
      {keys?.profile_text1 || "Customize your profile with photos, bio, interests, and personal details. Let others discover what makes you stand out."}

      </p>

{!ProfilePIC2 &&
      <img
        src={ProfilePIC2}
        alt="Profile preview"
        className="Features_img"
      />}

      <p>
      {keys?.profile_text1 || " Control your visibility, manage connections, and keep your profile always up to date."}
       
      </p>
    </FeatureCard>
  );
};

export default ProfileFeature;