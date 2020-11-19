import React from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const IdScanner = ({ content }) => {
  const bgSource = [
    content.idBlockBackground.fluid,
    {
      ...content.idBlockBackgroundMobile.fluid,
      media: `(max-width: 767px)`,
    }
  ];
  const imgSource = [
    content.idBlockImage.fluid,
    {
      ...content.idBlockImageMobile.fluid,
      media: `(max-width: 767px)`,
    }
  ]
  return (
    <BackgroundImage
      Tag="section"
      className="scan"
      fluid={bgSource}
      backgroundColor="#000000"
    >
      <div className="scan__gradient"></div>
      <div className="container">
        <div className="scan__inner">
          <div className="scan__img-wrap">
            <Img fluid={imgSource} />
          </div>
          <div className="scan__info">
            <h2 className="scan__title title">{content.idBlockTitle}</h2>
            <p className="scan__text text">{content.idBlockText.idBlockText}</p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default IdScanner
