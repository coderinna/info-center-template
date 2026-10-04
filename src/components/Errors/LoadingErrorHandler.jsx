import React from "react";

const LoadingErrorHandler = ({ loading, error, children }) => {

  if (loading) {
    return <div className="info_center_template_loading" />;
  }

  if (error) {
    return (
      <div>
        Error
      </div>
    );
  }

  return children;
};

export default LoadingErrorHandler;