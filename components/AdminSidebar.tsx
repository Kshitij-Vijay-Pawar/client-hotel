"use client";
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  BarChart3,
  Users,
  Archive,
  Coffee,
  LogOut
} from 'lucide-react';

export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
    { path: '/admin/products', icon: Package, label: 'Products' },
    { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/admin/customers', icon: Users, label: 'Customers' },
    { path: '/admin/inventory', icon: Archive, label: 'Inventory' }
  ];

  const isActive = (path: string) => location === path;

  return (
    <aside className="w-64 bg-white border-r border-[#1E1B18]/10 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#1E1B18]/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#C6A769] to-[#B8985A] rounded-full flex items-center justify-center">
            <Coffee className="w-6 h-6 text-[#1E1B18]" />
          </div>
          <div>
            <span className="text-xl tracking-tight block" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              <span className="font-semibold text-[#1E1B18]">Artisan</span>
              <span className="text-[#C6A769]">Chai</span>
            </span>
            <span className="text-xs text-[#6E6257]">Admin Panel</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <div className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${active
                      ? 'bg-[#C6A769] text-[#1E1B18] shadow-lg shadow-[#C6A769]/20'
                      : 'text-[#6E6257] hover:bg-[#F8F5F0]'
                    }`}>
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {active && (
                      <motion.div
                        layoutId="admin-sidebar-indicator"
                        className="absolute left-0 w-1 h-8 bg-[#1E1B18] rounded-r-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#1E1B18]/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-[#6E6257] hover:bg-[#F8F5F0] rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
