import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LogsService from "../../Services/Services/Security/Contact.service.js";
import CaptchaPopup from "../Captcha/CaptchaPopup.jsx";
import "./CSS/Main.css";

const DMCAForm = ({dmcaReport}) => {

  const { t } = useTranslation();
  const keys = t("Help", { returnObjects: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const cooldownTime = 60;
  const [showCaptchaPopup, setShowCaptchaPopup] = useState(false);
  const [dmca, setDMCA] = useState(false);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!category) newErrors.category = true;
    if ((category === "illigal" || category === "copyright") && !url) newErrors.url = true;
    if (!message) newErrors.message = true;
    if (!signature) newErrors.signature = true;
    if (!agree) newErrors.agree = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowCaptchaPopup(true);
  };

  const handleSetDMCA = () => {
setDMCA(true)
  };

  const handleCaptchaVerify = async (token) => {
    setLoading(true);
    try {
      const data = {
         name: name, 
        email: email,
        message: message, 
        url: url, 
        type: category, 
        captcha: token };
      let response;
      if (dmca) {
        response = await LogsService.createDMCA(data);
      } else {
        response = await LogsService.createContact(data);
      }

      if (response?.res === "OK") {
        setSuccess(true);
        setName(""); setEmail(""); setMessage(""); setSignature(""); setCategory(""); setUrl(""); setAgree(false);
        setCooldown(cooldownTime);
      } else setSuccess(false);
    } catch (err) {
      setSuccess(false);
    }
    setLoading(false);
    setShowCaptchaPopup(false);
  };

  const handleCaptchaCancel = () => setShowCaptchaPopup(false);

  return (
    <div className="wallChannel_section wallChannel-container">
      <div className="wall_box">
      <h2>  {keys?.header_contact 
        || "Contact us"}</h2>


             <p>{keys?.contact_text || 
             "Ota yhteyttä meihin tämän lomakkeen avulla."}</p>

        <form className="dmca-form">
          <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

          <div className="form-group">
            <label>{keys?.name || "Name"} {errors.name && <span className="error">*</span>}</label>
            <input type="text" placeholder={keys?.placeholder_name || "Name.."} value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>{keys?.email || "Email"} {errors.email && <span className="error">*</span>}</label>
            <input type="email" placeholder={keys?.placeholder_email || "Email.."} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>{keys?.subject_contac || "Subject"} {errors.category && <span className="error">*</span>}</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">{keys?.select || "Select"}</option>

  <span>
    <option value="cooperation">
      {keys?.cooperation || "Cooperation"}
    </option>

    <option value="bug">
      {keys?.bug || "Bug"}
    </option>

    <option value="other">
      {keys?.other || "Other"}
    </option>
  </span>
            </select>
          </div>



          <div className="form-group">
            <label>{keys?.message || "Message"} {errors.message && <span className="error">*</span>}</label>
            <textarea placeholder={keys?.placeholder_message || "Message.."} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className="form-group">
            <label>{keys?.digital_sign || "Digital signature"} {errors.signature && <span className="error">*</span>}</label>
            <input type="text" placeholder={keys?.placeholder_name_sign || "Name sign.."} value={signature} onChange={(e) => setSignature(e.target.value)} />
          </div>

          <div className="form-group checkbox-group">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label>{keys?.text_checkbox || "I have read and agree."} {errors.agree && <span className="error">*</span>}</label>
          </div>

          <button className="dmca_button" disabled={loading || cooldown > 0} onClick={handleSendClick}>
            {loading ? keys?.sending || "Sending..." : cooldown > 0 ? `${keys?.wait || "Wait"} ${cooldown}s` : keys?.send || "Send"}
          </button>
        </form>

        {success === true && <p className="success-msg">{keys?.text_ok || "OK"}</p>}
        {success === false && <p className="error-msg">{keys?.text_not_ok || "Fail"}</p>}
      </div>

      {showCaptchaPopup && (
        <CaptchaPopup
          onVerify={handleCaptchaVerify}
          onCancel={handleCaptchaCancel}
          loading={loading}
        />
      )}
    </div>
  );
};

export default DMCAForm;