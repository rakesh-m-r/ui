import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import './Toggle.css'

interface Props {
  disabled?: boolean
  id?: string
  layout?: 'horizontal' | 'vertical'
  error?: string
  descriptionText?: string
  label?: string
  labelOptional?: string
  onChange?(x: boolean): void
  className?: any
  defaultChecked?: boolean
  checked?: boolean
}

function Toggle({
  disabled,
  id,
  layout,
  error,
  descriptionText,
  label,
  labelOptional,
  onChange,
  defaultChecked,
  checked,
  className,
}: Props) {
  const [intChecked, setIntChecked] = useState(defaultChecked || checked)

  // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally
  const active = checked ? true : checked === false ? false : intChecked

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    // '`onChange` callback for this component
    if (onChange) onChange(active)
    setIntChecked(!intChecked)
  }

  let toggleClasses = ['sbui-toggle']
  if (active) {
    toggleClasses.push('sbui-toggle--active')
  }

  let handleClasses = ['sbui-toggle__handle']
  if (active) {
    handleClasses.push('sbui-toggle__handle--active')
  }

  return (
    <FormLayout
      className={className}
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      responsive={false}
      id={id}
      error={error}
      descriptionText={descriptionText}
    >
      <button
        type="button"
        aria-pressed="false"
        className={toggleClasses.join(' ')}
        onClick={onClick}
        disabled={disabled}
      >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
    </FormLayout>
  )
}

export default Toggle