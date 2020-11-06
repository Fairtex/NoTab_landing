import React from "react"
import Img from "gatsby-image"
import { Stores } from "@components/UIComponents"

const Hero = ({ content }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__row">
            <div className="hero__info">
              <h2 className="hero__title title">
                {content.heroTitle}
              </h2>
              <p className="main-header__info-text text">
                {content.heroText.heroText}
              </p>
            </div>
            <div className="hero__img-wrap">
              <Img fluid={content.heroImage.fluid}/>
            </div>
          </div>
          <div className="hero__row">
            <p className="hero__download-text">
              DOWNLOAD OUR APP
            </p>
            <Stores />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero