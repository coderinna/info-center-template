import React from 'react';
import { withTranslation } from 'react-i18next';
import PIC from "./Images/oops.webp";
import "./CSS/notFound.css";
const isProduction = process.env.NODE_ENV === 'production'; 

const inspectProps = (props) => {
  return Object.entries(props || {})
    .map(([key, value]) => ({
      key,
      type: typeof value,
      isNull: value === null,
      isUndefined: value === undefined,
      isEmptyObject:
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 0
    }))
    .filter(x => x.isNull || x.isUndefined || x.isEmptyObject);
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

async componentDidCatch(error, errorInfo) {

  const { User } = this.props;

  const errorPayload = {
    error: error?.toString(),
    stack: errorInfo.componentStack,
    route: window.__DEBUG_STATE__,
    time: new Date().toISOString()
  };

  if (!isProduction) {
  console.log("🚨 Error payload:", errorPayload);
  }
  
  window.__REACT_ERROR__ = errorPayload;
   
if (isProduction){
    try {
console.log("fail")

    } catch (backendError) {

      console.error(
        "❌ Failed sending crash report:",
        backendError
      );
    }
  }
    else {
console.log("dev. not sending clientFailNotice")
  }

  }

  handleReset = () => {
    window.location.reload();
  };

  handleGoHome = () => {
  window.location.href = "/";
  };

  render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <div className="not-found-wall_section not-found-wall-container">

          <div className="not-found-container">

            <h1 className="not-found-h1">
              {t("errorBoundary.title", "Error")}
            </h1>

            <img
  loading="lazy"
  decoding="async"
              src={PIC}
              alt="Error Image"
              className="not-found-image_pix"
            />

            <br />

            <span className="not-found-span">
              {t("errorBoundary.message", "Something went wrong")}
            </span>

            <br />
            <br />
<div className="error-btn-container">
            <button
              onClick={this.handleReset}
              className="error-reset-btn"
            >
            {t("errorBoundary.tryAgain", "⟳ Try again")}
            </button>

                        <button
                        onClick={this.handleGoHome}
              className="error-reset-btn"
            >
              {t("errorBoundary.goHome", "🏡 Go Home")}
            </button>
</div>
          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);