import React from 'react'
import { UITextInput, UITextArea, UIButton } from '@components/UIComponents'

export default function GreetingForm({ content }) {
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section__inner">
            <h2 className="form-section__title">
              {content.formTitle}
            </h2>
            <p className="form-section__text">
              {content.formText.formText}
            </p>
            <div className="greeting-form">
              <UITextInput placeholder="Name" />
              <UITextInput placeholder="Venue Name" />
              <div className="greeting-form__cities">
                <UITextInput placeholder="Venue City" />
                <UITextInput placeholder="State City" />
              </div>
              <UITextInput placeholder="Email" />
              <UITextArea placeholder="Message" />
              <UIButton className="greeting-form__button" title={content.formButtonText} />
            </div>
        </div>
      </div>
    </section>
  )
}
