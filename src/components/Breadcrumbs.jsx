import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // O usa un ">" simple

export default function Breadcrumbs({ category, categoryLabel, subcategory }) {
return (
    <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-4 overflow-x-auto whitespace-nowrap">
    <Link to="/" className="hover:text-[#70E03D] transition">Inicio</Link>

    <ChevronRight size={12} />

    {subcategory ? (
        <>
        <Link to={`/${category}`} className="hover:text-[#70E03D] transition">
            {categoryLabel}
        </Link>
        <ChevronRight size={12} />
        <span className="text-gray-900 font-medium capitalize">
            {subcategory.replace("-", " ")}
        </span>
        </>
    ) : (
        <span className="text-gray-900 font-medium">{categoryLabel}</span>
    )}
    </nav>
);
}