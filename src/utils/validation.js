const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const required = value =>
  value || (typeof value === "number" && !Number.isNaN(value))
    ? undefined
    : "Required"

const maxLength = length => value =>
  value && value.length > length
    ? `Maximum length of this field must be less than ${length} symbols`
    : undefined

export const maxLength100 = maxLength(100)

export const name = value =>
  value && !nameRegExp.test(value) ? "Incorrect name" : undefined

export const email = value =>
  value && !emailRegExp.test(value) ? "Invalid email address" : undefined
