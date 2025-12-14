import { useParams } from "react-router-dom"
import { products } from "../data/products"

export default function ProductDetail() {
  const { slug } = useParams()

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return <p className="text-center py-20">Producto no encontrado</p>
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      
      <div className="grid md:grid-cols-2 gap-8">
        
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow"
        />

        <div>
          <h1 className="text-2xl font-bold mb-3">
            {product.name}
          </h1>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-6">
            <li>Producto recomendado por Nutriglar</li>
            <li>Compra segura en MercadoLibre</li>
            <li>Enlace afiliado</li>
          </ul>

          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Ver producto en MercadoLibre
          </a>

          <p className="mt-4 text-xs text-gray-500">
            * Enlace afiliado. Podemos recibir comisión sin costo adicional para ti.
          </p>
        </div>

      </div>
    </section>
  )
}
