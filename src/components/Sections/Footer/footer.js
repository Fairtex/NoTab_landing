import React from "react"
import { Link } from "gatsby"

import CompanyName from "@assets/images/noTab-footer-logo-name.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__contact">
              <CompanyName className="footer__logo" />
              <div className="footer__contact-block">
                <p className="footer__contact-text text">{"Contact us:"}</p>
                <a
                  href={`mailto:support@notab.com`}
                  className="footer__contact-address footer__link"
                >
                  {"support@notab.com"}
                </a>
              </div>
              <p className="footer__copyright-text text">{"© 2020 - NoTab®"}</p>
            </div>
            <div className="footer__attachment">
              <Link
                className="footer__attachment-link footer__link"
                to="/terms"
              >
                {"Terms to use"}
              </Link>
              <Link
                className="footer__attachment-link footer__link"
                to="/privacy-policy"
              >
                {"Privacy policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
