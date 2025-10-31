// src/components/ui/FormGroup.jsx
'use client'

import React from 'react'

const FormGroup = ({
  label,
  htmlFor, // ID del input al que se asocia
  children, // El componente de entrada (Input, Select, etc.)
  error = '',
  helpText = '',
  className = '',
  labelClassName = '',
  errorClassName = '',
  required = false,
  ...props
}) => {
  const baseErrorClasses = 'mt-1 text-sm text-error-600'
  const baseHelpTextClasses = 'mt-1 text-sm text-neutral-500'

  return (
    <div className={`mb-4 ${className}`} {...props}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={`block text-sm font-medium text-neutral-600 mb-1 ${labelClassName}`}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Pasamos 'aria-describedby' a los hijos para vincular errores
        o texto de ayuda con el input para lectores de pantalla.
      */}
      {React.cloneElement(children, {
        'aria-describedby': error ? `${htmlFor}-error` : (helpText ? `${htmlFor}-help` : undefined),
        'aria-invalid': !!error,
      })}

      {error && (
        <p
          id={`${htmlFor}-error`}
          className={`${baseErrorClasses} ${errorClassName}`}
          role="alert"
        >
          {error}
        </p>
      )}
      {!error && helpText && (
        <p id={`${htmlFor}-help`} className={baseHelpTextClasses}>
          {helpText}
        </p>
      )}
    </div>
  )
}

export default FormGroup