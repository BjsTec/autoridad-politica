// src/components/landing/PromoBonusSection.jsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion' // Importamos motion
import Button from '../ui/Button'

// --- Variantes de animación ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
}

// --- Componente SVG para fondo sutil ---
const SubtleGridBackground = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
  </svg>
)

export default function PromoBonusSection() {
  const [promoBonus, setPromoBonus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // (Lógica de fetch sin cambios)
  useEffect(() => {
    const fetchPromoBonus = async () => {
      try {
        setLoading(true)
        // ... (fetch logic)
        // Simulamos "sin bono" para mostrar el CTA alternativo
        await new Promise((resolve) => setTimeout(resolve, 500));
        setPromoBonus(null); 
      } catch (err) {
        console.error('Error fetching promo bonus:', err)
        setError('No se pudo cargar la promoción.')
      } finally {
        setLoading(false)
      }
    }
    fetchPromoBonus()
  }, [])

  if (loading) return null // No mostrar nada mientras carga
  if (error) return null // Opcional: manejar error

  // --- Renderizado con Bono Activo (Diseño Integrado) ---
  if (promoBonus && promoBonus.isActive) {
    return (
      <section
        id="promo-bonus"
        className="relative py-20 bg-primary-dark text-white text-center overflow-hidden"
      >
        <SubtleGridBackground />
        <div className="container mx-auto px-6 max-w-4xl z-10 relative">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-secondary" // Color dorado
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            ¡Oferta Exclusiva:{' '}
            {promoBonus.name ||
              `Descuento del ${promoBonus.discountPercentage}%`}
            !
          </motion.h2>
          <motion.p
            className="text-xl lg:text-2xl mb-8 text-neutral-light opacity-90"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {promoBonus.description ||
              `Válido hasta el ${promoBonus.endDate}.`}
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button
              href={promoBonus.ctaLink || '/login'}
              color="secondary" // Botón dorado
              size="lg"
            >
              {promoBonus.ctaText || 'Canjear Bono Ahora'}
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  // --- Renderizado sin Bono (CTA a Planes, Diseño Integrado) ---
  return (
    <section
      id="promo-bonus"
      className="relative py-20 bg-primary-dark text-white text-center overflow-hidden"
    >
      <SubtleGridBackground />
      <div className="container mx-auto px-6 max-w-4xl z-10 relative">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-neutral-lightest"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          ¿Listo para Impulsar tu Campaña?
        </motion.h2>
        <motion.p
          className="text-xl lg:text-2xl mb-8 opacity-90 text-neutral-light"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Descubre nuestros planes diseñados para cada nivel de ambición
          política.
        </motion.p>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button
            href="#plans"
            color="secondary" // Mantenemos dorado como CTA principal
            size="lg"
          >
            Explora Nuestros Planes
          </Button>
        </motion.div>
      </div>
    </section>
  )
}