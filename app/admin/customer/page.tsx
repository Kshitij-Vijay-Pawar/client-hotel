import { motion } from "framer-motion";
import AdminLayout from '@/components/AdminLayout';
import { Search, Mail, Phone, Eye } from 'lucide-react';

export default function CustomerManagement() {
    const customers = [
        { id: '1', name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43210', orders: 24, spent: 18600, joined: '2025-12-15', status: 'VIP' },
        { id: '2', name: 'Rahul Mehta', email: 'rahul@example.com', phone: '+91 98765 43211', orders: 18, spent: 14200, joined: '2026-01-20', status: 'Regular' },
        { id: '3', name: 'Ananya Patel', email: 'ananya@example.com', phone: '+91 98765 43212', orders: 32, spent: 24800, joined: '2025-11-08', status: 'VIP' },
        { id: '4', name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 98765 43213', orders: 12, spent: 9400, joined: '2026-02-14', status: 'Regular' },
        { id: '5', name: 'Neha Gupta', email: 'neha@example.com', phone: '+91 98765 43214', orders: 8, spent: 6200, joined: '2026-03-22', status: 'New' },
        { id: '6', name: 'Arjun Kumar', email: 'arjun@example.com', phone: '+91 98765 43215', orders: 28, spent: 21600, joined: '2025-10-30', status: 'VIP' }
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
                        Customer Management
                    </h1>
                    <p className="text-[#6E6257]">View and manage your customer database</p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Customers', value: '2,340' },
                        { label: 'VIP Customers', value: '156' },
                        { label: 'New This Month', value: '89' },
                        { label: 'Avg. Lifetime Value', value: '₹12,450' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm"
                        >
                            <h3 className="text-3xl mb-1 text-[#C6A769]" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                {stat.value}
                            </h3>
                            <p className="text-[#6E6257]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-sm mb-8"
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6257]" />
                        <input
                            type="text"
                            placeholder="Search customers by name, email, or phone..."
                            className="pl-10 pr-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors w-full"
                        />
                    </div>
                </motion.div>

                {/* Customers Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#F8F5F0]">
                                <tr>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Customer</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Contact</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Orders</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Total Spent</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Joined</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Status</th>
                                    <th className="text-left py-4 px-6 text-[#1E1B18]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="border-b border-[#EFE7DA] hover:bg-[#F8F5F0] transition-colors">
                                        <td className="py-4 px-6">
                                            <div>
                                                <p className="text-[#1E1B18]">{customer.name}</p>
                                                <p className="text-sm text-[#6E6257]">{customer.email}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-[#6E6257]">
                                                    <Mail className="w-4 h-4" />
                                                    <span>Email</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-[#6E6257]">
                                                    <Phone className="w-4 h-4" />
                                                    <span>{customer.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-[#1E1B18]">{customer.orders}</td>
                                        <td className="py-4 px-6 text-[#1E1B18]">₹{customer.spent}</td>
                                        <td className="py-4 px-6 text-[#6E6257]">{customer.joined}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-sm ${customer.status === 'VIP'
                                                ? 'bg-[#C6A769]/20 text-[#C6A769]'
                                                : customer.status === 'Regular'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-green-100 text-green-700'
                                                }`}>
                                                {customer.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <button className="p-2 hover:bg-[#C6A769]/10 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4 text-[#C6A769]" />
                                            </button>
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
