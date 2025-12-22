import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MENU = [
  {
    label: "Nutrición",
    path: "nutricion",
    subs: [
      { name: "Proteínas", slug: "proteinas" },
      { name: "Creatinas", slug: "creatinas" },
      { name: "Suplementos", slug: "suplementos" }
    ]
  },
  {
    label: "Equipamento",
    path: "equipamento",
    subs: [
      { name: "Pesas", slug: "pesas" },
      { name: "Máquinas", slug: "maquinas" },
      { name: "Outdoor", slug: "outdoor" }
    ]
  },
  {
    label: "Belleza",
    path: "belleza",
    subs: [
      { name: "Belleza", slug: "belleza" },
      { name: "Perfumes", slug: "perfumes" },
      { name: "Cuidado personal", slug: "cuidadopersonal" }
    ]
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSub, setActiveSub] = useState(null)

  const closeAll = () => { setOpen(false); setActiveSub(null); }

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Brand */}
        <div className="flex items-center gap-4">
          <img src="/images/logo-azul-nutriglar.png" alt="Nutriglar" className="w-24 h-auto" />
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg leading-tight">Nutriglar</h1>
            <p className="text-[10px] text-gray-400 uppercase">Recomendados</p>
          </div>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex gap-1 items-center">
          <a href="https://www.nutriglar.cl/" className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">Inicio</a>

          {MENU.map((cat) => (
            <div key={cat.path} className="relative group">
              <NavLink 
                to={`/${cat.path}`} 
                className={({ isActive }) => 
                  `px-3 py-2 rounded text-sm font-medium transition flex items-center ${isActive ? "bg-[#70E03D] text-white" : "text-gray-600 hover:bg-gray-100"}`
                }
              >
                {cat.label}
              </NavLink>
              
              {/* Dropdown Desktop */}
              <div className="absolute left-0 mt-0 hidden w-48 pt-2 group-hover:block z-50">
                <div className="bg-white shadow-xl rounded-xl border overflow-hidden">
                  {cat.subs.map((sub) => (
                    <NavLink 
                      key={sub.slug} 
                      to={`/${cat.path}/${sub.slug}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a href="https://www.nutriglar.cl/contact" className="ml-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-[#70E03D] transition-colors">Contacto</a>
        </nav>

        {/* Botón Móvil */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="flex flex-col p-4 space-y-1">
          <a href="https://www.nutriglar.cl/" className="px-3 py-2 text-base font-medium">Inicio</a>

          {MENU.map((cat) => (
            <div key={cat.path}>
              <button 
                onClick={() => setActiveSub(activeSub === cat.path ? null : cat.path)}
                className="w-full px-3 py-2 flex justify-between items-center text-base font-medium text-gray-700"
              >
                {cat.label} 
                <span className={`transition-transform ${activeSub === cat.path ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              <div className={`pl-4 overflow-hidden transition-all duration-300 ${activeSub === cat.path ? "max-h-48" : "max-h-0"}`}>
                {cat.subs.map((sub) => (
                  <NavLink 
                    key={sub.slug} 
                    to={`/${cat.path}/${sub.slug}`} 
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm text-gray-600 border-l-2 border-transparent hover:border-[#70E03D]"
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <a href="https://www.nutriglar.cl/contact" className="px-3 py-2 text-base font-bold text-[#70E03D]">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

/*
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkBase = "px-3 py-2 rounded text-sm font-medium transition flex items-center justify-between"
const dropdownLinkBase = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
const mobileSubLinkBase = "block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50 border-l-2 border-transparent hover:border-[#70E03D]"

export default function Navbar() {
  const [open, setOpen] = useState(false) // Menú móvil principal
  const [activeSub, setActiveSub] = useState(null) // Submenú activo en móvil

  const toggleSub = (menu) => {
    setActiveSub(activeSub === menu ? null : menu)
  }

  // Cerrar todo al hacer click en un link final
  const closeAll = () => {
    setOpen(false)
    setActiveSub(null)
  }

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        //Brand
        <div className="flex items-center gap-4">
          <img src="/images/logo-azul-nutriglar.png" alt="Nutriglar" className="w-24 h-auto" />
          <div>
            <h1 className="font-bold text-lg leading-tight">Nutriglar</h1>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Recomendados afiliados</p>
          </div>
        </div>

        // --- DESKTOP NAV ---
        <nav className="hidden md:flex gap-1 items-center">
          <a href="https://www.nutriglar.cl/" className="px-3 py-2 rounded text-sm font-medium text-gray-600 hover:bg-gray-100">Inicio</a>

          // Nutrición
          <div className="relative group">
            <NavLink to="/nutricion" className={({ isActive }) => `${linkBase} ${isActive ? "bg-[#70E03D] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
              Nutrición
            </NavLink>
            <div className="absolute left-0 mt-0 hidden w-48 pt-2 group-hover:block">
              <div className="bg-white shadow-xl rounded-xl border overflow-hidden">
                <NavLink to="/nutricion/proteinas" className={dropdownLinkBase}>Proteínas</NavLink>
                <NavLink to="/nutricion/creatinas" className={dropdownLinkBase}>Creatinas</NavLink>
                <NavLink to="/nutricion/suplementos" className={dropdownLinkBase}>Suplementos</NavLink>
              </div>
            </div>
          </div>

          // Equipamento
          <div className="relative group">
            <NavLink to="/equipamento" className={({ isActive }) => `${linkBase} ${isActive ? "bg-[#70E03D] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
              Equipamento
            </NavLink>
            <div className="absolute left-0 mt-0 hidden w-48 pt-2 group-hover:block">
              <div className="bg-white shadow-xl rounded-xl border overflow-hidden">
                <NavLink to="/equipamento/pesas" className={dropdownLinkBase}>Pesas</NavLink>
                <NavLink to="/equipamento/maquinas" className={dropdownLinkBase}>Máquinas</NavLink>
                <NavLink to="/equipamento/outdoor" className={dropdownLinkBase}>Outdoor</NavLink>
              </div>
            </div>
          </div>

          // Belleza
          <div className="relative group">
            <NavLink to="/belleza" className={({ isActive }) => `${linkBase} ${isActive ? "bg-[#70E03D] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
              Belleza
            </NavLink>
            <div className="absolute left-0 mt-0 hidden w-56 pt-2 group-hover:block">
              <div className="bg-white shadow-xl rounded-xl border overflow-hidden">
                <NavLink to="/belleza/belleza" className={dropdownLinkBase}>Belleza</NavLink>
                <NavLink to="/belleza/perfumes" className={dropdownLinkBase}>Perfumes</NavLink>
                <NavLink to="/belleza/cuidadopersonal" className={dropdownLinkBase}>Cuidado Personal</NavLink>
              </div>
            </div>
          </div>

          <a href="https://www.nutriglar.cl/contact" className="ml-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-[#70E03D] transition-colors">Contacto</a>
        </nav>

        // Mobile button
        <button className="md:hidden text-2xl p-2" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      // --- MOBILE MENU ---
      <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col p-4 space-y-1">
          <a href="https://www.nutriglar.cl/" className="px-3 py-2 text-base font-medium text-gray-700">Inicio</a>

          // Nutrición Mobile
          <div>
            <button onClick={() => toggleSub('nutricion')} className="w-full px-3 py-2 flex justify-between items-center text-base font-medium text-gray-700">
              Nutrición <ChevronIcon isOpen={activeSub === 'nutricion'} />
            </button>
            <div className={`pl-4 overflow-hidden transition-all ${activeSub === 'nutricion' ? "max-h-40" : "max-h-0"}`}>
              <NavLink to="/nutricion/proteinas" onClick={closeAll} className={mobileSubLinkBase}>Proteínas</NavLink>
              <NavLink to="/nutricion/creatinas" onClick={closeAll} className={mobileSubLinkBase}>Creatinas</NavLink>
              <NavLink to="/nutricion/suplementos" onClick={closeAll} className={mobileSubLinkBase}>Suplementos</NavLink>
            </div>
          </div>

          // Equipamento Mobile
          <div>
            <button onClick={() => toggleSub('equipamento')} className="w-full px-3 py-2 flex justify-between items-center text-base font-medium text-gray-700">
              Equipamento <ChevronIcon isOpen={activeSub === 'equipamento'} />
            </button>
            <div className={`pl-4 overflow-hidden transition-all ${activeSub === 'equipamento' ? "max-h-40" : "max-h-0"}`}>
              <NavLink to="/equipamento/pesas" onClick={closeAll} className={mobileSubLinkBase}>Pesas</NavLink>
              <NavLink to="/equipamento/maquinas" onClick={closeAll} className={mobileSubLinkBase}>Máquinas</NavLink>
              <NavLink to="/equipamento/outdoor" onClick={closeAll} className={mobileSubLinkBase}>Outdoor</NavLink>
            </div>
          </div>

          // Belleza Mobile
          <div>
            <button onClick={() => toggleSub('belleza')} className="w-full px-3 py-2 flex justify-between items-center text-base font-medium text-gray-700">
              Belleza y Cuidado <ChevronIcon isOpen={activeSub === 'belleza'} />
            </button>
            <div className={`pl-4 overflow-hidden transition-all ${activeSub === 'belleza' ? "max-h-40" : "max-h-0"}`}>
              <NavLink to="/belleza/belleza" onClick={closeAll} className={mobileSubLinkBase}>Belleza</NavLink>
              <NavLink to="/belleza/perfumes" onClick={closeAll} className={mobileSubLinkBase}>Perfumes</NavLink>
              <NavLink to="/belleza/cuidadopersonal" onClick={closeAll} className={mobileSubLinkBase}>Cuidado Personal</NavLink>
            </div>
          </div>

          <a href="https://www.nutriglar.cl/contact" className="px-3 py-2 text-base font-bold text-[#70E03D]">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

// Pequeño componente para la flechita
function ChevronIcon({ isOpen }) {
  return (
    <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
*/