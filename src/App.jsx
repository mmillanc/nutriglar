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
            <Route path="/" element={<Navigate to="/nutricion" replace />} />

            <Route path="/producto/:slug" element={<ProductDetail />} />


            <Route
              path="/nutricion"
              element={
                <CategoryPage
                  category="nutricion"
                  title="Nutrición"
                  subtitle="Apoya tu salud cada día"
                />
              }
            />

            <Route
              path="/equipamento"
              element={
                <CategoryPage
                  category="equipamento"
                  title="Equipamento deportivo"
                  subtitle="Todo para tu entrenamiento"
                />
              }
            />

            <Route
              path="/belleza"
              element={
                <CategoryPage
                  category="belleza"
                  title="Belleza y Cuidado personal"
                  subtitle="Todo para tu bienestar diario"
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
