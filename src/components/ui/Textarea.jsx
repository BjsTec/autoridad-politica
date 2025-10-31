// src/components/ui/Textarea.jsx
'use client'

import React from 'react'

export default function Textarea({
  id,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
  disabled = false,
  readOnly = false,
  rows = 4,
  className = '',
  // Props de accesibilidad (inyectadas por FormGroup)
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid,
  // Prop para saber si hay error (inyectada por FormGroup)
  error,
  ...props
}) {
  // --- Clases ---
  const baseInputClasses =
    'block w-full rounded-md border-0 shadow-sm focus:outline-none transition-colors duration-200 py-2 px-3.5 sm:text-sm sm:leading-6'

  // Clases para la variante oscura (landing)
  const darkVariantClasses =
    'bg-white/5 text-neutral-lightest ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary'

  // Clases de error (para variante clara, si se usa en el dashboard)
  const errorClasses = error
    ? 'border-error-500 focus:ring-error-500 focus:border-error-500 text-error-800'
    : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500 text-neutral-900'

  const disabledClasses = disabled
    ? 'bg-neutral-100 cursor-not-allowed opacity-70'
    : ''

  // Detecta si debe usar el estilo oscuro (basado en la clase que le pasa ContactForm)
  const isDark = className.includes('bg-white/5')
  
  const colorModeClasses = isDark ? darkVariantClasses : errorClasses

  return (
    <div className="relative w-full">
      <textarea
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        rows={rows}
        className={`${baseInputClasses} ${colorModeClasses} ${disabledClasses} ${className}`}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
        {...props}
      />
    </div>
  )
}