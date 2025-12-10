import React from 'react'
import { Link } from 'react-router-dom'


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
          <Link to="/nutricion" className="px-3 py-2 rounded hover:bg-gray-100"> Nutrición </Link>
          <Link to="/suplementos" className="px-3 py-2 rounded hover:bg-gray-100"> Suplementos </Link>
          <Link to="/deporte" className="px-3 py-2 rounded hover:bg-gray-100"> Deporte </Link>
          <Link to="/nutricion" className="px-3 py-2 rounded hover:bg-gray-100"> Accesorios </Link>
          <a className="btn" href="#contacto">Contacto</a>
        </nav>
        <div className="md:hidden">{/* mobile menu button placeholder */}
          <button aria-label="abrir menú" className="p-2">☰</button>
        </div>
      </div>
    </header>
  )
}
