import React from "react"
import Img from "gatsby-image"

import Arrow from "../../../assets/images/noTab-arrow.svg"
import GenerateBg from "../../../assets/images/noTab-generate-qr-background.svg"

const GenerateQR = ({ content }) => {
  return (
    <section className="generate-qr">
      <div className="container">
        <div className="generate-qr__inner">
          <div className="generate-qr__img-wrap">
            <GenerateBg className="generate-qr__background" />
            <Img fluid={content.generateQrImage.fluid} />
            <div className="generate-qr__pointer-wrap">
              <Arrow className="generate-qr__pointer-arrow" />
              <p className="generate-qr__pointer-text">Scan QR-code</p>
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
