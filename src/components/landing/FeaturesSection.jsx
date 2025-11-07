// src/components/landing/FeaturesSection.jsx
'use client'

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  UsersIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion' // Importamos motion

const features = [
  // ... (mismos datos de features)
  {
    name: 'Estructura Piramidal',
    description:
      'Organiza tu equipo de campaña eficientemente con nuestra estructura jerárquica intuitiva.',
    icon: UsersIcon,
  },
  {
    name: 'Gestión de Potenciales',
    description:
      'Registra, asigna y haz seguimiento a tus votantes potenciales desde un solo lugar.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Escrutinio Digital',
    description:
      'Coordina a tus escrutadores y recibe resultados en tiempo real el día de la elección con fotos de soporte.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Análisis y Métricas',
    description:
      'Visualiza el crecimiento de tu red, compara promesas vs realidad y mide la efectividad de tu campaña.',
    icon: ChartBarIcon,
  },
  {
    name: 'Seguridad Robusta',
    description:
      'Protegemos tus datos con los más altos estándares de seguridad y control de acceso basado en roles.',
    icon: LockClosedIcon,
  },
  {
    name: 'Acceso Controlado',
    description:
      'Autenticación segura y permisos detallados para garantizar que cada miembro vea solo lo necesario.',
    icon: FingerPrintIcon,
  },
]

// --- NUEVO: Variantes de animación ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animación escalonada para cada item
    },
  },
}

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
// --- FIN NUEVO ---

export default function FeaturesSection() {
  return (
    // --- CAMBIO: Eliminado 'bg-white' ---
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-secondary" // CAMBIO: text-secondary-dark -> text-secondary
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Todo lo que necesitas
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-neutral-lightest sm:text-4xl" // CAMBIO: text-primary-dark -> text-neutral-lightest
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Potencia tu Estrategia Política
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-neutral-light" // CAMBIO: text-neutral-dark -> text-neutral-light
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Nuestra plataforma te brinda las herramientas para organizar,
            movilizar y analizar tu campaña de manera efectiva.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Inicia la animación cuando el 20% del contenedor es visible
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              // --- CAMBIO: 'motion.div' para cada tarjeta ---
              <motion.div
                key={feature.name}
                className="relative pl-16"
                variants={itemVariants}
              >
                <dt className="text-base font-semibold leading-7 text-neutral-lightest">
                  {' '}
                  {/* CAMBIO: text-primary-dark -> text-neutral-lightest */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    {' '}
                    {/* (Sin cambios, esto se ve bien) */}
                    <feature.icon
                      className="h-6 w-6 text-primary-dark" // CAMBIO: text-primary -> text-primary-dark (mejor contraste)
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-neutral-light">
                  {' '}
                  {/* CAMBIO: text-neutral-dark -> text-neutral-light */}
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}