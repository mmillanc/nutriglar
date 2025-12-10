export function ProductCard({ product }) {
return (
<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
{/* Imagen con altura uniforme */}
<div className="relative aspect-square w-full overflow-hidden">
<img
src={product.image}
alt={product.name}
loading="lazy"
className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>


{/* Badge recomendado */}
{product.recommended && (
<span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
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
<a
href={product.url}
target="_blank"
rel="noopener noreferrer"
className="mt-auto inline-flex items-center justify-center rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
>
Ver producto
</a>
</div>
</article>
)
}
