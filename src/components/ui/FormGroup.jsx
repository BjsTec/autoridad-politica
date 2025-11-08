// src/components/ui/FormGroup.jsx
'use client'

import React from 'react'

// --- INICIO DE LA CORRECCIÓN ---
const FormGroup = ({
  label,
  htmlFor, // ID del input al que se asocia
  children, // El componente de entrada (Input, Select, etc.)
  error = '',
  helpText = '',
  helpTextComponent = null, // 1. Aceptamos la nueva prop explícitamente
  className = '',
  labelClassName = '',
  errorClassName = '',
  required = false,
  ...props // 2. Ahora 'helpTextComponent' no caerá en 'props'
}) => {
  // --- FIN DE LA CORRECCIÓN ---

  const baseErrorClasses = 'mt-1 text-sm text-error-600'
  const baseHelpTextClasses = 'mt-1 text-sm text-neutral-500'

  // 3. Definimos el ID de ayuda para 'aria-describedby'
  const helpId = error
    ? `${htmlFor}-error`
    : helpText || helpTextComponent
      ? `${htmlFor}-help`
      : undefined

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

      {React.cloneElement(children, {
        'aria-describedby': helpId, // 4. Usamos el ID de ayuda
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
      
      {/* --- INICIO LÓGICA DE RENDERIZADO --- */}
      {/* 5. Renderiza el COMPONENTE de ayuda si existe */}
      {!error && helpTextComponent && (
        <div id={`${htmlFor}-help`} className={baseHelpTextClasses}>
          {helpTextComponent}
        </div>
      )}
      {/* 6. O renderiza el TEXTO de ayuda si existe (y no el componente) */}
      {!error && !helpTextComponent && helpText && (
        <p id={`${htmlFor}-help`} className={baseHelpTextClasses}>
          {helpText}
        </p>
      )}
      {/* --- FIN LÓGICA DE RENDERIZADO --- */}
    </div>
  )
}

export default FormGroup