import { motion } from "framer-motion";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const cartItems = [
    {
      id: '1',
      name: 'Masala Chai Supreme',
      price: 150,
      quantity: 2,
      size: 'Regular',
      image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?q=80&w=400'
    },
    {
      id: '2',
      name: 'Signature Cappuccino',
      price: 200,
      quantity: 1,
      size: 'Large',
      image: 'https://images.unsplash.com/photo-1574914629385-46448b767aec?q=80&w=400'
    },
    {
      id: '3',
      name: 'Premium Bun Maska',
      price: 120,
      quantity: 3,
      size: 'Regular',
      image: 'https://images.unsplash.com/photo-1741092964333-887184621ebc?q=80&w=400'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const delivery = 50;
  const total = subtotal + tax + delivery;

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl lg:text-6xl mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Shopping Cart
            </h1>
            <p className="text-[#6E6257]">{cartItems.length} items in your cart</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-[#EFE7DA] flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="text-xl mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                            {item.name}
                          </h3>
                          <p className="text-[#6E6257] text-sm">Size: {item.size}</p>
                        </div>
                        <button className="text-[#6E6257] hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button className="w-8 h-8 bg-[#EFE7DA] rounded-lg hover:bg-[#C6A769] hover:text-white transition-colors flex items-center justify-center">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button className="w-8 h-8 bg-[#EFE7DA] rounded-lg hover:bg-[#C6A769] hover:text-white transition-colors flex items-center justify-center">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-2xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-32">
                <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#6E6257]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#6E6257]">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-[#6E6257]">
                    <span>Delivery</span>
                    <span>₹{delivery}</span>
                  </div>
                  <div className="border-t border-[#EFE7DA] pt-4">
                    <div className="flex justify-between text-xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      <span>Total</span>
                      <span className="text-[#C6A769]">₹{total}</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button variant="primary" size="lg" className="w-full mb-4">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <Link href="/products">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Promo Code */}
                <div className="mt-8 pt-8 border-t border-[#EFE7DA]">
                  <label className="block text-[#1E1B18] mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                    <Button variant="secondary">Apply</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
