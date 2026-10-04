// items/ChatFeature.jsx
import React from "react";
import { FaComments } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import FeatureCard from "../FeatureCard";

const ChatFeature = () => {

  const { t } = useTranslation();
  const keys = t("Features", { returnObjects: true });

  return (
    <FeatureCard
      icon={<FaComments />}
      title={keys?.chatTitle || "Chat"}
    >
      <p>
        {keys?.chatDesc ||
          "Connect instantly with friends and people around you through real-time messaging."}
      </p>

      <p>
      {keys?.chat_text2 || "Chat feels fast, smooth, and personal — send messages, emojis, and stay in sync wherever you are."}
      </p>

      <p>
      {keys?.chat_text3 || "Whether it's one-on-one conversations, everything happens instantly without delays."}

      </p>
    </FeatureCard>
  );
};

export default ChatFeature;