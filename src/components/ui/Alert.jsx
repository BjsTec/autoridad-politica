// src/components/ui/Alert.jsx
import React, { useEffect, useState, useCallback } from 'react' 
import { XMarkIcon } from '@heroicons/react/20/solid'

const Alert = ({ message, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [handleClose]) 
  

  if (!isVisible) return null

  const alertClasses = {
    success: 'bg-success-100 border-success-400 text-success-700',
    error: 'bg-error-100 border-error-400 text-error-700',
    warning: 'bg-warning-100 border-warning-400 text-warning-700',
    info: 'bg-info-100 border-info-400 text-info-700',
  }

  const title = {
    success: 'Éxito',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información',
  }

  return (
    <div
      className={`p-3 rounded-md border ${alertClasses[type]} shadow-lg z-50 transition-opacity duration-300 ease-in-out`}
      role="alert"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex items-center justify-between">
        <p className="font-bold">{title[type]}</p>
        <button
          onClick={handleClose}
          className="text-current opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded"
          aria-label="Cerrar alerta"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      <p className="text-sm mt-1">{message}</p>
    </div>
  )
}

export default Alert