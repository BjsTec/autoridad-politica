// src/app/(auth)/forgot-password/page.jsx
'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { createClient } from '@/lib/supabase/client'

// Componentes de UI
import Button from '@/components/ui/Button'
import FormGroup from '@/components/ui/FormGroup'
import Input from '@/components/ui/Input'

const forgotSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
})

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotSchema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
    })

    if (error) {
      toast.error(error.message || 'No se pudo enviar el correo.')
    } else {
      toast.success('Correo de recuperación enviado.')
      setSubmitted(true)
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h2 className="mb-4 text-center text-2xl font-bold text-primary-dark">
          Revisa tu correo
        </h2>
        <p className="text-neutral-600">
          Se ha enviado un enlace a tu correo electrónico para restablecer tu
          contraseña.
        </p>
        <Button
          href="/login"
          color="primary"
          variant="outline"
          className="mt-6 w-full"
        >
          Regresar a Iniciar Sesión
        </Button>
      </div>
    )
  }

  return (
    <>
      <h2 className="mb-2 text-center text-2xl font-bold text-primary-dark">
        Restablecer Contraseña
      </h2>
      <p className="mb-6 text-center text-sm text-neutral-600">
        Ingresa tu email y te enviaremos un enlace para recuperar tu cuenta.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormGroup
          label="Correo Electrónico"
          htmlFor="email"
          error={errors.email?.message}
        >
          <Input id="email" type="email" {...register('email')} />
        </FormGroup>

        <Button
          type="submit"
          color="primary"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar enlace'}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-neutral-600">
        <Link
          href="/login"
          className="font-medium text-primary hover:text-primary-dark"
        >
          Regresar a Iniciar Sesión
        </Link>
      </p>
    </>
  )
}