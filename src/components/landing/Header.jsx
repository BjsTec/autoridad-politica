// src/components/landing/Header.jsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button' // <-- Importamos nuestro botón

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Características', href: '#features' },
  { name: 'Planes', href: '#plans' },
  { name: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Mi Campaña V2</span>
            <Image
              className="h-8 w-auto"
              src="/logo.png" // Asegúrate que el logo exista en public/
              alt="Logo Mi Campaña V2"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-light hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* --- INICIO REFACTORIZACIÓN --- */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Button
              key={item.name}
              href={item.href}
              variant="text"
              color="white"
              size="sm" // Usamos 'sm' para que sea solo text
              className="p-0" // Reseteamos padding para que sea solo texto
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            href="/login"
            variant="text"
            color="white"
            size="sm"
            className="p-0"
          >
            Iniciar Sesión <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
        {/* --- FIN REFACTORIZACIÓN --- */}

      </nav>

      {/* Mobile menu (lógica sin cambios, pero usamos Button) */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-dark/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mi Campaña V2</span>
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-light hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-dark/20">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    variant="text"
                    color="white"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
              <div className="py-6">
                <Button
                  href="/login"
                  variant="text"
                  color="white"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}