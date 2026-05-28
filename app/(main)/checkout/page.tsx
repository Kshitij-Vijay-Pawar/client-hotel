"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { CreditCard, Wallet, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');

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
              Checkout
            </h1>
            <p className="text-[#6E6257]">Complete your order</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Delivery Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1E1B18] mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1E1B18] mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[#1E1B18] mb-2">Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1E1B18] mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1E1B18] mb-2">Postal Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[#1E1B18] mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Payment Method
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${paymentMethod === 'card'
                      ? 'border-[#C6A769] bg-[#C6A769]/5'
                      : 'border-[#EFE7DA] hover:border-[#C6A769]/50'
                      }`}
                  >
                    <CreditCard className="w-8 h-8 text-[#C6A769] mb-3" />
                    <p className="text-[#1E1B18]">Credit/Debit Card</p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${paymentMethod === 'upi'
                      ? 'border-[#C6A769] bg-[#C6A769]/5'
                      : 'border-[#EFE7DA] hover:border-[#C6A769]/50'
                      }`}
                  >
                    <Wallet className="w-8 h-8 text-[#C6A769] mb-3" />
                    <p className="text-[#1E1B18]">UPI / Wallet</p>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#1E1B18] mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#1E1B18] mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1E1B18] mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div>
                    <label className="block text-[#1E1B18] mb-2">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                )}
              </motion.div>
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
                    <span>₹620</span>
                  </div>
                  <div className="flex justify-between text-[#6E6257]">
                    <span>Tax</span>
                    <span>₹31</span>
                  </div>
                  <div className="flex justify-between text-[#6E6257]">
                    <span>Delivery</span>
                    <span>₹50</span>
                  </div>
                  <div className="border-t border-[#EFE7DA] pt-4">
                    <div className="flex justify-between text-xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                      <span>Total</span>
                      <span className="text-[#C6A769]">₹701</span>
                    </div>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  <CheckCircle className="w-5 h-5" />
                  Place Order
                </Button>

                <div className="mt-6 p-4 bg-[#F8F5F0] rounded-xl">
                  <p className="text-sm text-[#6E6257] text-center">
                    Your payment information is secure and encrypted
                  </p>
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
