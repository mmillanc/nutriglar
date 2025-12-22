import { useParams } from "react-router-dom"
import { products } from "../data/products"
import { MENU } from "../data/menu"
import { ProductCard } from "../components/ProductCard"
import CategoryTabs from "../components/CategoryTabs"
import Breadcrumbs from "../components/Breadcrumbs"
import useSEO from "../hooks/useSEO"

export default function CategoryPage() {
const { category, subcategory } = useParams()

  // 1. Buscamos la info de la categoría
const categoryInfo = MENU.find(m => m.path === category) || { label: "Productos", subtitle: "Catálogo" }

const displayTitle = categoryInfo.label
const displaySubtitle = subcategory
    ? `Los mejores productos de ${subcategory.replace("-", " ")}`
    : categoryInfo.subtitle

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
    {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.nutriglar.cl"
    },
    {
        "@type": "ListItem",
        "position": 2,
        "name": displayTitle,
        "item": `https://www.nutriglar.cl/${category}`
    },
    ...(subcategory ? [{
        "@type": "ListItem",
        "position": 3,
        "name": subcategory,
        "item": `https://www.nutriglar.cl/${category}/${subcategory}`
    }] : [])
]
};

useSEO({
    title: `${displayTitle} ${subcategory ? `| ${subcategory}` : ''} | Nutriglar`,
    description: `Descubre nuestra selección de ${displayTitle.toLowerCase()}. Calidad garantizada en Nutriglar.`,
})

const filtered = products.filter(p => {
    if (!p.active) return false
    const matchCat = p.category === category
    const matchSub = subcategory ? p.subcategory === subcategory : true
    return matchCat && matchSub
})

return (
    <>
      {/* Script inyectado para Google (SEO Semántico) */}
    <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
    </script>

    <section className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        {/* 1. Breadcrumbs */}
        <Breadcrumbs 
        category={category} 
        categoryLabel={displayTitle} 
        subcategory={subcategory} 
        />

        {/* 2. Encabezado */}
        <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {displayTitle}
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
            {displaySubtitle}
        </p>
        </header>

        {/* 3. Filtros de Subcategoría (Tabs) */}
        <CategoryTabs activeCategory={category} activeSub={subcategory} />

        {/* 4. Listado de Productos */}
        {filtered.length === 0 ? (
        <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
            Estamos actualizando nuestro stock. ¡Vuelve pronto!
            </p>
        </div>
        ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 mt-8">
            {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
            ))}
        </div>
        )}
    </section>
    </>
)}
