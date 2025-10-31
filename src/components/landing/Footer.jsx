// src/components/landing/Footer.jsx
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark">
      {' '}
      {/* Fondo azul muy oscuro */}
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {/* --- INICIO REFACTORIZACIÓN (<a> por <Link>) --- */}
          <div className="pb-6">
            <Link
              href="/#features"
              className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
            >
              Características
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/#plans"
              className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
            >
              Planes
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/politica-privacidad"
              className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
            >
              Privacidad
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/terms"
              className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
            >
              Términos
            </Link>
          </div>
          {/* --- FIN REFACTORIZACIÓN --- */}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <a
            href="#"
            className="text-neutral-medium hover:text-secondary-light"
          >
            <span className="sr-only">Facebook</span>
            {/* (SVG en línea mantenido) */}
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {/* TODO: Añadir más iconos de redes sociales */}
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            className="h-6 w-auto"
            src="/logo.png" // Asumimos que existe en /public
            alt="Logo Mi Campaña V2"
            width={24}
            height={24}
          />
        </div>
        <p className="mt-4 text-center text-xs leading-5 text-neutral-medium">
          &copy; {currentYear} Mi Campaña V2. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}