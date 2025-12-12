import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkBase =
  "px-3 py-2 rounded text-sm font-medium transition"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Brand */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo-azul-nutriglar.png"
            alt="Nutriglar"
            className="w-28 h-19 rounded"
          />
          <div>
            <h1 className="font-bold text-lg">Nutriglar</h1>
            <p className="text-xs text-gray-500">
              Recomendados afiliados
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 items-center">

          {/* 🔵 INICIO externo */}
          <a
            href="https://www.nutriglar.cl/"
            className="px-3 py-2 rounded text-sm font-medium text-gray-600 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inicio
          </a>

          <NavLink
            to="/nutricion"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? 'bg-[#70E03D] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            Nutrición
          </NavLink>

          <NavLink
            to="/equipamento"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? 'bg-[#70E03D] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            Equipamento deportivo
          </NavLink>

          <NavLink
            to="/deporte"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? 'bg-[#70E03D] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            Deporte
          </NavLink>

          {/* 🔵 CONTACTO externo */}
          <a
            href="https://www.nutriglar.cl/contact"
            className="btn ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-white shadow transition-all duration-300 overflow-hidden
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col p-4 gap-3 text-gray-800">

          {/* 🔵 INICIO externo */}
          <a
            href="https://www.nutriglar.cl/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inicio
          </a>

          <NavLink
            to="/nutricion"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-[#70E03D] text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Nutrición
          </NavLink>

          <NavLink
            to="/equipamento"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-[#70E03D] text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Equipamento deportivo
          </NavLink>

          <NavLink
            to="/deporte"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-[#70E03D] text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Deporte
          </NavLink>

          {/* 🔵 CONTACTO externo */}
          <a
            href="https://www.nutriglar.cl/contact"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
