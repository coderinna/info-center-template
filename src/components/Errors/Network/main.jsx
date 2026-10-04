import PIC from "./Images/pic.webp";
import "./CSS/NetworkError.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const NetworkError = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const keys = t("NetworkError", { returnObjects: true });

  const handleGoHome = () => {
    navigate("https://www.info_center_template.com");
  };

  const seo = {
  title: "Connection Error | info_center_template",
  description:
    "A network or connection error occurred while trying to load info_center_template.",
  url: "https://www.info_center_template.com/network-error",
  noIndex: true,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: seo.title,
  description: seo.description,
  url: seo.url,
};

  return (      <main><section>
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
              <meta name="robots" content="noindex, nofollow" />
            
              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
            </Helmet>
    <div className="networkError_section">
      <div className="networkError_overlay"></div>

      <div className="networkError_card">
        <img
  loading="lazy"
  decoding="async"
          src={PIC}
          alt="Network Error"
          className="networkError_image"
        />

        <h1 className="networkError_title">
          {keys?.title || "Connection Lost"}
        </h1>

        <p className="networkError_text">
          {keys?.desc ||
            "Something went wrong while loading the content. 500 Network error."}
        </p>


        <p className="sessionExpired_text">
          {keys?.text_network || "Check your network connection"}
          {keys?.text_network_server || " or info_center_template Server is down."}</p>

        
        <p className="sessionExpired_text"> </p>

        <button
          className="networkError_button"
          onClick={handleGoHome}
        >
          Go Home
        </button>
      </div>
    </div>
           </section></main>
  );
};

export default NetworkError;