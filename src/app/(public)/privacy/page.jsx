// src/app/(public)/privacy/page.jsx
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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LegalWrapper>
          <h1 className="mb-6 text-4xl font-bold text-primary-dark">
            Política de Tratamiento de Datos Personales
          </h1>
          
          {/* --- INICIO REFACTORIZACIÓN (Contenido Legal Colombiano) --- */}
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013
              de Colombia, <strong>BJS SAS</strong> (en adelante &quot;BJS&quot; o
              &quot;nosotros&quot;), como proveedor de la aplicación{' '}
              <strong>Autoridad Política</strong> (en adelante &quot;la Aplicación&quot;),
              informa la presente política de privacidad.
            </p>

            <h2 className="text-primary-dark">
              1. Definición de Roles (Responsable vs. Encargado)
            </h2>
            <p>
              Es fundamental diferenciar los roles en el tratamiento de datos
              dentro de Autoridad Política:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>BJS como Responsable del Tratamiento:</strong> Actuamos
                como Responsables (controladores) de los datos de los usuarios
                que se registran directamente con nosotros para adquirir el
                servicio (ej. <code>CANDIDATO</code>, <code>ADMIN</code>) y de los leads
                recopilados en nuestro sitio web comercial.
              </li>
              <li>
                <strong>El Cliente (Campaña) como Responsable del Tratamiento:</strong>{' '}
                El <code>CANDIDATO</code> o la campaña que utiliza la Aplicación
                actúa como Responsable (controlador) de todos los datos que sus
                equipos (<code>GERENTE</code>, <code>ANILLO</code>, <code>VOTANTE</code>)
                recolectan, incluyendo:
                <ul className="list-disc pl-6">
                  <li>Datos de miembros de su equipo (estructura piramidal).</li>
                  <li>
                    Datos de potenciales votantes (<code>leads</code>).
                  </li>
                  <li>
                    Datos de escrutinio (conteo de votos, fotos E-14).
                  </li>
                </ul>
              </li>
              <li>
                <strong>BJS como Encargado del Tratamiento:</strong> Para
                todos los datos recolectados por el Cliente (Campaña), BJS
                actúa únicamente como Encargado (procesador), limitándonos a
                almacenar y procesar dichos datos bajo las instrucciones del
                Cliente.
              </li>
            </ul>

            <h2 className="text-primary-dark">2. Finalidad del Tratamiento</h2>
            <p>
              La información personal recolectada por BJS (como Responsable)
              se utiliza para:
            </p>
            <ul className="list-disc pl-6">
              <li>Proveer, mantener y mejorar la Aplicación.</li>
              <li>Gestionar cuentas, suscripciones y facturación.</li>
              <li>Prestar soporte técnico (PQR).</li>
              <li>
                Contactar leads de nuestro sitio web comercial.
              </li>
            </ul>
            <p>
              La finalidad de los datos recolectados por el Cliente (Campaña) es
              definida por dicho Cliente, enmarcada en los objetivos de la
              Aplicación: gestión de la estructura política, seguimiento de
              leads y medición de resultados electorales.
            </p>

            <h2 className="text-primary-dark">
              3. Derechos de los Titulares (Habeas Data)
            </h2>
            <p>
              Como Titular de datos personales, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Conocer, actualizar y rectificar sus datos personales.
              </li>
              <li>
                Solicitar prueba de la autorización otorgada (si aplica).
              </li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
              <li>
                Presentar quejas ante la Superintendencia de Industria y
                Comercio.
              </li>
              <li>Revocar la autorización y/o solicitar la supresión del dato.</li>
            </ul>
            <p>
              Si BJS es el Responsable (datos de su cuenta de Cliente), puede
              ejercer sus derechos contactándonos a [Correo de Soporte/PQR].
            </p>
            <p>
              Si el Cliente (Campaña) es el Responsable (datos de leads,
              votantes), deberá contactar directamente a dicha Campaña o
              Candidato para ejercer sus derechos.
            </p>
          </div>
          {/* --- FIN REFACTORIZACIÓN --- */}
        </LegalWrapper>
      </main>
      <Footer />
    </div>
  )
}