// src/components/ui/Select.jsx
import React from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid' // Icono consistente

export default function Select({
  id,
  name,
  value,
  onChange,
  children,
  required = false,
  disabled = false,
  className = '',
  loading = false,
  error = null,
  // Para integración con FormGroup
  'aria-describedby': ariaDescribedby,
}) {
  const baseClasses =
    'block w-full appearance-none rounded-md border px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:z-10 focus:outline-none sm:text-sm'
  
  const errorClasses = error
    ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
    : 'border-neutral-300 focus:border-primary-DEFAULT focus:ring-primary-DEFAULT'
  
  const disabledClasses = disabled || loading ? 'bg-neutral-100 opacity-70 cursor-not-allowed' : ''

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled || loading}
        className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className}`}
        aria-describedby={error ? `${id}-error` : ariaDescribedby}
        aria-invalid={!!error}
      >
        {loading ? <option>Cargando...</option> : children}
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
        <ChevronUpDownIcon
          className="h-5 w-5 text-neutral-400"
          aria-hidden="true"
        />
      </div>

      {/* Nota: Este manejo de error es local. 
        Si usamos FormGroup, deberíamos quitar este <p> y dejar que FormGroup lo maneje.
        Lo mantengo por ahora, asumiendo que puede usarse de forma independiente.
      */}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-error-600">
          {error}
        </p>
      )}
    </div>
  )
}