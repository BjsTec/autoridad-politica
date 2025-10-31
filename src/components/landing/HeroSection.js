// src/components/landing/HeroSection.js
// import { CheckCircleIcon } from '@heroicons/react/20/solid' // O Lucide

export default function HeroSection() {
  return (
    // Usamos el fondo oscuro heredado
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl">
              Gestiona tu Campaña Política con{' '}
              <span className="text-secondary">Inteligencia Artificial</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-light">
              Organiza tu equipo, centraliza tus votantes y mide la efectividad
              real de tu estructura piramidal.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#plans"
                className="rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Comenzar Demo
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-white"
              >
                Ver funciones <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Aquí iría la animación Lottie o un showcase visual */}
            <Image 
              src="/path/to/app-mockup.png"
              alt="App Mockup"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}