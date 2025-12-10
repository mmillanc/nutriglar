export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <img src="public/images/banner-nutriglar.png" alt="Nutriglar" className="rounded-lg" />
        <h1 className="text-2xl font-semibold mt-4">
          Nutriglar Recomienda
        </h1>
        <p className="text-gray-600">
          Productos seleccionados para una vida más saludable y activa.
        </p>
      </div>
    </header>
  );
}