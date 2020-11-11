import React from "react"
import { Link } from "gatsby"
import CompanyName from "../../../assets/images/noTab-footer-logo-name.svg"

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__contact">
              <CompanyName className="footer__logo" />
              <p className="footer__contact-text text">
                {"Contact us:" || content.contactText.contactText}
              </p>
              <a
                href={`mailto:${"support@notab.com" || content.contactMail}`}
                className="footer__contact-link footer__link"
              >
                {"support@notab.com" || content.contactMail}
              </a>
              <p className="footer__copyright-text text">
                {"© 2020 - NoTab®" || content.copyrightText.copyrightText}
              </p>
            </div>
            <div className="footer__attachment">
              <Link
                className="footer__attachment-link footer__link"
                to="/terms"
              >
                {"Terms to use" || content.termsText.termsText}
              </Link>
              <Link
                className="footer__attachment-link footer__link"
                to="/privacy-policy"
              >
                {"Privacy policy" ||
                  content.privacyPolicyText.privacyPolicyText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
