"use client";

import { motion } from "framer-motion";

import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Analytics() {
    const monthlyData = [
        { month: 'Jan', revenue: 65000, orders: 245, customers: 189 },
        { month: 'Feb', revenue: 78000, orders: 298, customers: 234 },
        { month: 'Mar', revenue: 92000, orders: 356, customers: 289 },
        { month: 'Apr', revenue: 88000, orders: 334, customers: 267 },
        { month: 'May', revenue: 105000, orders: 421, customers: 345 },
        { month: 'Jun', revenue: 124500, orders: 512, customers: 398 }
    ];

    const categoryData = [
        { name: 'Chai', value: 35, color: '#C6A769' },
        { name: 'Coffee', value: 28, color: '#8B7355' },
        { name: 'Bakery', value: 18, color: '#D4B896' },
        { name: 'Bun Maska', value: 12, color: '#A68A64' },
        { name: 'Others', value: 7, color: '#E8D5B7' }
    ];

    const topProducts = [
        { name: 'Masala Chai', sales: 1250, revenue: 187500 },
        { name: 'Cappuccino', sales: 980, revenue: 196000 },
        { name: 'Bun Maska', sales: 1560, revenue: 187200 },
        { name: 'Croissant', sales: 780, revenue: 140400 }
    ];

    return (

        <div className="p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-4xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    Analytics
                </h1>
                <p className="text-[#6E6257]">Detailed insights into your business performance</p>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Avg. Order Value', value: '₹243', icon: DollarSign, color: '#C6A769' },
                    { label: 'Total Customers', value: '2,340', icon: Users, color: '#8B7355' },
                    { label: 'Order Growth', value: '+24.3%', icon: TrendingUp, color: '#D4B896' },
                    { label: 'Repeat Rate', value: '68%', icon: ShoppingCart, color: '#A68A64' }
                ].map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${metric.color}15` }}>
                                <Icon className="w-6 h-6" style={{ color: metric.color }} />
                            </div>
                            <h3 className="text-3xl mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                {metric.value}
                            </h3>
                            <p className="text-[#6E6257] text-sm">{metric.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Revenue Trend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                >
                    <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        Revenue Trend
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EFE7DA" />
                            <XAxis dataKey="month" stroke="#6E6257" />
                            <YAxis stroke="#6E6257" />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#C6A769" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Category Distribution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                >
                    <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        Sales by Category
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                outerRadius={100}
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Top Products */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
            >
                <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    Top Performing Products
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topProducts}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#EFE7DA" />
                        <XAxis dataKey="name" stroke="#6E6257" />
                        <YAxis stroke="#6E6257" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#C6A769" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="revenue" fill="#8B7355" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>

    );
}
