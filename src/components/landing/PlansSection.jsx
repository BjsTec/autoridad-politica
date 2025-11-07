// src/components/landing/PlansSection.jsx
'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import Button from '../ui/Button'
import { motion } from 'framer-motion' // Importamos motion

const tiers = [
  // (Datos de planes sin cambios)
  {
    name: 'Demo Limitado',
    id: 'demo_limitado',
    href: '/registro-publico?plan=demo',
    priceMonthly: '$0',
    description: 'Prueba las funciones básicas por tiempo limitado.',
    features: [
      '1 Campaña (Demo)',
      '1 Gerente, 1 Anillo',
      'Profundidad Pirámide: 3 Niveles',
      'Reclutamiento Directo: 3 por Usuario',
      'Duración: 30 Días',
      'Soporte Básico',
    ],
    mostPopular: false,
  },
  {
    name: 'Equipo de Trabajo',
    id: 'equipo_trabajo',
    href: '/registro-publico?plan=gratis',
    priceMonthly: '$0',
    description: 'Ideal para iniciar y organizar tu núcleo cercano.',
    features: [
      '1 Campaña (Equipo Trabajo)',
      'Miembros Limitados (ej. 10)',
      'Profundidad Pirámide: 5 Niveles',
      'Reclutamiento Directo: 4 por Usuario',
      'Sin Límite de Tiempo',
      'Soporte Comunitario',
    ],
    mostPopular: true,
  },
  {
    name: 'Plan Local (Edil/Concejo)',
    id: 'local',
    href: '/registro-publico?plan=local',
    priceMonthly: '$XX',
    description: 'Completo para campañas municipales o locales.',
    features: [
      'Campañas Locales (Edil, Concejo)',
      'Mayor Límite de Miembros',
      'Mayor Profundidad Pirámide',
      'Funciones IA Básicas',
      'Formulario Público Básico',
      'Soporte Prioritario',
    ],
    mostPopular: false,
  },
]

// --- NUEVO: Variantes de animación ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function PlansSection() {
  return (
    // --- CAMBIO: Eliminado 'bg-neutral-lightest' ---
    <div id="plans" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-secondary" // CAMBIO
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Precios
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-neutral-lightest sm:text-5xl" // CAMBIO
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Elige el plan perfecto para tu campaña
          </motion.p>
        </div>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-light" // CAMBIO
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Desde equipos pequeños hasta campañas nacionales, tenemos una opción
          para ti. Empieza gratis hoy mismo.
        </motion.p>
        <motion.div
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }} // --- NUEVA Animación Hover ---
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.mostPopular
                  ? 'bg-white ring-2 ring-secondary' // Se mantiene blanco
                  : 'bg-white ring-neutral-medium' // Se mantiene blanco
              } ${tierIdx === 1 ? 'lg:z-10 lg:scale-105' : ''}`}
            >
              <div>
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? 'text-secondary' : 'text-primary-dark'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-dark">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-primary-dark">
                    {tier.priceMonthly}
                  </span>
                  {tier.priceMonthly !== '$0' && (
                    <span className="text-sm font-semibold leading-6 text-neutral-dark">
                      /mes
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-neutral-dark xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-secondary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href={tier.href}
                aria-describedby={tier.id}
                color={tier.mostPopular ? 'secondary' : 'primary'}
                size="md"
                className="mt-8 w-full"
              >
                {tier.priceMonthly === '$0'
                  ? 'Empezar Gratis'
                  : 'Seleccionar Plan'}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}