import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) =>
    location.pathname === path
      ? "px-3 py-2 border-b-2 border-black font-semibold"
      : "px-3 py-2 text-gray-600 hover:text-black"

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-3">
          <img src="/logo192.png" className="w-10 h-10 rounded" />
          <div>
            <h1 className="font-bold">Nutriglar</h1>
            <p className="text-xs text-gray-500">Productos recomendados</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to="/nutricion" className={isActive("/nutricion")}>Nutrición</Link>
          <Link to="/suplementos" className={isActive("/suplementos")}>Suplementos</Link>
          <Link to="/ejercicio" className={isActive("/ejercicio")}>Ejercicio</Link>
          <Link to="/accesorios" className={isActive("/accesorios")}>Accesorios</Link>
        </nav>

      </div>
    </header>
  )
}
