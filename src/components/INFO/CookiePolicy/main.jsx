import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TextRenderer from "../TextRender/TextRenderer";


const UseTerms = () => {
  const { i18n } = useTranslation();

  const lang = i18n.language.startsWith("fi") ? "fi" : "en";

  return (
    <TextRenderer
      filePath={`TextFileTranslations/CookiePolicy.${lang}.text`}
    />
  );
};

export default UseTerms;