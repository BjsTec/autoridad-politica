// src/components/ui/Input.jsx
'use client'

import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function Input({
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  disabled = false,
  readOnly = false,
  className = '',
  IconComponent = null,
  iconPosition = 'left',
  showPasswordToggle = false,
  // Props de accesibilidad (inyectadas por FormGroup)
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid,
  // Prop para saber si hay error (inyectada por FormGroup)
  error,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type

  // --- Clases Refactorizadas ---
  const baseInputClasses =
    'block w-full rounded-md border shadow-sm focus:outline-none transition-colors duration-200 py-2 sm:text-sm'

  // Clases de color (semánticas)
  const colorClasses = error
    ? 'border-error-500 focus:ring-error-500 focus:border-error-500 text-error-800' // Error
    : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500 text-neutral-900' // Normal

  const disabledClasses = disabled
    ? 'bg-neutral-100 cursor-not-allowed opacity-70'
    : ''

  // --- Lógica de Iconos/Padding ---
  // Determina el padding necesario basado en los iconos
  const getPaddingClasses = () => {
    const hasIcon = !!IconComponent
    const hasToggle = type === 'password' && showPasswordToggle

    if (hasIcon && iconPosition === 'left') {
      return hasToggle ? 'pl-10 pr-10' : 'pl-10 pr-4'
    }
    if (hasIcon && iconPosition === 'right') {
      return 'pl-4 pr-10'
    }
    if (hasToggle) {
      return 'pl-4 pr-10'
    }
    return 'px-4' // Padding estándar
  }

  const paddingClasses = getPaddingClasses()
  
  // Posicionamiento del IconComponent
  const iconWrapperClasses = IconComponent
    ? `absolute top-1/2 -translate-y-1/2 ${iconPosition === 'left' ? 'left-3' : 'right-3'}`
    : ''

  return (
    // Ya no se incluye <label> ni <p id="error">.
    // FormGroup se encarga de eso.
    <div className="relative w-full">
      {IconComponent && (
        <div className={`${iconWrapperClasses} pointer-events-none`}>
          <IconComponent className="w-5 h-5 text-neutral-500" />
        </div>
      )}

      <input
        id={id || name}
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={`${baseInputClasses} ${colorClasses} ${disabledClasses} ${paddingClasses} ${className}`}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
        {...props}
      />

      {/* Botón de mostrar/ocultar contraseña */}
      {type === 'password' && showPasswordToggle && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-600 hover:text-primary-600 focus:outline-none rounded-r-md"
          aria-label={
            isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'
          }
        >
          {isPasswordVisible ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  )
}