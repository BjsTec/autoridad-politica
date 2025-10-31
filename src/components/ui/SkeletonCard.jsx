// src/components/ui/SkeletonCard.jsx
'use client'

import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 animate-pulse">
      {/* Estructura de esqueleto optimizada para parecerse al StatCard */}
      <div className="h-6 w-6 bg-neutral-200 rounded-md mb-2"></div> {/* Icono */}
      <div className="h-5 bg-neutral-200 rounded w-3/4 mb-1"></div> {/* Title */}
      <div className="h-8 bg-neutral-300 rounded w-1/2 mb-2"></div> {/* Value */}
      <div className="h-4 bg-neutral-200 rounded w-full"></div> {/* Description */}
    </div>
  )
}