// src/components/landing/AppShowcaseSection.jsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Apple, Smartphone } from 'lucide-react'

export default function AppShowcaseSection() {
  return (
    <section
      id="app-movil"
      className="relative py-24 overflow-hidden bg-primary-dark"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Contenido de Texto (Sin cambios) */}
        <div className="md:w-1/2 text-center md:text-left text-neutral-50 mb-12 md:mb-0">
          <h2 className="text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Autoridad Política Móvil: Tu Campaña Siempre Contigo
          </h2>
          <p className="text-xl opacity-90 mb-10 animate-fade-in-up delay-200">
            Accede a todas las herramientas de gestión de tu campaña desde la
            palma de tu mano.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up delay-400">
            <Link
              href="#"
              className="bg-neutral-50 text-primary-dark px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              <Apple className="w-6 h-6" />
              <span>App Store</span>
            </Link>
            <Link
              href="#"
              className="bg-neutral-50 text-primary-dark px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              <Smartphone className="w-6 h-6" />
              <span>Google Play</span>
            </Link>
          </div>
        </div>

        {/* Maquetas de la App Móvil */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
          <div className="relative w-[300px] h-[600px] perspective-[1000px] transform-gpu">
            
            {/* --- INICIO REFACTORIZACIÓN (Placeholders) --- */}
            <div className="absolute inset-0 w-full h-full transform-style preserve-3d animate-rotate-y z-20 transition-transform duration-500 hover:rotate-y-0">
              <Image
                src="https://placehold.co/300x600/3D5A80/FFFFFF?text=Screen+1&font=montserrat"
                alt="Pantalla de la aplicación móvil 1"
                fill={true}
                className="shadow-2xl rounded-3xl object-cover"
              />
            </div>
            <div className="absolute inset-0 w-full h-full transform-style preserve-3d animate-rotate-y-reverse z-10 transition-transform duration-500 hover:rotate-y-0 translate-x-[50px] md:translate-x-[75px]">
              <Image
                src="https://placehold.co/300x600/E0FBFC/1C2B3A?text=Screen+2&font=montserrat"
                alt="Pantalla de la aplicación móvil 2"
                fill={true}
                className="shadow-2xl rounded-3xl object-cover"
              />
            </div>
            {/* --- FIN REFACTORIZACIÓN --- */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-linear-to-br from-primary-dark via-primary-900 to-secondary-900 animate-pulse-bg"></div>
    </section>
  )
}