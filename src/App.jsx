import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import ProductDetail from "./pages/ProductDetail"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Header />
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Redirección inicial */}
            <Route path="/" element={<Navigate to="/nutricion" replace />} />

            {/* Detalle de producto */}
            <Route path="/producto/:slug" element={<ProductDetail />} />

            {/* --- RUTAS DINÁMICAS --- */}
            {/* Esta ruta captura /nutricion, /equipamento, etc. */}
            <Route path="/:category" element={<CategoryPage />} />
            
            {/* Esta ruta captura /nutricion/proteinas, etc. */}
            <Route path="/:category/:subcategory" element={<CategoryPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}