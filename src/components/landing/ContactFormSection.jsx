// src/components/landing/ContactFormSection.jsx
'use client'

import { useState } from 'react'
// Importamos los componentes del UI Kit
import Button from '../ui/Button'
import FormGroup from '../ui/FormGroup'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea' // Nuestro nuevo componente

// import { submitCommercialLead } from '@/app/actions/commercialLeads';

export default function ContactFormSection() {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      // (Lógica de Server Action simulada)
      console.log('Formulario enviado (simulado):', formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', phone: '', message: '' })
      // (Fin Placeholder)
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'Error desconocido.',
      })
    }
  }

  // --- INICIO REFACTORIZACIÓN (Estilos de Inputs) ---
  const darkInputClasses = "bg-white/5" // Clases para la variante oscura
  // --- FIN REFACTORIZACIÓN ---

  return (
    <div
      id="contact"
      className="bg-primary-dark isolate px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-lightest sm:text-4xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg leading-8 text-neutral-light">
          ¿Tienes preguntas o quieres una demostración personalizada? Déjanos tus
          datos.
        </p>
      </div>
      
      {/* --- INICIO REFACTORIZACIÓN (Formulario) --- */}
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          <FormGroup
            label="Nombre Completo"
            htmlFor="name"
            required
            labelClassName="text-neutral-lightest"
            className="sm:col-span-2"
          >
            <Input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={darkInputClasses} // Aplicamos estilo oscuro
            />
          </FormGroup>

          <FormGroup
            label="Correo Electrónico"
            htmlFor="email"
            required
            labelClassName="text-neutral-lightest"
            className="sm:col-span-2"
          >
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={darkInputClasses}
            />
          </FormGroup>

          <FormGroup
            label="Teléfono"
            htmlFor="phone"
            helpText="(Opcional)"
            labelClassName="text-neutral-lightest"
            className="sm:col-span-2"
          >
            <Input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className={darkInputClasses}
            />
          </FormGroup>

          <FormGroup
            label="Mensaje"
            htmlFor="message"
            required
            labelClassName="text-neutral-lightest"
            className="sm:col-span-2"
          >
            <Textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={darkInputClasses} // Aplicamos estilo oscuro
            />
          </FormGroup>
        </div>

        <div className="mt-10">
          <Button
            type="submit"
            disabled={status.loading}
            loading={status.loading}
            color="secondary"
            className="w-full"
          >
            {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </div>
        {/* --- FIN REFACTORIZACIÓN --- */}

        {/* Mensajes de estado (lógica sin cambios) */}
        {status.success && (
          <p className="mt-4 text-center text-sm text-success-500">
            ¡Mensaje enviado con éxito!
          </p>
        )}
        {status.error && (
          <p className="mt-4 text-center text-sm text-error-500">
            {status.error}
          </p>
        )}
      </form>
    </div>
  )
}