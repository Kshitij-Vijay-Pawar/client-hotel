"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react';

export default function ProductListing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Chai', 'Coffee', 'Bakery', 'Bun Maska', 'Juices', 'Ice Cream'];

  const products = [
    { id: '1', name: 'Masala Chai Supreme', price: 150, category: 'Chai', image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?q=80&w=1080' },
    { id: '2', name: 'Ginger Chai', price: 130, category: 'Chai', image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?q=80&w=1080' },
    { id: '3', name: 'Cardamom Chai', price: 140, category: 'Chai', image: 'https://images.unsplash.com/photo-1563311977-d285756282dc?q=80&w=1080' },
    { id: '4', name: 'Signature Cappuccino', price: 200, category: 'Coffee', image: 'https://images.unsplash.com/photo-1574914629385-46448b767aec?q=80&w=1080' },
    { id: '5', name: 'Espresso Macchiato', price: 180, category: 'Coffee', image: 'https://images.unsplash.com/photo-1579265898841-79c7890d69cf?q=80&w=1080' },
    { id: '6', name: 'Flat White', price: 220, category: 'Coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1080' },
    { id: '7', name: 'Croissant Collection', price: 180, category: 'Bakery', image: 'https://images.unsplash.com/photo-1656237464012-7e22a14401ad?q=80&w=1080' },
    { id: '8', name: 'Danish Pastry', price: 160, category: 'Bakery', image: 'https://images.unsplash.com/photo-1736520537688-1f1f06b71605?q=80&w=1080' },
    { id: '9', name: 'Premium Bun Maska', price: 120, category: 'Bun Maska', image: 'https://images.unsplash.com/photo-1741092964333-887184621ebc?q=80&w=1080' },
    { id: '10', name: 'Butter Bun Classic', price: 100, category: 'Bun Maska', image: 'https://images.unsplash.com/photo-1741092966938-8c5db884477e?q=80&w=1080' },
    { id: '11', name: 'Fresh Orange Juice', price: 140, category: 'Juices', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1080' },
    { id: '12', name: 'Vanilla Ice Cream', price: 160, category: 'Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1080' }
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Our Collection</p>
            <h1 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Premium Products
            </h1>
            <p className="text-[#6E6257] text-lg max-w-2xl mx-auto">
              Discover our handcrafted selection of beverages and delicacies
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-[#C6A769]" />
              <span className="text-[#1E1B18]">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeCategory === category
                    ? 'bg-[#C6A769] text-[#1E1B18] shadow-lg shadow-[#C6A769]/20'
                    : 'bg-white text-[#1E1B18] hover:bg-[#EFE7DA]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6E6257] text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
