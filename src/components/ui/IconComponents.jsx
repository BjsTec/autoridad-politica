// src/components/ui/IconComponents.jsx
import React from 'react'
// No se importan iconos de Heroicons aquí, se deben importar donde se usen.

/**
 * Este archivo es para Iconos SVG personalizados que NO están en Heroicons/Lucide.
 * Los wrappers de Heroicons (EditIcon, CheckCircleIcon) se han eliminado
 * para evitar redundancia.
 */

export const CampaignIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2} // strokeWidth debe ser prop o definido
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514M15 11l-1 1"
    />
  </svg>
)

// Exportar otros iconos personalizados aquí...