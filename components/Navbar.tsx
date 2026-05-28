"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { ShoppingCart, Menu, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reservation', path: '/reservation' }
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F0]/80 backdrop-blur-xl border-b border-[#1E1B18]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C6A769] to-[#B8985A] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#C6A769]/30 transition-all duration-300">
                <Coffee className="w-6 h-6 text-[#1E1B18]" />
              </div>
              <span className="text-2xl tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                <span className="font-semibold text-[#1E1B18]">Artisan</span>
                <span className="text-[#C6A769]">Chai</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-2 transition-colors duration-300 ${
                    isActive(link.path) ? 'text-[#C6A769]' : 'text-[#1E1B18] hover:text-[#C6A769]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C6A769]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative p-2 hover:bg-[#EFE7DA] rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-[#1E1B18]" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C6A769] text-[#1E1B18] text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              <div className="hidden lg:block">
                <Button variant="primary" size="sm">
                  Reserve Table
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-[#EFE7DA] rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1E1B18]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1E1B18]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-[#F8F5F0] border-b border-[#1E1B18]/5 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#C6A769] text-[#1E1B18]'
                      : 'text-[#1E1B18] hover:bg-[#EFE7DA]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Reserve Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
