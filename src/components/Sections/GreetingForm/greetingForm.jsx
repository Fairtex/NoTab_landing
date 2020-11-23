import React, { useCallback } from "react"
import { Form, Field } from "react-final-form"
import axios from "axios"
import { UIButton } from "@components/UIComponents"
import { FieldTextArea, FieldTextInput } from "@components/FormFields"
import { Stores } from "@components/UIComponents"
import { required, name, email, maxLength100 } from "@utils/validation"
import { composeValidators } from "@utils/functions"

export default function GreetingForm({ content }) {
  const onSubmit = useCallback(async (values, form) => {
    try {
      await axios({
        method: "POST",
        url: `https://formspree.io/${process.env.GATSBY_FORMSPREE_FORM_ID}`,
        data: values,
      })
      setTimeout(() => form.restart())
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section__inner">
          <div className="form-section__form-container">
            <h2 className="form-section__title">{content.formTitle}</h2>
            <p className="form-section__text">{content.formText.formText}</p>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                submitting,
                pristine,
                hasValidationErrors,
              }) => {
                return (
                  <form
                    onSubmit={handleSubmit}
                    className="form-section__form form"
                  >
                    <Field
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-section__input"
                      component={FieldTextInput}
                      validate={composeValidators(required, name)}
                    />
                    <Field
                      id="venue_name"
                      name="venue_name"
                      placeholder="Venue Name"
                      className="form-section__input"
                      component={FieldTextInput}
                      validate={maxLength100}
                    />
                    <div className="form-section__cities">
                      <Field
                        id="venue_city"
                        name="venue_city"
                        placeholder="Venue City"
                        className="form-section__input"
                        component={FieldTextInput}
                        validate={maxLength100}
                      />
                      <Field
                        id="state_name"
                        name="state_name"
                        placeholder="State City"
                        className="form-section__input"
                        component={FieldTextInput}
                        validate={maxLength100}
                      />
                    </div>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="form-section__input"
                      component={FieldTextInput}
                      validate={composeValidators(required, email)}
                    />
                    <Field
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="form-section__input"
                      component={FieldTextInput}
                      validate={maxLength100}
                    />
                    <Field
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="form-section__textarea"
                      component={FieldTextArea}
                    />
                    <UIButton
                      className="form-section__button"
                      type="submit"
                      disabled={pristine || submitting || hasValidationErrors}
                      title={content.formButtonText}
                    />
                  </form>
                )
              }}
            />
          </div>
          <div className="form-section__download-container">
            <h3 className="form-section__download-text">DOWNLOAD OUR APP</h3>
            <Stores className="form-section__download-stores" />
          </div>
        </div>
      </div>
    </section>
  )
}
