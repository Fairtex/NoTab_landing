import React from "react"
import Img from "gatsby-image"

const OrderInterface = ({ content }) => {
  const source = [
    content.orderInterfaceImage.fluid,
    {
      ...content.orderInterfaceImageMobile.fluid,
      media: `(max-width: 767px)`,
    },
  ]
  return (
    <section className="order">
      <div className="container">
        <div className="order__inner">
          <div className="order__info">
            <h2 className="order__title title">
              {content.orderInterfaceTitle}
            </h2>
            <p className="order__text text">
              {content.orderInterfaceText.orderInterfaceText}
            </p>
          </div>
          <div className="order__img-wrap">
            <Img fluid={source} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderInterface
