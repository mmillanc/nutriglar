import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export default function CategoryPage({ category, title, subtitle }) {
const filtered = products.filter(p => p.category === category)

return (
<section className="mx-auto max-w-7xl px-4 py-10">
<header className="mb-8">
<h2 className="text-2xl font-bold">{title}</h2>
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


// =========================
// products.js (ejemplo con badge)
// =========================
// Agregar opcionalmente:
// recommended: true