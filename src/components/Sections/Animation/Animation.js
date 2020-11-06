import React from "react"

const Animation = ({ content }) => {
  return (
    <section className="animation">
      <div className="container">
        <div className="animation__inner">
          <div className="animation__info">
            <h2 className="animation__title title">{content.animationBlockTitle}</h2>
            <p className="animation__info-text text">{content.animationBlockText.animationBlockText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Animation;