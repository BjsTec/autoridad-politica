// src/components/ui/Tabs.jsx
'use client'

import React from 'react'

export default function Tabs({ tabs, activeTab, onTabChange }) {
  // Validación de props para evitar fallos en renderizado
  if (!tabs || tabs.length === 0 || !activeTab || !onTabChange) {
    console.error('Tabs: Faltan props requeridas (tabs, activeTab, onTabChange).')
    return null
  }

  return (
    <div className="flex bg-neutral-200 rounded-lg p-1 mb-6 w-full max-w-md mx-auto shadow-inner">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-all duration-300 font-body
            ${
              activeTab === tab.value
                ? 'bg-primary-dark text-neutral-50 shadow-md'
                : 'text-neutral-800 hover:bg-neutral-300'
            }
          `}
          // Accesibilidad: indica la pestaña activa
          aria-selected={activeTab === tab.value}
          role="tab"
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}