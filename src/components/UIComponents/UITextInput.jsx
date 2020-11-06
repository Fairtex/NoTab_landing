import React from "react"
import classNames from "classnames"

function UITextInput(props, ref) {
  const {
    error,
    type = "text",
    autofocus = false,
    disabled = false,
    className,
    ...rest
  } = props

  return (
    <div className={"ui-textInput__container"}>
      <input
        type={type}
        className={classNames("ui-textInput", className, {
          "ui-textInput--error": error,
        })}
        autoFocus={autofocus}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

export default React.forwardRef(UITextInput)
