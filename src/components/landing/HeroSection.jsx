// src/components/landing/HeroSection.jsx
import Image from 'next/image'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
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
              <Button href="#plans" color="secondary" size="md">
                Comenzar Demo
              </Button>
              <Button href="#features" variant="text" color="white" size="md">
                Ver funciones <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          
          {/* --- INICIO REFACTORIZACIÓN (Placeholder) --- */}
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x600/1C2B3A/F0F4F8?text=App\nMockup&font=montserrat"
              alt="Mockup de la aplicación Mi Campaña V2"
              className="rounded-lg shadow-2xl"
              width={600}
              height={600}
            />
          </div>
          {/* --- FIN REFACTORIZACIÓN --- */}
        </div>
      </div>
    </section>
  )
}