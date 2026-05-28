import { motion } from "framer-motion";
import AdminLayout from '@/components/AdminLayout';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
    const stats = [
        {
            label: 'Total Revenue',
            value: '₹1,24,500',
            change: '+12.5%',
            trend: 'up',
            icon: DollarSign,
            color: '#C6A769'
        },
        {
            label: 'Total Orders',
            value: '856',
            change: '+8.3%',
            trend: 'up',
            icon: ShoppingCart,
            color: '#8B7355'
        },
        {
            label: 'Customers',
            value: '2,340',
            change: '+15.2%',
            trend: 'up',
            icon: Users,
            color: '#D4B896'
        },
        {
            label: 'Products',
            value: '45',
            change: '-2.4%',
            trend: 'down',
            icon: Package,
            color: '#A68A64'
        }
    ];

    const revenueData = [
        { month: 'Jan', revenue: 65000 },
        { month: 'Feb', revenue: 78000 },
        { month: 'Mar', revenue: 92000 },
        { month: 'Apr', revenue: 88000 },
        { month: 'May', revenue: 105000 },
        { month: 'Jun', revenue: 124500 }
    ];

    const productData = [
        { name: 'Chai', sales: 450 },
        { name: 'Coffee', sales: 320 },
        { name: 'Bakery', sales: 280 },
        { name: 'Bun Maska', sales: 380 },
        { name: 'Juices', sales: 150 },
        { name: 'Ice Cream', sales: 200 }
    ];

    const recentOrders = [
        { id: '#1234', customer: 'Priya Sharma', amount: 620, status: 'Completed', time: '2 mins ago' },
        { id: '#1233', customer: 'Rahul Mehta', amount: 450, status: 'Processing', time: '15 mins ago' },
        { id: '#1232', customer: 'Ananya Patel', amount: 890, status: 'Completed', time: '1 hour ago' },
        { id: '#1231', customer: 'Vikram Singh', amount: 340, status: 'Pending', time: '2 hours ago' }
    ];

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
                        Dashboard
                    </h1>
                    <p className="text-[#6E6257]">Welcome back! Here's what's happening today.</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                                        <Icon className="w-6 h-6" style={{ color: stat.color }} />
                                    </div>
                                    <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {stat.trend === 'up' ? (
                                            <TrendingUp className="w-4 h-4" />
                                        ) : (
                                            <TrendingDown className="w-4 h-4" />
                                        )}
                                        <span>{stat.change}</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                    {stat.value}
                                </h3>
                                <p className="text-[#6E6257] text-sm">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Revenue Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                        <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                            Revenue Overview
                        </h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#EFE7DA" />
                                <XAxis dataKey="month" stroke="#6E6257" />
                                <YAxis stroke="#6E6257" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #EFE7DA',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#C6A769"
                                    strokeWidth={3}
                                    dot={{ fill: '#C6A769', r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Product Sales Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                        <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                            Product Sales
                        </h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={productData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#EFE7DA" />
                                <XAxis dataKey="name" stroke="#6E6257" />
                                <YAxis stroke="#6E6257" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #EFE7DA',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Bar dataKey="sales" fill="#C6A769" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>

                {/* Recent Orders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                >
                    <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        Recent Orders
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#EFE7DA]">
                                    <th className="text-left py-3 px-4 text-[#6E6257]">Order ID</th>
                                    <th className="text-left py-3 px-4 text-[#6E6257]">Customer</th>
                                    <th className="text-left py-3 px-4 text-[#6E6257]">Amount</th>
                                    <th className="text-left py-3 px-4 text-[#6E6257]">Status</th>
                                    <th className="text-left py-3 px-4 text-[#6E6257]">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="border-b border-[#EFE7DA] hover:bg-[#F8F5F0] transition-colors">
                                        <td className="py-4 px-4 text-[#1E1B18]">{order.id}</td>
                                        <td className="py-4 px-4 text-[#1E1B18]">{order.customer}</td>
                                        <td className="py-4 px-4 text-[#1E1B18]">₹{order.amount}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Completed'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Processing'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-[#6E6257]">{order.time}</td>
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
