// src/lib/supabase/client.js
'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Define tus variables de entorno en .env.local
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}