import React from "react"
import AppStore from '../../assets/images/noTab-appstore.svg';
import GooglePlay from '../../assets/images/noTab-googlePlay.svg';

const Stores = ({className}) => {
  return (
    <div className={`stores ${className}`}>
      <a href="#" className="stores__link">
        <AppStore className="stores__vector stores__vector--appStore" />
      </a>
      <a href="#" className="stores__link">
        <GooglePlay className="stores__vector stores__vector--googlePlay" />
      </a>
    </div>
  )
}

export default Stores
