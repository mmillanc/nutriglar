import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header visual con banner */}
      <Header />

      {/* Navbar superior */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1">
        <Home />
      </main>

      {/* Footer legal */}
      <Footer />
    </div>
  )
}
