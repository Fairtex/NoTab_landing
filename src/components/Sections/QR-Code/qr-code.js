import React from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Stores } from "@components/UIComponents"

const QrCode = ({ content }) => {
  return (
    <BackgroundImage
      Tag="section"
      className="qr-code"
      fluid={content.qrCodeBackground.fluid}
      backgroundColor="#000000"
    >
      <div className="container">
        <div className="qr-code__inner">
          <div className="qr-code__row">
            <div className="qr-code__info">
              <h2 className="qr-code__title title">{content.qrCodeTitle}</h2>
              <p className="qr-code__text text">
                {content.qrCodeText.qrCodeText}
              </p>
              <Stores />
            </div>
            <div className="qr-code__img-wrap">
              <Img fluid={content.qrCodeImage.fluid} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default QrCode
