// src/components/ui/Button.jsx (Actualizado)
'use client'

import React from 'react'
import Link from 'next/link' // Importamos Link
import { Loader2 } from 'lucide-react'

// Mapeo estático (Actualizado con colores de la landing)
const colorMap = {
  solid: {
    primary: 'bg-primary-DEFAULT text-white hover:bg-primary-600 focus:ring-primary-500',
    // --- NUEVO (Dorado) ---
    secondary: 'bg-secondary text-primary-dark hover:bg-secondary-light focus:ring-secondary', 
    error: 'bg-error-DEFAULT text-white hover:bg-error-600 focus:ring-error-500',
    neutral: 'bg-neutral-600 text-white hover:bg-neutral-700 focus:ring-neutral-500',
  },
  outline: {
    primary: 'border border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-50 focus:ring-primary-500',
    error: 'border border-error-DEFAULT text-error-DEFAULT hover:bg-error-50 focus:ring-error-500',
    neutral: 'border border-neutral-400 text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500',
  },
  text: {
    primary: 'text-primary-600 hover:bg-primary-100 focus:ring-primary-500',
    error: 'text-error-600 hover:bg-error-100 focus:ring-error-500',
    neutral: 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500',
    // --- NUEVO (Blanco/Claro para fondo oscuro) ---
    white: 'text-neutral-lightest hover:text-secondary-light focus:ring-secondary-light',
  },
  link: {
    primary: 'text-primary-DEFAULT hover:underline focus:ring-primary-500 p-0',
    neutral: 'text-neutral-600 hover:underline focus:ring-neutral-500 p-0',
  },
}


const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className = '',
  IconComponent = null,
  iconPosition = 'left',
  href, // <-- NUEVA PROP
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm', // Ajustado a py-2.5 como en la landing
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl',
  }[size]

  // Clases de variante (AHORA SEGURO PARA TAILWIND)
  const variantClasses = colorMap[variant]?.[color] || colorMap.solid.primary

  const disabledOrLoadingClasses =
    disabled || loading ? 'opacity-50 cursor-not-allowed' : ''

  // Clases para el icono
  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }[size]

  const iconMarginClasses = children
    ? iconPosition === 'left'
      ? 'mr-2'
      : 'ml-2'
    : ''

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledOrLoadingClasses} ${className}`

  const content = (
    <>
      {loading ? (
        <Loader2
          className={`animate-spin ${iconClasses} ${children ? 'mr-2' : ''}`}
        />
      ) : (
        IconComponent &&
        iconPosition === 'left' && (
          <IconComponent className={`${iconClasses} ${iconMarginClasses}`} />
        )
      )}
      {children}
      {!loading && IconComponent && iconPosition === 'right' && (
        <IconComponent className={`${iconClasses} ${iconMarginClasses}`} />
      )}
    </>
  )

  // --- LÓGICA POLIMÓRFICA ---
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        aria-disabled={disabled || loading}
        {...props}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button