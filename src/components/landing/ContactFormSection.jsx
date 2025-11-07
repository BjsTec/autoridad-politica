// src/components/landing/ContactFormSection.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion' // Importamos motion
import Button from '../ui/Button'
import FormGroup from '../ui/FormGroup'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'

// (Lógica de fetch simulada sin cambios)
// import { submitCommercialLead } from '@/app/actions/commercialLeads';

// --- Variantes de animación ---
const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada FormGroup/Button aparecerá escalonado
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
}

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
    // (Lógica de handleSubmit sin cambios)
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      console.log('Formulario enviado (simulado):', formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'Error desconocido.',
      })
    }
  }

  const darkInputClasses = "bg-white/5"

  return (
    <div
      id="contact"
      className="bg-primary-dark isolate px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-neutral-lightest sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Contáctanos
        </motion.h2>
        <motion.p
          className="mt-2 text-lg leading-8 text-neutral-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          ¿Tienes preguntas o quieres una demostración personalizada? Déjanos tus
          datos.
        </motion.p>
      </div>

      {/* --- INICIO REFACTORIZACIÓN (Formulario animado) --- */}
      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Empezar animación cuando 10% del form sea visible
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          {/* Cada FormGroup está envuelto en motion.div */}
          <motion.div variants={itemVariants} className="sm:col-span-2">
            <FormGroup
              label="Nombre Completo"
              htmlFor="name"
              required
              labelClassName="text-neutral-lightest"
            >
              <Input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={darkInputClasses}
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants} className="sm:col-span-2">
            <FormGroup
              label="Correo Electrónico"
              htmlFor="email"
              required
              labelClassName="text-neutral-lightest"
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
          </motion.div>

          <motion.div variants={itemVariants} className="sm:col-span-2">
            <FormGroup
              label="Teléfono"
              htmlFor="phone"
              helpText="(Opcional)"
              labelClassName="text-neutral-lightest"
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
          </motion.div>

          <motion.div variants={itemVariants} className="sm:col-span-2">
            <FormGroup
              label="Mensaje"
              htmlFor="message"
              required
              labelClassName="text-neutral-lightest"
            >
              <Textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className={darkInputClasses}
              />
            </FormGroup>
          </motion.div>
        </div>

        <motion.div className="mt-10" variants={itemVariants}>
          <Button
            type="submit"
            disabled={status.loading}
            loading={status.loading}
            color="secondary" // Botón dorado
            className="w-full"
          >
            {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </motion.div>
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
      </motion.form>
    </div>
  )
}