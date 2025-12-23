## Integración API MercadoLibre Afiliados – Experiencia y lecciones aprendidas

## Proyecto: Nutriglar
**Estado:**
Integración descartada / Solución alternativa adoptada

---

## 1. Objetivo inicial

El objetivo inicial fue integrar la API pública de MercadoLibre (MLC) para:

- Obtener productos de forma dinámica
- Filtrar por categorías (nutrición, equipamiento, belleza)
- Detectar productos caídos automáticamente
- Mantener enlaces afiliados actualizados
- Reducir mantenimiento manual

---

## 2. Implementación inicial intentada

Se desarrollaron endpoints locales para consumir la API de MercadoLibre:

- `/api/products`
- `/api/product?id=XXXX`
- Sistema de cache simple
- Validación de stock (`available_quantity`)
- Mapeo editorial de categorías
- Normalización de datos para frontend

Ejemplo de endpoint probado:

```
https://api.mercadolibre.com/sites/MLC/search?q=proteina+whey&limit=48
```

---

## 3. Problemas encontrados

### 3.1 Error 403 Forbidden

Los endpoints de búsqueda comenzaron a devolver respuestas constantes:

```
{
  "message": "forbidden",
  "error": "forbidden",
  "status": 403
}
```

Esto ocurrió:
- Desde navegador
- Desde backend
- Desde funciones serverless
- Sin parámetros afiliados

**Conclusión:** la API bloquea búsquedas anónimas o desde entornos serverless.

---

### 3.2 Inconsistencias entre endpoints

- `/items/:id` respondía ocasionalmente
- `/sites/MLC/search` fallaba de forma permanente

Esto hacía imposible listar productos dinámicamente.

---

### 3.3 Bloqueo en entornos serverless

Durante pruebas con Vercel:

- Functions fallaban
- Errores `FUNCTION_INVOCATION_FAILED`
- Requests rechazadas

MercadoLibre detecta y bloquea entornos serverless.

---

### 3.4 Impacto en frontend

- CategoryPage sin datos
- ProductDetail fallando
- Problemas de UX y SEO

---

## 4.  Scripts implementados

### 4.1 Validación de enlaces afiliados

Se creó un script Node para:

- Validar enlaces
- Manejar timeouts
- Detectar productos caídos
- Generar reporte JSON

Se detectó que MercadoLibre devuelve 403 incluso para productos activos.

---

## 5.  Decisión técnica

Se decidió descartar la integración directa con la API debido a:

- Bloqueos constantes
- Inestabilidad
- Riesgo operativo
- Impacto negativo en SEO

---

## 6.  Solución adoptada

### Data local controlada

- Productos definidos en `/src/data/products.js`
- Control total de categorías, SEO y enlaces

### Arquitectura final

- CategoryPage con data local
- ProductDetail por slug
- Navbar con rutas estáticas
- Enlaces afiliados directos

---

## 7.  Lecciones aprendidas

- APIs públicas no garantizan estabilidad
- 403 no implica producto caído
- Serverless tiene limitaciones externas
- Controlar los datos es clave en afiliación

---

## 8.  Conclusión

La integración con la API de MercadoLibre fue una experiencia valiosa, pero la decisión correcta fue abandonarla a tiempo y optar por una solución más estable y controlada.

A futuro se realizará una nueva integraci´pon con la API MercadoLibre solicitando previo permiso como desarrollador.
