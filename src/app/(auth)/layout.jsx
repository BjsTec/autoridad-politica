// src/app/(auth)/layout.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-dark p-4">
      <div className="mb-6">
        <Link href="/">
          <Image
            src="/logo.png" // Asumiendo que /public/logo.png existe
            alt="Logo Mi Campaña V2"
            width={48}
            height={48}
            priority
          />
        </Link>
      </div>
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        {/* El contenido (page.jsx) se renderizará aquí */}
        {children}
      </div>
    </div>
  )
}