import { useParams } from "react-router-dom"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"
import useSEO from "../hooks/useSEO"

const CATEGORY_TITLES = {
  nutricion: "Nutrición",
  equipamento: "Equipamiento deportivo",
  belleza: "Belleza y cuidado personal",
}

export default function CategoryPage() {
  const { category, subcategory } = useParams()

  const title = CATEGORY_TITLES[category] || "Productos"
  const subtitle = subcategory
    ? `Explora ${subcategory.replace("-", " ")}`
    : "Productos recomendados"

  useSEO({
    title: `${title} | Nutriglar`,
    description: `Explora productos de ${title.toLowerCase()} seleccionados para ti.`,
  })

  const filtered = products.filter(p => {
    if (!p.active) return false
    if (subcategory) {
      return p.category === category && p.subcategory === subcategory
    }
    return p.category === category
  })

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
        <p className="text-gray-600 capitalize">{subtitle}</p>
      </header>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay productos disponibles por ahora.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}
