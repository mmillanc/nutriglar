import fs from 'fs'
import fetch from 'node-fetch'

const PRODUCTS_PATH = '../src/data/products.js'

const fetchWithTimeout = (url, ms = 8000) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), ms)

  return fetch(url, {
    signal: controller.signal,
    redirect: 'follow',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }).finally(() => clearTimeout(id))
}

const checkProducts = async () => {
  const { products } = await import(PRODUCTS_PATH)

  console.log(`🔍 Revisando ${products.length} productos...\n`)

  const valid = []
  const broken = []

  for (const p of products) {
    if (!p.url) {
      broken.push({ ...p, reason: 'Sin URL' })
      console.log(`❌ SIN URL → ${p.name}`)
      continue
    }

    try {
      const res = await fetchWithTimeout(p.url)

      // 👇 ML devuelve 403 aunque esté vivo
      if (res.ok || res.status === 403) {
        valid.push(p)
        console.log(`✅ OK → ${p.name}`)
      } else {
        broken.push({
          ...p,
          reason: `HTTP ${res.status}`
        })
        console.log(`❌ CAÍDO → ${p.name}`)
      }

    } catch (err) {
      broken.push({
        ...p,
        reason: 'Timeout / Error'
      })
      console.log(`❌ ERROR → ${p.name}`)
    }
  }

  fs.writeFileSync(
    './scripts/links-report.json',
    JSON.stringify({ valid, broken }, null, 2)
  )

  console.log('\n──────── RESULTADO ────────')
  console.log(`✔ Activos: ${valid.length}`)
  console.log(`✖ Caídos: ${broken.length}`)
  console.log('\n📄 Reporte generado: scripts/links-report.json')
}

checkProducts()
