import React from "react"

import ToolScheme from "@assets/images/noTab-tool-scheme.svg"

const Tool = ({ content }) => {
  return (
    <section className="tool">
      <div className="container">
        <div className="tool__inner">
          <div className="tool__row">
            <div className="tool__info">
              <h2 className="tool__title title">{content.biToolTitle}</h2>
              <p className="tool__text text">{content.biToolText.biToolText}</p>
            </div>
            <div className="tool__img-wrap">
              <ToolScheme />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tool
