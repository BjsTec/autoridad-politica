// src/app/(public)/terms/page.jsx
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

// Wrapper con fondo gris claro
const LegalWrapper = ({ children }) => (
  <div className="bg-neutral-light text-neutral-900">
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
            Términos y Condiciones de Uso
          </h1>
          
          {/* --- INICIO REFACTORIZACIÓN (Contenido Legal Colombiano) --- */}
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              Bienvenido a <strong>Autoridad Política</strong> (&quot;la Aplicación&quot;),
              un software como servicio (SaaS) operado por <strong>BJS SAS</strong>.
              Estos Términos rigen su acceso y uso de la Aplicación.
            </p>
            <h2>1. Aceptación y Cuentas</h2>
            <p>
              Al utilizar la Aplicación, usted acepta estos Términos. Usted es
              responsable de la seguridad de su cuenta y de toda actividad que
              ocurra bajo ella.
            </p>
            <h2>2. Responsabilidad sobre los Datos Recolectados</h2>
            <p>
              Nuestra Aplicación permite a las campañas políticas (el &quot;Cliente&quot;
              o &quot;Candidato&quot;) recolectar y gestionar datos de terceros (como
              miembros de equipo, líderes y potenciales votantes o &quot;leads&rdquo;).
            </p>
            <p>
              <strong>
                El Cliente (Candidato/Campaña) es el único Responsable del
                Tratamiento de dichos datos.
              </strong>
            </p>
            <p>
              Al usar Autoridad Política, el Cliente declara y garantiza que:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Cumple con toda la legislación colombiana aplicable, incluyendo
                la <strong>Ley 1581 de 2012</strong> (Habeas Data) y sus
                decretos reglamentarios.
              </li>
              <li>
                Ha obtenido la <strong>autorización previa, expresa e
                informada</strong> de cada Titular (persona natural) cuyos
                datos ingresa a la Aplicación.
              </li>
              <li>
                Informó a los Titulares sobre la finalidad de la recolección de
                sus datos.
              </li>
            </ul>
            <p>
              BJS SAS actúa solo como <strong>Encargado del Tratamiento</strong>{' '}
              de los datos de la campaña, limitándose a proveer la
              infraestructura tecnológica para su almacenamiento y procesamiento.
              No controlamos, verificamos ni somos dueños de los datos que el
              Cliente carga en la Aplicación.
            </p>
            <h2>3. Uso Aceptable</h2>
            <p>
              Usted se compromete a no utilizar la Aplicación para ningún fin
              ilícito o prohibido por estos Términos, incluyendo:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Cargar o tratar datos personales sin la debida autorización del
                Titular.
              </li>
              <li>
                Falsificar información o suplantar la identidad de otros.
              </li>
              <li>
                Violar la confidencialidad de los datos electorales (ej. mal uso
                de la información de escrutinio).
              </li>
            </ul>
            <h2>4. Limitación de Responsabilidad</h2>
            <p>
              BJS SAS no será responsable por el uso indebido de la
              Aplicación por parte del Cliente o su equipo, ni por cualquier
              violación a la Ley 1581 de 2012 cometida por el Cliente al ser
              este el Responsable del Tratamiento de los datos de su campaña.
            </p>
          </div>
          {/* --- FIN REFACTORIZACIÓN --- */}
        </LegalWrapper>
      </main>
      <Footer />
    </div>
  )
}