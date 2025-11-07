// src/middleware.js
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Refresca la sesión del usuario
  await supabase.auth.getSession()

  return response
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto las que empiezan por:
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico (archivo de favicon)
     * - / (la landing pública)
     * - /login, /forgot-password, /terms, /privacy (páginas públicas)
     */
    '/((?!_next/static|_next/image|favicon.ico|login|forgot-password|terms|privacy|/$).*)',
  ],
}