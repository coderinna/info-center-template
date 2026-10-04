import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TextRenderer from "./TextRenderer";

const basePath = "TextFileTranslations";

const makePaths = (name) => ({
  fi: `${basePath}/${name}.fi.text`,
  en: `${basePath}/${name}.en.text`,
});

const textFiles = {
  AboutUs: makePaths("AboutUss"),
  UseTerms: makePaths("UseTerms"),
  PrivacyPolicy: makePaths("PrivacyPolicy"),
  Rules: makePaths("Rules"),
  CookiePolicy: makePaths("CookiePolicy"),
};

const LocalizedTextSection = ({ type }) => {
  const { i18n } = useTranslation();

  const lang = i18n.language.startsWith("fi") ? "fi" : "en";
  const filePath = textFiles[type]?.[lang];

  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchFileContent = async () => {
      setLoading(true);
      setError(false);

      if (!filePath) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(filePath, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const text = await res.text();
        setFileContent(text);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFileContent();

    return () => controller.abort();
  }, [filePath]);

  return (
    <div className="Help_">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading content</div>
      ) : (
        <TextRenderer text={fileContent} />
      )}
    </div>
  );
};

export default LocalizedTextSection;