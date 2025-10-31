// src/app/(public)/privacy/page.jsx
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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LegalWrapper>
          <h1 className="mb-6 text-4xl font-bold text-primary-dark">
            Política de Privacidad
          </h1>
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              Esta página le informa sobre nuestras políticas con respecto a la
              recopilación, uso y divulgación de datos personales cuando utiliza
              nuestro Servicio y las opciones que tiene asociadas con esos
              datos.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-primary-dark">
              1. Recopilación y Uso de Información
            </h2>
            <p>
              Recopilamos varios tipos diferentes de información para diversos
              fines para proporcionar y mejorar nuestro Servicio para usted. Los
              tipos de datos recopilados pueden incluir, entre otros:
            </p>
            <ul className="list-disc pl-6">
              <li>Dirección de correo electrónico</li>
              <li>Nombre y apellido</li>
              <li>Número de teléfono</li>
              <li>Datos de uso y cookies</li>
            </ul>
            <h2 className="mt-8 text-2xl font-semibold text-primary-dark">
              2. Uso de Datos
            </h2>
            <p>
              Mi Campaña V2 utiliza los datos recopilados para diversos fines:
            </p>
            <ul className="list-disc pl-6">
              <li>Para proporcionar y mantener nuestro Servicio</li>
              <li>Para notificarle sobre cambios en nuestro Servicio</li>
              <li>
                Para permitirle participar en funciones interactivas de
                nuestro Servicio cuando elija hacerlo
              </li>
              <li>Para proporcionar soporte al cliente</li>
            </ul>
            {/* ... Añadir el resto del contenido legal ... */}
          </div>
        </LegalWrapper>
      </main>
      <Footer />
    </div>
  )
}