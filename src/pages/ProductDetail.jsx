import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import { trackAffiliateClick } from "../utils/trackAffiliateClick"

export default function ProductDetail() {
  const { slug } = useParams()

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Producto no encontrado
        </h2>
        <Link to="/nutricion" className="text-blue-600 underline">
          Volver a Nutrición
        </Link>
      </div>
    )
  }

  const related = products
    .filter(
      p => p.category === product.category && p.slug !== product.slug
    )
    .slice(0, 4)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <nav className="mb-4 text-xs text-gray-500 ">
        <Link to="/" className="hover:underline">Inicio</Link> /{" "}
        <Link to={`/${product.category}`} className="hover:underline capitalize">
          {product.category}
        </Link> /{" "}
        <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* Producto */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FEFF51]">

        {/* Imagen */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl shadow"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-3 mt-8 mr-8">
            {product.name}
          </h1>

          <p className="text-sm text-black-700 mb-6 mr-8">
            {product.descriptionLong || product.description}
          </p>

          {/* Beneficios (opcional) */}
          {Array.isArray(product.benefits) && (
            <ul className="mb-6 space-y-2 text-sm">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA afiliado */}
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            onClick={() => trackAffiliateClick({ product })}
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-[#3659FF] px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Ver precio en MercadoLibre
          </a>

          <p className="mt-2 text-xs text-gray-400">
            * Enlace afiliado. Podemos recibir comisión sin costo adicional para ti.
          </p>
        </div>
      </section>

      {/* Productos relacionados */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">
            Productos relacionados
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => (
              <Link
                key={p.slug}
                to={`/producto/${p.slug}`}
                className="rounded-xl border p-3 text-center hover:shadow transition"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="mx-auto h-24 object-contain"
                />
                <p className="mt-2 text-xs font-medium line-clamp-2">
                  {p.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
