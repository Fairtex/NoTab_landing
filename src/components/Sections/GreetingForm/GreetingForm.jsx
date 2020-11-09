import React from "react"
import { UITextInput, UITextArea, UIButton } from "@components/UIComponents"
import { useForm, ValidationError } from "@formspree/react"

export default function GreetingForm({ content }) {
  const [state, handleSubmit] = useForm("greetingForm");
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section__inner">
          <h2 className="form-section__title">{content.formTitle}</h2>
          <p className="form-section__text">{content.formText.formText}</p>
          <form onSubmit={handleSubmit} className="form-section__form">
            <UITextInput id="name" name="name" placeholder="Name" />
            <UITextInput
              id="venue_name"
              name="venue_name"
              placeholder="Venue Name"
            />
            <div className="form-section__cities">
              <UITextInput
                id="venue_city"
                name="venue_city"
                placeholder="Venue City"
              />
              <UITextInput
                id="state_name"
                name="state_name"
                placeholder="State City"
              />
            </div>
            <UITextInput
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <UITextArea id="message" name="message" placeholder="Message" />
            <UIButton
              className="form-section__button"
              type="submit"
              disabled={state.submitting}
              title={content.formButtonText}
            />
          </form>
        </div>
      </div>
    </section>
  )
}
