import axios from "axios";

/* =========================
   CATEGORÍAS CONTROLADAS
========================= */

const categorias = {
  "deportes-fitness": {
    id: "MLC1276",
    keywords: ["proteína", "mancuernas", "bandas elásticas"]
  },
  "salud": {
    id: "MLC1637",
    keywords: ["colágeno", "vitaminas", "suplementos"]
  }
};

/* =========================
   ROUTER PRINCIPAL
========================= */

export default function handler(req, res) {
  const { route } = req.query;

  if (!route) {
    return res.status(400).json({ error: "Ruta no especificada" });
  }

  switch (route) {

    case "health":
      return res.json({ status: "ok" });

    case "affiliate-link":
      return affiliateLink(req, res);

    case "category-products":
      return categoryProducts(req, res);

    default:
      return res.status(404).json({ error: "Ruta no encontrada" });
  }
}

/* =========================
   HANDLERS
========================= */

function affiliateLink(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Falta url" });
  }

  try {
    const parsed = new URL(url);

    parsed.searchParams.set(
      "matt_word",
      process.env.ML_AFFILIATE_WORD
    );
    parsed.searchParams.set(
      "matt_tool",
      process.env.ML_AFFILIATE_TOOL
    );

    return res.json({ affiliateUrl: parsed.toString() });

  } catch {
    return res.status(400).json({ error: "URL inválida" });
  }
}

async function categoryProducts(req, res) {
  const { category } = req.query;

  if (!category || !categorias[category]) {
    return res.status(400).json({ error: "Categoría inválida" });
  }

  const { id, keywords } = categorias[category];

  return res.json({
    category,
    categoryId: id,
    keywords,
    products: keywords.map(k => ({
      title: k,
      exampleAffiliateLink:
        `/api?route=affiliate-link&url=https://www.mercadolibre.cl/${id}-${encodeURIComponent(k)}`
    }))
  });
}
