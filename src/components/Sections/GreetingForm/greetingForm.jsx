import React, { useMemo } from "react"
import { useForm } from "@formspree/react"
import { UITextInput, UITextArea, UIButton } from "@components/UIComponents"
import { Stores } from "@components/UIComponents"

export default function GreetingForm({ content }) {
  const [state, handleSubmit] = useForm("greetingForm")
  const errors = useMemo(() => {
    const errors = {}
    state.errors.forEach(error => {
      if (!errors.hasOwnProperty(error.field)) errors[error.field] = true
    })
    return errors
  }, state)
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section__inner">
          <div className="form-section__form-container">
            <h2 className="form-section__title">{content.formTitle}</h2>
            <p className="form-section__text">{content.formText.formText}</p>
            <form onSubmit={handleSubmit} className="form-section__form">
              <UITextInput
                id="name"
                name="name"
                placeholder="Name"
                error={errors["name"]}
                className="form-section__input"
              />
              <UITextInput
                id="venue_name"
                name="venue_name"
                placeholder="Venue Name"
                error={errors["venue_name"]}
                className="form-section__input"
              />
              <div className="form-section__cities">
                <UITextInput
                  id="venue_city"
                  name="venue_city"
                  placeholder="Venue City"
                  error={errors["venue_city"]}
                  className="form-section__input"
                />
                <UITextInput
                  id="state_name"
                  name="state_name"
                  placeholder="State City"
                  error={errors["state_name"]}
                  className="form-section__input"
                />
              </div>
              <UITextInput
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                error={errors["email"]}
                className="form-section__input"
              />
              <UITextInput
                id="subject"
                name="subject"
                placeholder="Subject"
                error={errors["subject"]}
                className="form-section__input"
              />
              <UITextArea
                id="message"
                name="message"
                placeholder="Message"
                error={errors["message"]}
                className="form-section__textarea"
              />
              <UIButton
                className="form-section__button"
                type="submit"
                disabled={state.submitting}
                title={content.formButtonText}
              />
            </form>
          </div>
          <div className="form-section__download-container">
            <h3 className="form-section__download-text">
              DOWNLOAD OUR APP
            </h3>
            <Stores className="form-section__download-stores" />
          </div>
        </div>
      </div>
    </section>
  )
}