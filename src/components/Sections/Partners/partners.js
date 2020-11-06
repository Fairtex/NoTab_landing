import React from "react"

const Partners = ({ content }) => {

  return (
    <div className="partners">
      <div className="partners__item">
        <p className="partners__text">{content.contactText.contactText}</p>
        <a href={`mailto:${content.contactMail}`} className="partners__link">{content.contactMail}</a>
      </div>
      <div className="partners__item">
        <p className="partners__text">{content.partnerText.partnerText}</p>
        <a href={content.partnerLink} className="partners__link">{content.partnerLinkText}</a>
      </div>
    </div>
  )
}

export default Partners;