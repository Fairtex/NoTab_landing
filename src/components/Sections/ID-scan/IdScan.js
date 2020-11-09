import React from "react"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image';

const IdScanner = ({ content }) => {
  // const sources = [
  //   content.headerLargeDesktopBg.fluid,
  //   {
  //     ...content.headerDesktopBg.fluid,
  //     media: `(max-width: 1700px)`,
  //   },
  //   {
  //     ...content.headerTabletbg.fluid,
  //     media: `(max-width: 1024px)`,
  //   },
  //   {
  //     ...content.headerMobileBg.fluid,
  //     media: `(max-width: 550px)`,
  //   },
  // ];
  return (
    <BackgroundImage
      Tag="section"
      className="scan"
      fluid={content.idBlockBackground.fluid}
      backgroundColor="#000000"
    >
      <div className="container">
        <div className="scan__inner">
          <div className="scan__img-wrap">
            <Img fluid={content.idBlockImage.fluid}/>
          </div>
          <div className="scan__info">
            <h2 className="scan__title title">
              {content.idBlockTitle}
            </h2>
            <p className="scan__text text">
              {content.idBlockText.idBlockText}
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default IdScanner;