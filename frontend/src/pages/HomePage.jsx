import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import ProductLineCard from "../components/ProductLineCard";
import { fetchProductLines } from "../api/api"; // central API

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productLines, setProductLines] = useState([]);

  useEffect(() => {
    const getProductLines = async () => {
      try {
        const res = await fetchProductLines();
        setProductLines(res.data);
      } catch (err) {
        console.error("Error fetching product lines:", err);
      }
    };

    getProductLines();
  }, []);

  const filtered = productLines.filter((line) =>
    line.productLine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Topbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white overflow-hidden shadow-lg animate-fade-in py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            Discover Classic Models
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Explore our exclusive collections of meticulously crafted vintage cars, motorcycles, planes, and more.
          </p>

          <div className="max-w-xl mx-auto relative animate-fade-in-up animation-delay-400">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search product lines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 border-transparent rounded-full shadow-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-lg"
            />
          </div>
        </div>
      </div>

      {/* Product Lines Grid */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((line, index) => (
              <ProductLineCard
                key={line.productLine}
                name={line.productLine}
                description={line.textDescription}
                image={line.imageBase64}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
