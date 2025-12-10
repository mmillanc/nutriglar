import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/logo192.png" alt="Nutriglar" className="w-12 h-12 rounded" />
          <div>
            <h1 className="font-bold text-lg">Nutriglar</h1>
            <p className="text-xs text-gray-500">Recomendados y productos afiliados</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a className="px-3 py-2 rounded hover:bg-gray-100" href="#suplementos">Suplementos</a>
          <a className="px-3 py-2 rounded hover:bg-gray-100" href="#deporte">Deporte</a>
          <a className="px-3 py-2 rounded hover:bg-gray-100" href="#accesorios">Accesorios</a>
          <a className="btn" href="#contacto">Contacto</a>
        </nav>
        <div className="md:hidden">{/* mobile menu button placeholder */}
          <button aria-label="abrir menú" className="p-2">☰</button>
        </div>
      </div>
    </header>
  )
}
