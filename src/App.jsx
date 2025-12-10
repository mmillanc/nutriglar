import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Header />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <CategoryPage
                  category="nutricion"
                  title="Suplementos de Nutrición"
                  subtitle="Productos recomendados para tu bienestar"
                />
              }
            />

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
              path="/suplementos"
              element={
                <CategoryPage
                  category="suplementos"
                  title="Suplementos"
                  subtitle="Potencia tu rendimiento"
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
