import React from "react"
import Img from "gatsby-image"
import { Stores } from "@components/UIComponents"
import Ellipse from "../../../assets/images/noTab-hero-bg-vector.svg"

const Hero = ({ content }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__row">
            <div className="hero__info">
              <h2 className="hero__title title">{content.heroTitle}</h2>
              <p className="hero__info-text text">
                {content.heroText.heroText}
              </p>
            </div>
            <div className="hero__img-wrap">
              <Ellipse className="hero__blur-ellipse" />
              <Img fluid={content.heroImage.fluid} className="hero__img" />
            </div>
          </div>
          <div className="hero__row hero__row--space">
            <h3 className="hero__download-text">
              DOWNLOAD OUR APP
            </h3>
            <Stores />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
