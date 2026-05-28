"use client";

import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Luxury Lane', 'Mumbai, India 400001']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 123 456 7890', '+91 987 654 3210']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@artisanchai.com', 'support@artisanchai.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 7:00 AM - 10:00 PM', 'Sat - Sun: 8:00 AM - 11:00 PM']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Get in Touch</p>
            <h1 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Contact Us
            </h1>
            <p className="text-[#6E6257] text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              <h2 className="text-3xl mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1E1B18] mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1E1B18] mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    placeholder="+91 123 456 7890"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-7 h-7 text-[#C6A769]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-[#6E6257]">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#EFE7DA] rounded-2xl h-64 flex items-center justify-center"
              >
                <p className="text-[#6E6257]">Map View</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
