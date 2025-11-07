// src/components/landing/Footer.jsx
import Link from 'next/link'
import Image from 'next/image'

// --- Definición de columnas del footer ---
const footerNavigation = {
  plataforma: [
    { name: 'Características', href: '/#features' },
    { name: 'Planes', href: '/#plans' },
    { name: 'Contacto', href: '/#contact' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Términos y Condiciones', href: '/terms' },
  ],
}

// Icono de Facebook (el que ya teníamos)
const FacebookIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
)
// (Aquí podríamos añadir más iconos de 'lucide-react' si quisiéramos)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // --- CAMBIO: Añadido borde superior para separar del contenido ---
    <footer className="bg-primary-dark border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        {/* --- CAMBIO: Layout multi-columna --- */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:gap-8">
          
          {/* Col 1: Logo y Descripción */}
          <div className="col-span-2 md:col-span-1 space-y-8">
            <Link href="/">
              <Image
                className="h-10 w-auto"
                src="/logo.png" //
                alt="Logo Mi Campaña V2"
                width={40}
                height={40}
              />
            </Link>
            <p className="text-sm leading-6 text-neutral-medium">
              Plataforma de gestión de campañas políticas con IA. Organiza,
              moviliza y mide la efectividad de tu estructura.
            </p>
            <div className="flex space-x-6">
              <a
                href="#" // TODO: Añadir link real de Facebook
                className="text-neutral-medium hover:text-secondary-light"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              {/* (Añadir más iconos de redes aquí) */}
            </div>
          </div>

          {/* Col 2: Plataforma */}
          <div className="md:col-start-3">
            <h3 className="text-sm font-semibold leading-6 text-neutral-lightest">
              Plataforma
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.plataforma.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-neutral-lightest">
              Legal
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-neutral-light hover:text-secondary-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- CAMBIO: Copyright separado en la parte inferior --- */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-center text-xs leading-5 text-neutral-medium">
            &copy; {currentYear} Mi Campaña V2. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}