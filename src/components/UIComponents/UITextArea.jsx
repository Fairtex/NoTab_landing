import React from "react"
import classNames from "classnames"

function UITextArea(
  { error, maxLength, height = 110, disabled = false, className, ...rest },
  ref
) {
  return (
    <textarea
      className={classNames("ui-textArea", className, {
        "ui-textArea--error": error,
      })}
      ref={ref}
      style={{ height: height }}
      disabled={disabled}
      {...rest}
    />
  )
}

export default React.forwardRef(UITextArea)
