import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./CSS/Main.css";
import { Helmet } from "react-helmet-async";

function Aloitus() {

  const { t } = useTranslation();
  const keys = t("Charity", { returnObjects: true });

const options = keys?.options || [
  "Sports",
  "Wellbeing",
];

const seo = {
  title: "Charity & Community Support | info_center_template",
  description:
    "Learn how info_center_template supports community wellbeing, digital safety, and charitable initiatives.",
  url: "https://www.info_center_template.com/charity",
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
    <div className="quiz_section Charity_container">

      <h1 className="quiz_h1 Charity_header">
        {keys?.header_charity || "We give back"}
      </h1>
<p></p>
      <div className="Charity_badge">
  <span className="Charity_icon">❤️</span>
  {keys?.donate_promise || "2% of profits donated"}
</div>

      <p className="Charity_subtitle">
        {keys?.description ||
          "We donate 2% of profits to support local wellbeing and community initiatives."}
      </p>

      <div className="Charity_list">
        {options.map((item, index) => (
          <div key={index} className="Charity_card">
            {item}
          </div>
        ))}
      </div>
    </div>
           </section></main>
  );
}

export default Aloitus;