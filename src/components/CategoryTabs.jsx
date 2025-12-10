const categories = [
  { id: "nutricion", label: "Nutrición" },
  { id: "equipamento", label: "Equipamento deportivo" },
  { id: "ejercicio", label: "Ejercicio" },
  { id: "accesorios", label: "Accesorios" }
];

export default function CategoryTabs({ active, setActive }) {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 flex gap-6 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`py-4 font-medium ${
              active === cat.id ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
