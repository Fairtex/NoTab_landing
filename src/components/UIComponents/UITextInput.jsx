import React from "react"
import classNames from "classnames"

function UITextInput(props, ref) {
  const { error, type = "text", disabled = false, className, ...rest } = props

  return (
    <div className={"ui-textInput__container"}>
      <input
        ref={ref}
        type={type}
        className={classNames("ui-textInput", className, {
          "ui-textInput--error": error,
        })}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

export default React.forwardRef(UITextInput)
