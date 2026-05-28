"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import AdminLayout from '@/components/AdminLayout';
import Button from '@/components/Button';
import { Search, Filter, Eye, Printer } from 'lucide-react';

export default function OrdersManagement() {
    const [filterStatus, setFilterStatus] = useState('All');

    const orders = [
        { id: '#1234', customer: 'Priya Sharma', date: '2026-05-27', amount: 620, status: 'Completed', items: 3 },
        { id: '#1233', customer: 'Rahul Mehta', date: '2026-05-27', amount: 450, status: 'Processing', items: 2 },
        { id: '#1232', customer: 'Ananya Patel', date: '2026-05-26', amount: 890, status: 'Completed', items: 5 },
        { id: '#1231', customer: 'Vikram Singh', date: '2026-05-26', amount: 340, status: 'Pending', items: 2 },
        { id: '#1230', customer: 'Neha Gupta', date: '2026-05-25', amount: 720, status: 'Completed', items: 4 },
        { id: '#1229', customer: 'Arjun Kumar', date: '2026-05-25', amount: 560, status: 'Cancelled', items: 3 }
    ];

    const statuses = ['All', 'Completed', 'Processing', 'Pending', 'Cancelled'];

    return (
        <AdminLayout>
            <div className="p-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        Orders Management
                    </h1>
                    <p className="text-[#6E6257]">Manage and track all customer orders</p>
                </motion.div>

                {/* Filters & Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-5 h-5 text-[#C6A769]" />
                            {statuses.map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilterStatus(status)}
                                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${filterStatus === status
                                        ? 'bg-[#C6A769] text-[#1E1B18]'
                                        : 'bg-[#F8F5F0] text-[#6E6257] hover:bg-[#EFE7DA]'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full lg:w-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6257]" />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="pl-10 pr-4 py-2 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors w-full lg:w-80"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Orders Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#F8F5F0]">
                                <tr>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Order ID</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Customer</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Date</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Items</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Amount</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Status</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b border-[#EFE7DA] hover:bg-[#F8F5F0] transition-colors">
                                        <td className="py-4 px-6 text-[#1E1B18]">{order.id}</td>
                                        <td className="py-4 px-6 text-[#1E1B18]">{order.customer}</td>
                                        <td className="py-4 px-6 text-[#6E6257]">{order.date}</td>
                                        <td className="py-4 px-6 text-[#6E6257]">{order.items} items</td>
                                        <td className="py-4 px-6 text-[#1E1B18]">₹{order.amount}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Completed'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Processing'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : order.status === 'Pending'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex gap-2">
                                                <button className="p-2 hover:bg-[#C6A769]/10 rounded-lg transition-colors">
                                                    <Eye className="w-4 h-4 text-[#C6A769]" />
                                                </button>
                                                <button className="p-2 hover:bg-[#C6A769]/10 rounded-lg transition-colors">
                                                    <Printer className="w-4 h-4 text-[#C6A769]" />
                                                </button>
                                            </div>
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
