import React, { useCallback } from "react"
import classNames from "classnames"

function FieldInput(props) {
  const { input, meta, onBlur, label, renderInput, ...componentProps } = props
  const { error, submitError, touched, dirtySinceLastSubmit } = meta
  const isError = (error && touched) || (submitError && !dirtySinceLastSubmit)

  const handleBlur = useCallback(() => {
    input.onBlur()
    if (onBlur) onBlur()
  }, [input, onBlur])

  return (
    <div className={classNames({ form__field: !componentProps.hidden })}>
      {renderInput({
        ...componentProps,
        ...input,
        error: isError,
        onBlur: handleBlur,
      })}
    </div>
  )
}

export default FieldInput
