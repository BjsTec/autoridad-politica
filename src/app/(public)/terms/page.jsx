// src/app/(public)/terms/page.jsx
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

// Componente local para el fondo blanco
const LegalWrapper = ({ children }) => (
  <div className="bg-white text-neutral-900">
    <div className="container mx-auto max-w-4xl px-6 py-24">
      {children}
    </div>
  </div>
)

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LegalWrapper>
          <h1 className="mb-6 text-4xl font-bold text-primary-dark">
            Términos y Condiciones
          </h1>
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              Bienvenido a Mi Campaña V2. Estos términos y condiciones
              describen las reglas y regulaciones para el uso de nuestro
              sitio web y servicios.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-primary-dark">
              1. Cuentas
            </h2>
            <p>
              Al crear una cuenta con nosotros, debes proporcionarnos
              información precisa, completa y actualizada en todo momento. El
              incumplimiento de esta obligación constituye un incumplimiento de los
              Términos, que puede resultar en la terminación inmediata de tu
              cuenta en nuestro servicio.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-primary-dark">
              2. Propiedad Intelectual
            </h2>
            <p>
              El Servicio y su contenido original (excluyendo el Contenido
              proporcionado por los usuarios), características y funcionalidad
              son y seguirán siendo propiedad exclusiva de Mi Campaña V2 y sus
              licenciantes.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-primary-dark">
              3. Limitación de Responsabilidad
            </h2>
            <p>
              En ningún caso Mi Campaña V2, ni sus directores, empleados,
              socios, agentes, proveedores o afiliados, serán responsables de
              ningún daño indirecto, incidental, especial, consecuente o
              punitivo, incluyendo, entre otros, la pérdida de beneficios,
              datos, uso, buena voluntad u otras pérdidas intangibles...
            </p>
            {/* ... Añadir el resto del contenido legal ... */}
          </div>
        </LegalWrapper>
      </main>
      <Footer />
    </div>
  )
}