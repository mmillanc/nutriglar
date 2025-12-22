import { useNavigate } from 'react-router-dom';
import { MENU } from '../data/menu';

export default function CategoryTabs({ activeCategory, activeSub }) {
  const navigate = useNavigate();
  const currentData = MENU.find(m => m.path === activeCategory);

  if (!currentData) return null;

  return (
    <div className="mb-8 border-b border-gray-200">
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {/* Botón "Ver Todo" */}
        <button
          onClick={() => navigate(`/${activeCategory}`)}
          className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition ${
            !activeSub
              ? "bg-[#70E03D] text-white shadow-md"
              : "bg-white text-gray-600 border hover:bg-gray-50"
          }`}
        >
          Ver todo
        </button>

        {/* Subcategorías dinámicas */}
        {currentData.subs.map((sub) => (
          <button
            key={sub.slug}
            onClick={() => navigate(`/${activeCategory}/${sub.slug}`)}
            className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition ${
              activeSub === sub.slug
                ? "bg-[#70E03D] text-white shadow-md"
                : "bg-white text-gray-600 border hover:bg-gray-50"
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
}