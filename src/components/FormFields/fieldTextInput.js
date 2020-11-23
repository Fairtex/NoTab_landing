import React from "react"
import { UITextInput } from "@components/UIComponents"
import FieldInput from "./fieldInput"

const FieldTextInput = props => (
  <FieldInput {...props} renderInput={props => <UITextInput {...props} />} />
)

export default FieldTextInput
