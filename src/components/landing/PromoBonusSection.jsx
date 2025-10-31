// src/components/landing/PromoBonusSection.jsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Button from '../ui/Button' // <-- Importamos nuestro botón

export default function PromoBonusSection() {
  const [promoBonus, setPromoBonus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    // Lógica de fetch (sin cambios)
    const fetchPromoBonus = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://us-central1-micampanav2.cloudfunctions.net/getActivePromoBonus',
        )
        if (!response.ok) {
          setPromoBonus(null)
        } else {
          const data = await response.json()
          if (data && data.isActive) setPromoBonus(data)
          else setPromoBonus(null)
        }
      } catch (err) {
        console.error('Error fetching promo bonus:', err)
        setError('No se pudo cargar el bono promocional.')
      } finally {
        setLoading(false)
      }
    }
    fetchPromoBonus()
  }, [])

  // (Componente de Loading y Error sin cambios)
  if (loading) { /* ... */ }
  if (error) { /* ... */ }

  // --- Renderizado con Bono Activo ---
  if (promoBonus && promoBonus.isActive) {
    return (
      <section
        id="promo-bonus"
        ref={sectionRef}
        className="relative py-20 bg-primary-dark text-white text-center overflow-hidden"
      >
        {/* ... (Fondo SVG sin cambios) ... */}
        <div className="container mx-auto px-6 max-w-4xl z-10 relative">
          <div
            className={`
            bg-white text-primary-dark p-8 md:p-12 rounded-xl shadow-2xl border-2 border-primary-dark 
            transform hover:scale-105 transition-transform duration-500 ease-in-out 
            ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}
          `}
          >
            {/* ... (Icono SVG de estrella sin cambios) ... */}
            <h2
              className={`text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-primary-dark ${isSectionVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-8'}`}
            >
              ¡Oferta Exclusiva:{' '}
              {promoBonus.name ||
                `Descuento del ${promoBonus.discountPercentage}%`}
              !
            </h2>
            <p
              className={`text-xl lg:text-2xl mb-8 text-neutral-800 opacity-90 ${isSectionVisible ? 'animate-fade-in-up delay-400' : 'opacity-0 translate-y-8'}`}
            >
              {promoBonus.description ||
                `Válido hasta el ${promoBonus.endDate}.`}
            </p>
            
            {/* --- INICIO REFACTORIZACIÓN (Botón) --- */}
            <Button
              href={promoBonus.ctaLink || '/login'}
              color="primary"
              size="lg" // Tamaño más grande
              className={`bg-primary-dark text-white hover:bg-primary-DEFAULT ${isSectionVisible ? 'animate-fade-in-up delay-600' : 'opacity-0 translate-y-8'}`}
            >
              {promoBonus.ctaText || 'Canjear Bono Ahora'}
            </Button>
            {/* --- FIN REFACTORIZACIÓN --- */}
          </div>
        </div>
      </section>
    )
  }

  // --- Renderizado sin Bono (CTA a Planes) ---
  return (
    <section
      id="promo-bonus"
      ref={sectionRef}
      className="relative py-20 bg-primary-dark text-white text-center overflow-hidden"
    >
      {/* ... (Fondo SVG sin cambios) ... */}
      <div className="container mx-auto px-6 max-w-4xl z-10 relative">
        {/* ... (Icono SVG de flecha sin cambios) ... */}
        <h2
          className={`text-4xl lg:text-5xl font-extrabold mb-4 leading-tight ${isSectionVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-8'}`}
        >
          ¿Listo para Impulsar tu Campaña?
        </h2>
        <p
          className={`text-xl lg:text-2xl mb-8 opacity-90 text-white ${isSectionVisible ? 'animate-fade-in-up delay-400' : 'opacity-0 translate-y-8'}`}
        >
          Descubre nuestros planes diseñados para cada nivel de ambición
          política.
        </p>
        
        {/* --- INICIO REFACTORIZACIÓN (Botón) --- */}
        <Button
          href="#planes"
          color="secondary" // Usamos el color dorado
          size="lg"
          // Invertimos colores para el botón: fondo blanco, texto azul
          className={`bg-white text-primary-dark hover:bg-neutral-200 ${isSectionVisible ? 'animate-fade-in-up delay-600' : 'opacity-0 translate-y-8'}`}
        >
          Explora Nuestros Planes
        </Button>
        {/* --- FIN REFACTORIZACIÓN --- */}
      </div>
    </section>
  )
}