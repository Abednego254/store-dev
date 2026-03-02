const ProductLineCard = ({ name, description, image, index = 0 }) => {
  return (
    <div
      className={`group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          Explore Line
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductLineCard;
