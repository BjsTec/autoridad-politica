// src/components/landing/HeroSection.jsx
'use client' // Necesario para framer-motion

import Image from 'next/image'
import Button from '../ui/Button'
import { motion } from 'framer-motion' // Importamos motion

// Configuración de la animación "stagger" (escalonada)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada hijo se anima 0.2s después del anterior
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // Efecto más suave
      damping: 15,
      stiffness: 100,
    },
  },
}

export default function HeroSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Contenedor de texto animado */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
            >
              Gestiona tu Campaña Política con{' '}
              <span className="text-secondary">Inteligencia Artificial</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-neutral-light"
            >
              Organiza tu equipo, centraliza tus votantes y mide la efectividad
              real de tu estructura piramidal.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-x-6"
            >
              <Button href="#plans" color="secondary" size="md">
                Comenzar Demo
              </Button>
              <Button href="#features" variant="text" color="white" size="md">
                Ver funciones <span aria-hidden="true">→</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Reemplazamos el placeholder */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* AQUÍ IRÍA LA NUEVA IMAGEN O GRÁFICO. 
              Temporalmente uso el logo, pero aquí iría el nuevo asset de Figma.
            */}
            <Image
              src="/icon-autoridad.png" // Usando un asset real
              alt="Autoridad Política"
              className="rounded-lg shadow-2xl"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}