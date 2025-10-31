// src/hooks/useScrollAnimation.js
'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Hook básico para detectar cuándo un elemento entra en el viewport.
 * @param {number} threshold - Qué porcentaje del elemento debe estar visible (0 a 1)
 */
export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const ref = elementRef.current
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref) // Deja de observar una vez que es visible
        }
      },
      {
        threshold,
      },
    )

    observer.observe(ref)

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [threshold]) // Solo se ejecuta si el threshold cambia

  return [elementRef, isVisible]
}