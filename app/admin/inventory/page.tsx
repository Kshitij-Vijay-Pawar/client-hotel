"use client";

import { motion } from "framer-motion";
import AdminLayout from '@/components/AdminLayout';
import Button from '@/components/Button';
import { AlertTriangle, Package, TrendingDown, Plus } from 'lucide-react';

export default function InventoryManagement() {
    const inventory = [
        { id: '1', item: 'Assam Tea Leaves', category: 'Ingredients', stock: 45, unit: 'kg', minStock: 50, status: 'Low', lastUpdated: '2026-05-27' },
        { id: '2', item: 'Coffee Beans', category: 'Ingredients', stock: 125, unit: 'kg', minStock: 30, status: 'Good', lastUpdated: '2026-05-26' },
        { id: '3', item: 'Fresh Milk', category: 'Dairy', stock: 180, unit: 'liters', minStock: 100, status: 'Good', lastUpdated: '2026-05-27' },
        { id: '4', item: 'Croissants', category: 'Bakery', stock: 12, unit: 'pcs', minStock: 30, status: 'Critical', lastUpdated: '2026-05-27' },
        { id: '5', item: 'Cardamom', category: 'Spices', stock: 8, unit: 'kg', minStock: 10, status: 'Low', lastUpdated: '2026-05-25' },
        { id: '6', item: 'Honey', category: 'Sweeteners', stock: 65, unit: 'kg', minStock: 20, status: 'Good', lastUpdated: '2026-05-26' },
        { id: '7', item: 'Butter', category: 'Dairy', stock: 22, unit: 'kg', minStock: 25, status: 'Low', lastUpdated: '2026-05-27' },
        { id: '8', item: 'Paper Cups', category: 'Supplies', stock: 850, unit: 'pcs', minStock: 500, status: 'Good', lastUpdated: '2026-05-24' }
    ];

    const criticalItems = inventory.filter(item => item.status === 'Critical');
    const lowStockItems = inventory.filter(item => item.status === 'Low');

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
                            Inventory Management
                        </h1>
                        <p className="text-[#6E6257]">Track and manage your stock levels</p>
                    </div>
                    <Button variant="primary">
                        <Plus className="w-5 h-5" />
                        Add Item
                    </Button>
                </motion.div>

                {/* Alerts */}
                {(criticalItems.length > 0 || lowStockItems.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {criticalItems.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border-2 border-red-200 rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <AlertTriangle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg mb-2 text-red-900" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                            Critical Stock Alert
                                        </h3>
                                        <p className="text-red-700 mb-2">{criticalItems.length} items critically low</p>
                                        <ul className="text-sm text-red-600">
                                            {criticalItems.map(item => (
                                                <li key={item.id}>• {item.item}: {item.stock} {item.unit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {lowStockItems.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <TrendingDown className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg mb-2 text-yellow-900" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                            Low Stock Warning
                                        </h3>
                                        <p className="text-yellow-700 mb-2">{lowStockItems.length} items running low</p>
                                        <ul className="text-sm text-yellow-600">
                                            {lowStockItems.map(item => (
                                                <li key={item.id}>• {item.item}: {item.stock} {item.unit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Items', value: inventory.length.toString() },
                        { label: 'Critical', value: criticalItems.length.toString(), color: 'text-red-600' },
                        { label: 'Low Stock', value: lowStockItems.length.toString(), color: 'text-yellow-600' },
                        { label: 'Good Stock', value: inventory.filter(i => i.status === 'Good').length.toString(), color: 'text-green-600' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Package className="w-5 h-5 text-[#C6A769]" />
                                <h3 className={`text-3xl ${stat.color || 'text-[#C6A769]'}`} style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                    {stat.value}
                                </h3>
                            </div>
                            <p className="text-[#6E6257]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Inventory Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#F8F5F0]">
                                <tr>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Item Name</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Category</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Current Stock</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Min. Stock</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Status</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Last Updated</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map((item) => (
                                    <tr key={item.id} className="border-b border-[#EFE7DA] hover:bg-[#F8F5F0] transition-colors">
                                        <td className="py-4 px-6 text-[#1E1B18]">{item.item}</td>
                                        <td className="py-4 px-6 text-[#6E6257]">{item.category}</td>
                                        <td className="py-4 px-6 text-[#1E1B18]">
                                            {item.stock} {item.unit}
                                        </td>
                                        <td className="py-4 px-6 text-[#6E6257]">
                                            {item.minStock} {item.unit}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-sm ${item.status === 'Good'
                                                ? 'bg-green-100 text-green-700'
                                                : item.status === 'Low'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-[#6E6257]">{item.lastUpdated}</td>
                                        <td className="py-4 px-6">
                                            <Button variant="outline" size="sm">
                                                Restock
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </AdminLayout>
    );
}
