import { MENU } from '../data/menu'; // Recomiendo mover el array MENU a un archivo aparte

export default function CategoryTabs({ activeCategory, activeSub, onCategoryChange, onSubChange }) {
  
  // Buscamos la categoría actual en nuestro objeto MENU
  const currentCategoryData = MENU.find(cat => cat.path === activeCategory);

  return (
    <div className="bg-white border-b sticky top-[72px] z-30">
      {/* 1. Categorías Principales */}
      <div className="max-w-7xl mx-auto px-4 flex gap-8 overflow-x-auto scrollbar-hide">
        {MENU.map(cat => (
          <button
            key={cat.path}
            onClick={() => {
              onCategoryChange(cat.path);
              onSubChange(null); // Al cambiar categoría, reseteamos subcategoría
            }}
            className={`py-4 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
              activeCategory === cat.path 
                ? "border-[#70E03D] text-black" 
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2. Subcategorías (Solo se muestran si la categoría tiene subcategorías) */}
      {currentCategoryData?.subs && (
        <div className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 flex gap-3 py-3 overflow-x-auto scrollbar-hide">
            {/* Botón "Ver Todo" dentro de la subcategoría */}
            <button
              onClick={() => onSubChange(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSub === null 
                  ? "bg-gray-800 text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              Ver todo
            </button>

            {currentCategoryData.subs.map(sub => (
              <button
                key={sub.slug}
                onClick={() => onSubChange(sub.slug)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSub === sub.slug 
                    ? "bg-[#70E03D] text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}