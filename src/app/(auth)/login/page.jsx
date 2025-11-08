// src/app/(auth)/login/page.jsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import FormGroup from '@/components/ui/FormGroup'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    identification_number: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Lógica de login por Cédula (sin cambios)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { identification_number, password } = formData

    try {
      // 1. Buscar email por cédula
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('email')
        .eq('identification_number', identification_number)
        .single()

      if (profileError || !profile) {
        setError('Cédula o contraseña incorrecta.')
        setLoading(false)
        return
      }

      // 2. Iniciar sesión con email y password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: profile.email,
        password: password,
      })

      if (signInError) {
        setError('Cédula o contraseña incorrecta.')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch (err) {
      setError('Ocurrió un error inesperado.')
    } finally {
      setLoading(false)
    }
  }

  // --- Diseño Responsive de 2 Columnas ---
  return (
    <div className="flex min-h-full flex-1">
      {/* Columna 1: Branding (Oculta en móvil con 'hidden', visible en 'lg:flex') */}
      <div className="relative hidden flex-1 flex-col justify-center bg-primary-dark p-12 lg:flex">
        <Link href="/">
          <Image
            className="h-16 w-auto"
            src="/logo.png" //
            alt="Autoridad Política"
            width={64}
            height={64}
          />
        </Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white">
          Autoridad Política
        </h1>
        <p className="mt-4 text-lg text-neutral-light">
          Gestione su estructura. Mida su campaña. Asegure su victoria.
        </p>
        <div className="absolute bottom-12">
          <Button href="/" variant="text" color="white" size="sm">
            &larr; Volver a la web comercial
          </Button>
        </div>
      </div>

      {/* Columna 2: Formulario (Ocupa todo el ancho en móvil) */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:flex-none lg:px-20 xl:px-24">
        {/* Encabezado Móvil (Visible solo en móvil 'lg:hidden') */}
        <div className="mx-auto w-full max-w-sm lg:hidden">
          <Image
            className="mx-auto h-12 w-auto"
            src="/icon-autoridad.png" //
            alt="Autoridad Política"
            width={48}
            height={48}
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-lightest">
            Iniciar Sesión
          </h2>
        </div>

        {/* Formulario (Contenedor centrado) */}
        <div className="mx-auto mt-10 w-full max-w-sm lg:mt-0">
          {/* Encabezado Desktop (Oculto en móvil 'hidden lg:block') */}
          <div className="hidden lg:block">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-neutral-lightest">
              Accede a tu cuenta
            </h2>
            <p className="mt-2 text-sm text-neutral-light">
              ¿No tienes una cuenta?{' '}
              <Link
                href="/#plans"
                className="font-semibold text-secondary hover:text-secondary-light"
              >
                Ver planes
              </Link>
            </p>
          </div>

          <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
            {error && <Alert type="error" message={error} />}

            <FormGroup
              label="Número de Cédula"
              htmlFor="identification_number"
              required
              labelClassName="text-neutral-lightest"
            >
              <Input
                id="identification_number"
                name="identification_number"
                type="text"
                autoComplete="username"
                required
                value={formData.identification_number}
                onChange={handleChange}
                className="bg-white/5" 
              />
            </FormGroup>

            <FormGroup
              label="Contraseña"
              htmlFor="password"
              required
              labelClassName="text-neutral-lightest"
              helpTextComponent={
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-semibold text-secondary hover:text-secondary-light"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              }
            >
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="bg-white/5" 
              />
            </FormGroup>

            <div>
              <Button
                type="submit"
                color="secondary"
                className="w-full"
                loading={loading}
                disabled={loading}
              >
                {loading ? 'Ingresando...' : 'Iniciar Sesión'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}