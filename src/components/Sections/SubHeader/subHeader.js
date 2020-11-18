import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import CompanyName from "../../../assets/images/noTab-header-logo-name.svg"
import Ellipse from "../../../assets/images/noTab-hero-bg-vector-2.svg"

const SubHeader = () => {
  const { logoImg } = useStaticQuery(graphql`
    {
      logoImg: file(relativePath: { eq: "noTab-header-logo.png" }) {
        childImageSharp {
          fixed(width: 107, height: 109) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="sub-header">
      <div className="container">
        <div className="sub-header__inner">
          <div className="sub-header__logo-wrap">
            <Img
              fixed={logoImg.childImageSharp.fixed}
              className="sub-header__logo-img"
            />
            <CompanyName className="sub-header__logo-text" />
          </div>
          <a href="#" className="sub-header__link">
            <span className="sub-header__link-text">Download</span>
          </a>
          <Ellipse className="sub-header__blur-ellipse" />
        </div>
      </div>
    </header>
  )
}

export default SubHeader
