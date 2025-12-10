import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import useSEO from '../hooks/useSEO'

export default function CategoryPage({ category, title, subtitle }) {
useSEO({
    title: `${title} | Nutriglar`,
    description: `Explora ${title.toLowerCase()} recomendados. Productos afiliados seleccionados para mejorar tu bienestar.`
})

const filtered = products.filter(p => p.category === category)

return (
    <section className="mx-auto max-w-7xl px-4 py-10">
    <header className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
    </header>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
        {filtered.map(p => (
        <ProductCard key={p.id} product={p} />
        ))}
    </div>
    </section>
)
}
