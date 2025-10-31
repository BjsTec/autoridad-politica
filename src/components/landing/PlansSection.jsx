// src/components/landing/PlansSection.jsx
import { CheckIcon } from '@heroicons/react/20/solid'
import Button from '../ui/Button' // <-- Importamos nuestro botón

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

export default function PlansSection() {
  return (
    <div id="plans" className="bg-neutral-lightest py-24 sm:py-32">
      {' '}
      {/* Fondo gris casi blanco */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary-dark">
            Precios
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl">
            Elige el plan perfecto para tu campaña
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-dark">
          Desde equipos pequeños hasta campañas nacionales, tenemos una opción
          para ti. Empieza gratis hoy mismo.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.mostPopular
                  ? 'bg-white ring-2 ring-secondary'
                  : 'bg-white ring-neutral-medium'
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

              {/* --- INICIO REFACTORIZACIÓN --- */}
              <Button
                href={tier.href}
                aria-describedby={tier.id}
                color={tier.mostPopular ? 'secondary' : 'primary'}
                size="md" // Usa el py-2.5 que definimos
                className="mt-8 w-full" // w-full reemplaza a 'block'
              >
                {tier.priceMonthly === '$0'
                  ? 'Empezar Gratis'
                  : 'Seleccionar Plan'}
              </Button>
              {/* --- FIN REFACTORIZACIÓN --- */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}