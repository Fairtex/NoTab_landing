import React, { useState, useMemo, useRef, useEffect } from "react"

const Field = ({
  name,
  error,
  isRequired,
  handleError,
  component: Component,
  ...rest
}) => {
  const [value, setValue] = useState("")
  const ref = useRef(null)

  const [active, setActive] = useState(false)
  const [touched, setTouched] = useState(false)
  const [left, setLeft] = useState(false)
  const visited = useMemo(() => touched && left, [left, touched])

  const isError = useMemo(() => {
    console.log(name, isRequired, ref.current)
    return (isRequired && visited && !(isRequired && value)) || error
  }, [isRequired, visited, error, value])

  const onFocus = () => {
    !touched && setTouched(true)
    setActive(true)
  }
  const onBlur = () => {
    !left && setLeft(true)
    setActive(false)
  }

  useEffect(() => {
    handleError(name, isError)
  }, [name, isError, handleError])

  return (
    <Component
      value={value}
      onChange={e => setValue(e.target.value)}
      ref={ref}
      name={name}
      error={isError}
      onFocus={onFocus}
      onBlur={onBlur}
      active={active}
      {...rest}
    />
  )
}

export default Field
