import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "./CSS/Incoming.css";
import featuredItems from "./IncomingItems.jsx";

const WallTabs = () => {

  const { t } = useTranslation();
  const keys = t("Incoming", { returnObjects: true });

  return (
    <div className="Incoming_container" aria-label="Featured Items">
      <div className="Incoming_top">
        <FaEarthAmericas className="Incoming_icon" />
        <div className="Incoming_text">
          {keys?.text_intro || "Explore featured highlights — hand-picked and ranked for you."}
        </div>
      </div>

      <div className="Incoming_grid">
        {featuredItems?.map((it) => (
          <article key={it?.id}
           className="Incoming_card"
           aria-labelledby={`feat-${it.id}`}>
            <div className="Incoming_header">
              <div className="Incoming_badge">{it?.id}</div>
              <h3 id={`feat-${it?.id}`} className="Incoming_title">
                {it?.icon} {it?.title}
              </h3>
            </div>
            <p className="Incoming_desc">{it?.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WallTabs;
