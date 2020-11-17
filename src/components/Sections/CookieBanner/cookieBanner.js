import React from "react"
import CookieBanner from 'react-cookie-banner';

const MyCustomCookieBanner = ({ onAccept }) => {
  return (
    <div className="cookie-bar">
      <div className="container">
        <div className="cookie-bar__inner">
          <p className="cookie-bar__message">
            We use cookie to improve your experience on our site. By using our site you consent cookies.
          </p>
          <button className="cookie-bar__btn" onClick={onAccept}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const CookieBar = () => {
  return (
    <CookieBanner dismissOnScroll={false} cookie="user-accepted-cookie">
      {onAccept => <MyCustomCookieBanner onAccept={onAccept} />}
    </CookieBanner>
  );
}

export default CookieBar;
