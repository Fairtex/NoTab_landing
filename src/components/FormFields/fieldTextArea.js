import React from "react"
import { UITextArea } from "@components/UIComponents"
import FieldInput from "./fieldInput"

const FieldTextArea = props => (
  <FieldInput {...props} renderInput={props => <UITextArea {...props} />} />
)

export default FieldTextArea
