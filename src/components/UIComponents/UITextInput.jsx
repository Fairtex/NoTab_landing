import React from 'react'
import classNames from 'classnames'

function UITextInput(props, ref) {
  const {
    onBlur,
    onFocus,
    onChange,
    onKeyUp,
    onKeyDown,
    value,
    placeholder,
    error,
    required,
    type = 'text',
    min,
    autofocus = false,
    disabled = false,
    className,
  } = props

  return (
    <div className={'ui-textInput__container'}>
      <input
        type={type}
        className={classNames('ui-textInput', className, {
          'ui-textInput--error': error,
        })}
        ref={ref}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        min={min}
        autoFocus={autofocus}
        disabled={disabled}
      />
    </div>
  )
}

export default React.forwardRef(UITextInput)
