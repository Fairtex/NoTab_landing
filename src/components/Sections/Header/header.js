import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import CompanyName from "../../../assets/images/noTab-header-logo-name.svg"
import LoginIcon from "../../../assets/images/noTab-header-login-icon.svg"

const Header = () => {
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
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo-wrap">
            <Img
              fixed={logoImg.childImageSharp.fixed}
              className="header__logo-img"
            />
            <CompanyName className="header__logo-text" />
          </div>
          <a href="#" className="header__link">
            <LoginIcon className="header__icon" />
            <span className="header__link-text">Login</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
