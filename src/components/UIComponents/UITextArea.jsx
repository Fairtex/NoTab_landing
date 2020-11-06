import React from 'react'
import classNames from 'classnames'

function UITextArea(
  {
    onBlur,
    onFocus,
    onChange,
    value,
    error,
    placeholder,
    height = 110,
    maxLength,
    disabled = false,
    className,
  },
  ref,
) {
  return (
    <textarea
      className={classNames('ui-textArea', className, {
        'ui-textArea--error': error,
      })}
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      style={{ height: height }}
      maxLength={maxLength && maxLength}
      disabled={disabled}
    />
  )
}

export default React.forwardRef(UITextArea)
