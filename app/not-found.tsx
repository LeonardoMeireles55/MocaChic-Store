'use client'

import Link from 'next/link'
import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen flex items-center justify-center bg-amber-50/70">
        <div className="text-center space-y-6 p-8">
          <h1 className="text-4xl font-serif text-amber-800">Página não encontrada</h1>
          <p className="text-lg text-amber-600">
            A página que você está procurando não existe.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </Suspense>
  )
} 