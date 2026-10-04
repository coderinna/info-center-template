import React, { useEffect, useState } from "react";
import "./CSS/Recaptcha.css";
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
import { useTranslation } from "react-i18next";
const isDev = import.meta.env.DEV;

const CaptchaPopup = ({ onVerify,
   onCancel,
    loading }) => {

  const { t } = useTranslation();
  const keys = t("Captcha", { returnObjects: true });
  const [widgetId, setWidgetId] = useState(null);

useEffect(() => {
  if (isDev) return;
  if (!document.getElementById("recaptcha-script")) {
    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  const interval = setInterval(() => {
    if (window.grecaptcha && widgetId === null) {
      const container = document.getElementById("recaptcha-container");

      if (container && container.childNodes.length === 0) {
        const id = window.grecaptcha.render(container, {
          sitekey: siteKey,
          callback: (token) => onVerify && onVerify(token),
        });
        setWidgetId(id);
        clearInterval(interval);
      }
    }
  }, 100);

  return () => clearInterval(interval);
}, [widgetId, onVerify]);

  const handleReset = () => {
    if (window.grecaptcha && widgetId !== null) window.grecaptcha.reset(widgetId);
  };

  return (
    <div className="captcha-popup">
      <div className="captcha-content">
        <h3>Verify reCAPTCHA</h3>
        <p>Please complete the verification to send your message.</p>

{isDev ? (
  <div className="recaptcha-dev">
    DEV, no reCAPTCHA.
      <button
    className="recaptcha-dev-btn"
    onClick={() => onVerify && onVerify("dev-token")}
    disabled={loading}
  >
    Only DEV verify
  </button>
  </div>
) : (
  <div id="recaptcha-container" className="recaptcha-visual"></div>
)}

        <button
         onClick={onCancel} 
        disabled={loading} 
        className="captcha-cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CaptchaPopup;