import React, { useState, useEffect } from "react";
import pic_ProfileWhite from "./../Images/Fallbacks/NoProfilePicture1.webp";
import pic_ProfileBlack from "./../Images/Fallbacks/NoProfilePicture.webp";
// import pic_NoAdd from "./../Images/Fallbacks/NoAdd.webp";

import MEDIA_URL from "../Common/URL/MEDIA_URL.js";
import { useTheme } from "../../config/theme/ThemeContext.jsx";

import "./CSS/LoadingImage.css";

const ProfileImage = ({
  Url,
  placeHolder = "profile",
  fallbackText = "Pic",
  className = "",
  whiteSkeleton = false,
  addRoute = true,
}) => {
  const { dark } = useTheme();

  const resolveUrl = (url) => {
    if (!url) return null;

    return addRoute ? `${MEDIA_URL.origin}${url}` : url;
  };

  const getPlaceholderImage = (type) => {
    switch (type) {

      case "profile":
        return dark ? pic_ProfileBlack : pic_ProfileWhite;
    }
  };

  const [imgSrc, setImgSrc] = useState(() =>
    Url ? resolveUrl(Url) : getPlaceholderImage(placeHolder)
  );

  const [loading, setLoading] = useState(!!Url);

useEffect(() => {
  const newSrc = Url
    ? resolveUrl(Url)
    : getPlaceholderImage(placeHolder);

  if (newSrc !== imgSrc) {
    setImgSrc(newSrc);
    setLoading(!!Url);
  }
}, [Url, placeHolder, dark, addRoute]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setImgSrc(getPlaceholderImage(placeHolder));
    setLoading(false);
  };

  return (
    <div className={`loading-image-wrapper ${className}`}>
      {loading && (
        <div className={`skeleton ${whiteSkeleton ? "white" : ""}`} />
      )}

      <img
        loading="lazy"
        decoding="async"
        src={imgSrc}
        alt={fallbackText}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ProfileImage;