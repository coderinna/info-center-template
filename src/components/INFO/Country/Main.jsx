import React from "react";
import "./CSS/Main.css";
import ReactCountryFlag from "react-country-flag";
import { FaEarthAmericas } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import northEuCountries from "./Countries/northEuCountries";
import southEuCountries from "./Countries/southEuCountries";
import westEuCountries from "./Countries/westEuCountries.js";
import centralEastEuCountries from "./Countries/centralEastEuCountries.js";
import { Helmet } from "react-helmet-async";

const WallTabs = () => {
  const { t } = useTranslation();
  const keys = t("country", { returnObjects: true });

  const regions = [
    { title: "North Europe", countries: northEuCountries },
    { title: "West Europe", countries: westEuCountries },
    { title: "South Europe", countries: southEuCountries },
    { title: "Central & Eastern Europe", countries: centralEastEuCountries },
  ];

  const seo = {
    title: "Countries & Availability | info_center_template",
    description:
      "Check info_center_template availability by country and explore supported regions, languages, and access information worldwide.",
    url: "https://www.info_center_template.com/country",
  };

  return (
    <main>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <section>
        <div className="Country_eu_container">
          <div className="Country_eu_info">
            <span className="Country_icon">
              <FaEarthAmericas style={{ marginRight: "8px" }} />
            </span>
            <h1 >
              {keys?.contry_header || "Country-specific availability"}
            </h1>
          </div>

          <div className="Country_eu_info2">
            <span>
              {keys?.text_country ||
                "This app is available in the following European countries."}
            </span>
          </div>

          {regions.map((region) => (
            <React.Fragment key={region.title}>
              <h2 className="COuntry-h1">{region.title}</h2>

              <div className="Country_flag-grid">
                {region.countries.map((country) => (
                  <div key={country.code} className="Country_flag-card">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      className="Country_flag-icon"
                    />
                    <div className="Country_flag-name">
                      {country.name}
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WallTabs;