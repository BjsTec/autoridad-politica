// src/app/layout.js
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

// Configuración de fuentes (Esto ya está correcto)
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans', // Variable CSS para el cuerpo
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Variable CSS para títulos
})

export const metadata = {
  title: 'Mi Campaña V2',
  description: 'Plataforma de gestión de campañas políticas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${openSans.variable} ${montserrat.variable}`}>
      {/* AQUÍ APLICAMOS LAS CLASES BASE:
        - font-sans: Establece Open Sans como fuente por defecto (definido en tailwind.config.mjs).
        - bg-neutral-darkest: Establece el fondo azul oscuro (#1C2B3A) para toda la página.
        - text-neutral-lightest: Establece el color de texto claro (#F0F4F8) por defecto.
      */}
      <body className="font-sans bg-neutral-darkest text-neutral-lightest">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}