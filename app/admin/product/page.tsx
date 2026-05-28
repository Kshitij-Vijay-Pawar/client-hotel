"use client";

import { motion } from "framer-motion";
import AdminLayout from '@/components/AdminLayout';
import Button from '@/components/Button';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function ProductManagement() {
    const products = [
        { id: '1', name: 'Masala Chai Supreme', category: 'Chai', price: 150, stock: 125, status: 'Active', image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?q=80&w=200' },
        { id: '2', name: 'Signature Cappuccino', category: 'Coffee', price: 200, stock: 89, status: 'Active', image: 'https://images.unsplash.com/photo-1574914629385-46448b767aec?q=80&w=200' },
        { id: '3', name: 'Croissant Collection', category: 'Bakery', price: 180, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1656237464012-7e22a14401ad?q=80&w=200' },
        { id: '4', name: 'Premium Bun Maska', category: 'Bun Maska', price: 120, stock: 5, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1741092964333-887184621ebc?q=80&w=200' },
        { id: '5', name: 'Ginger Chai', category: 'Chai', price: 130, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?q=80&w=200' }
    ];

    return (
        <AdminLayout>
            <div className="p-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8"
                >
                    <div>
                        <h1 className="text-4xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                            Product Management
                        </h1>
                        <p className="text-[#6E6257]">Manage your café products and inventory</p>
                    </div>
                    <Button variant="primary">
                        <Plus className="w-5 h-5" />
                        Add Product
                    </Button>
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm mb-8"
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6257]" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors w-full"
                        />
                    </div>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="aspect-video bg-[#EFE7DA]">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-xs text-[#C6A769] uppercase tracking-wider mb-1">{product.category}</p>
                                        <h3 className="text-xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                            {product.name}
                                        </h3>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs ${product.status === 'Active'
                                        ? 'bg-green-100 text-green-700'
                                        : product.status === 'Low Stock'
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {product.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-2xl text-[#C6A769]">₹{product.price}</p>
                                    <p className="text-[#6E6257]">Stock: {product.stock}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Edit className="w-4 h-4" />
                                        Edit
                                    </Button>
                                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}