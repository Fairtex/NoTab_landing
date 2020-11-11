import React from "react"
import CookieBanner from 'react-cookie-banner';

const CookieBar = () => {
  return (
    <CookieBanner
      message="We use cookie to improve your experience on our site. By using our site you consent cookies."
      onAccept={() => console.log("User has accepted cookies!")}
      cookie="user-has-accepted-cookies4"
      styles={{
        message: {
          display: 'inline-block',
          maxWidth: '800px',
          lineHeight: '20px'
        }
      }}
    />
  );
}

export default CookieBar
