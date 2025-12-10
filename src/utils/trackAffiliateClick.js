export function trackAffiliateClick({ product }) {
if (!window.gtag) return

window.gtag('event', 'affiliate_click', {
    event_category: 'affiliate',
    event_label: product.name,
    product_id: product.id,
    product_category: product.category
})
}
