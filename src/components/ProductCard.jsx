import { Link } from "react-router-dom"

export function ProductCard({ product }) {
return (
<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
{/* Imagen con altura uniforme */}
<div className="relative aspect-square w-full overflow-hidden flex items-center justify-center">
<img
src={product.image}
alt={product.name}
loading="lazy"
className="h-auto w-1/2 object-cover transition-transform duration-300 group-hover:scale-105"
/>


{/* Badge recomendado */}
{product.recommended && (
<span className="absolute left-3 top-3 rounded-full bg-[#00A650] px-3 py-1 text-xs font-medium text-white">
Recomendado
</span>
)}
</div>


{/* Contenido */}
<div className="flex flex-1 flex-col p-4">
<h3 className="mb-1 text-sm font-semibold line-clamp-2">
{product.name}
</h3>


<p className="mb-4 text-xs text-gray-600 line-clamp-2">
{product.description}
</p>


{/* CTA */}
<Link
to={`/producto/${product.slug}`}
className="mt-auto inline-flex items-center justify-center rounded-xl bg-[#3659FF] py-3 text-sm font-bold text-white transition hover:bg-gray-700"
>
Ver detalles
</Link>

<p className="mt-2 text-center text-[11px] text-gray-400">
Enlace de distribuidor autorizado
</p>
</div>
</article>
)
}
