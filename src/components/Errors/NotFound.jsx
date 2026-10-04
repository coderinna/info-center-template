
import PIC from "./Images/img.webp"
import "./CSS/notFound.css"; 
import { useTranslation } from 'react-i18next'; 
import { useNavigate } from "react-router-dom";

const NotFound = () => {

const navigate = useNavigate();
  const { t } = useTranslation();
      const keys = t('Error', { returnObjects: true });

  return (
    <div className="not-found-wall_section not-found-wall-container">
      <div className="not-found-container">
        <h1 className="not-found-h1">{keys?.header_profile_missing ||"Page not found"}</h1>
        <img
  loading="lazy"
  decoding="async"
          src={PIC}
          alt="404 Image"
          className="not-found-image_pix"
        />
        <p>{keys?.text_profile_missing ||
          "Unfortunately, the page you are looking for is not here."}</p>
             
                  <button
          className="not-found-home-button"
          onClick={() => navigate("https://www.info_center_template.com")}
        >
         {keys?.goHome || "🏠 Go home"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
