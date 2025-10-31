// src/app/(auth)/login/page.jsx
'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { createClient } from '@/lib/supabase/client' // Nuestro cliente

// Componentes de UI
import Button from '@/components/ui/Button'
import FormGroup from '@/components/ui/FormGroup'
import Input from '@/components/ui/Input'

// Esquema de validación con Zod
const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z.string().min(1, { message: 'La contraseña es requerida.' }),
})

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      toast.error(error.message || 'Credenciales inválidas.')
    } else {
      toast.success('¡Bienvenido!')
      // Redirección (asumimos a un dashboard)
      window.location.href = '/dashboard' 
    }
    setLoading(false)
  }

  return (
    <>
      <h2 className="mb-6 text-center text-2xl font-bold text-primary-dark">
        Iniciar Sesión
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormGroup
          label="Correo Electrónico"
          htmlFor="email"
          error={errors.email?.message}
        >
          <Input id="email" type="email" {...register('email')} />
        </FormGroup>

        <FormGroup
          label="Contraseña"
          htmlFor="password"
          error={errors.password?.message}
        >
          <Input
            id="password"
            type="password"
            showPasswordToggle
            {...register('password')}
          />
        </FormGroup>

        <div className="text-right text-sm">
          <Link
            href="/forgot-password"
            className="font-medium text-primary hover:text-primary-dark"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button
          type="submit"
          color="primary"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-neutral-600">
        ¿No tienes cuenta?{' '}
        <Link
          href="/#plans" // Dirige a la sección de planes en la landing
          className="font-medium text-primary hover:text-primary-dark"
        >
          Regístrate
        </Link>
      </p>
    </>
  )
}