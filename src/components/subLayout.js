/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SubHeader from "./Sections/SubHeader/"
import Footer from "./Sections/Footer/"
import "./layout.css"

const SubLayout = ({ children }) => {

  return (
    <>
      <SubHeader/>
      <div className="wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

SubLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubLayout
