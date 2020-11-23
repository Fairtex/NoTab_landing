import React from "react"
import classNames from "classnames"

function UITextArea(props, ref) {
  const {
    error,
    maxLength,
    height = 110,
    disabled = false,
    className,
    ...rest
  } = props

  return (
    <textarea
      ref={ref}
      className={classNames("ui-textArea", className, {
        "ui-textArea--error": error,
      })}
      style={{ height: height }}
      disabled={disabled}
      maxLength={maxLength && maxLength}
      {...rest}
    />
  )
}

export default React.forwardRef(UITextArea)
