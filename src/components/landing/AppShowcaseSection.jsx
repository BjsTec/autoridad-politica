// src/components/landing/AppShowcaseSection.jsx
'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Apple, Smartphone } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button' // <-- CORRECCIÓN: Importación añadida

// Componente interno para el mockup del teléfono
const PhoneMockup = ({ src, alt, className = '' }) => (
  <div
    className={`relative w-[280px] h-[570px] rounded-[44px] border-[14px] border-black bg-black shadow-2xl ${className}`}
  >
    <div className="absolute inset-x-0 top-0 h-8 rounded-t-[30px] bg-black z-10 flex justify-center items-end">
      {/* Notch/Isla */}
      <div className="w-24 h-5 bg-black rounded-b-lg"></div>
    </div>
    <div className="w-full h-full rounded-[30px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover bg-neutral-800"
      />
    </div>
  </div>
)

export default function AppShowcaseSection() {
  // Lógica de animación Parallax
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // Animar mientras la sección está visible
  })

  // Mapea el progreso del scroll (0 a 1) a valores de transformación
  const xTranslateFront = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const xTranslateBack = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const rotateYFront = useTransform(scrollYProgress, [0, 1], [-15, 15])
  const rotateYBack = useTransform(scrollYProgress, [0, 1], [15, 15])

  return (
    <section
      id="app-movil"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-primary"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Contenido de Texto (Animado) */}
        <motion.div
          className="md:w-1/2 text-center md:text-left text-neutral-50 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Autoridad Política Móvil: Tu Campaña Siempre Contigo
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Accede a todas las herramientas de gestión de tu campaña desde la
            palma de tu mano.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              href="#"
              variant="solid"
              className="bg-neutral-50 text-primary-dark hover:bg-neutral-200"
              size="md"
              IconComponent={Apple}
            >
              App Store
            </Button>
            <Button
              href="#"
              variant="solid"
              className="bg-neutral-50 text-primary-dark hover:bg-neutral-200"
              size="md"
              IconComponent={Smartphone}
            >
              Google Play
            </Button>
          </div>
        </motion.div>

        {/* Mockups y Animación */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative h-[600px] items-center">
          <div className="relative w-[300px] h-[600px] perspective-[1000px] transform-gpu">
            {/* Teléfono Trasero */}
            <motion.div
              className="absolute inset-0"
              style={{
                translateX: xTranslateBack,
                rotateY: rotateYBack,
                z: -5,
              }}
            >
              <PhoneMockup
                src="/icon-autoridad.png" // Usando asset existente
                alt="Pantalla de la aplicación móvil 2"
              />
            </motion.div>

            {/* Teléfono Frontal */}
            <motion.div
              className="absolute inset-0"
              style={{
                translateX: xTranslateFront,
                rotateY: rotateYFront,
                z: 5,
              }}
            >
              <PhoneMockup
                src="/logo.png" // Usando asset existente
                alt="Pantalla de la aplicación móvil 1"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fondo degradado sutil */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary-dark"></div>
      </div>
    </section>
  )
}