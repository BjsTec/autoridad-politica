// src/app/layout.js
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

// Configuración de fuentes (sin cambios)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// --- INICIO DE LA CORRECCIÓN ---
export const metadata = {
  // Arreglo 1: Título y descripción reales
  title: 'Autoridad Política - Plataforma de Gestión de Campañas',
  description: 'Gestione su estructura, mida su campaña y asegure su victoria.',
  
  // Arreglo 2: La línea clave que faltaba
  viewport: 'width=device-width, initial-scale=1', 
}
// --- FIN DE LA CORRECCIÓN ---

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-primary-dark font-sans`}
      >
        {children}
      </body>
    </html>
  )
}