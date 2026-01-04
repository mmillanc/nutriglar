export async function getCategoryProducts(category) {
  const res = await fetch(
    `https://nutriglar-backend.vercel.app/api?route=category-products&category=${category}`
  );
  return res.json();
}
