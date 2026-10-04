import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'; 

const ErrorPopup = ({
    setReportModalOpen,
Message
    }) => {

  const { t } = useTranslation();
      const keys = t('Error', { returnObjects: true });
    const { User } = useSelector(state => state.UserSlice);
    const popupRef = useRef(null);

    const toggleReportComponent = () => {
        setReportModalOpen(false);
      };
  

    useEffect(() => {
        let isMounted = true;
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target) && isMounted) {
                toggleReportComponent();
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
      
        return () => {
            isMounted = false;
            document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
      


    return (
        <div className="popup-overlay">

<div className="popup" ref={popupRef}>
        <div className="reports_report">
            <div className="reports_report_form">

                <div className="report-top-navbar">
<div className="report-top-navbar-left">

</div>
<div className="report-top-navbar-center">
    
                <div className="reports_auth_title">{keys?.header_error}
</div>
</div>
<div className="report-top-navbar-right">

   <button className="reports_button_close" 
   onClick={toggleReportComponent}>❌</button>
</div>

                          </div>

                <div className="reports_auth_form">
                    <form >
                        

<p></p>

                        <div className="reports_auth_input-container">
                            <strong>
                                <label htmlFor="message">
  {Message && <div className="reports_error-message">{Message}</div>}        
                                
                                    </label></strong>

                        </div>


                        <div className="reports_auth_button-container">
          <button className="reports_auth_button-12" 
            onClick={toggleReportComponent}   
                type="submit">
             OK
                            </button>
                        </div>

                    </form>

             
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ErrorPopup;
