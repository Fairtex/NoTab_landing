import React from 'react'
import classNames from 'classnames'

export default function UIButton({
  disabled = false,
  handleClick,
  title,
  type = 'button',
  className,
  isLoading = false,
}) {
  return (
    <button
      type={type}
      className={classNames('ui-button', className, {
        'ui-button--disabled': disabled,
        'ui-button--loading': isLoading,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className="ui-button__text">{title}</p>
    </button>
  )
}
