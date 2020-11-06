import React from "react"
import Img from "gatsby-image"

import Arrow from "../../../assets/images/noTab-arrow.svg"

const GenerateQR = ({ content }) => {
  return (
    <section className="generate-qr">
      <div className="container">
        <div className="generate-qr__inner">
          <div className="generate-qr__img-wrap">
            <Img fluid={content.generateQrImage.fluid} />
            <div className="generate-qr__pointer-wrap">
              <Arrow />
              <span className="generate-qr__pointer-text">Scan QR-code</span>
            </div>
          </div>
          <div className="generate-qr__info">
            <h2 className="generate-qr__title title">
              {content.generateQrTitle}
            </h2>
            <p className="generate-qr__text text">
              {content.generateQrText.generateQrText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenerateQR
