import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Calendar, Clock, Users } from 'lucide-react';

export default function ReservationPage() {
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
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Book Your Table</p>
            <h1 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Reserve Your Experience
            </h1>
            <p className="text-[#6E6257] text-lg max-w-2xl mx-auto">
              Secure your table at Mumbai's finest café. Experience luxury dining at its best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <h2 className="text-3xl mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Reservation Details
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1E1B18] mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C6A769]" />
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1E1B18] mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C6A769]" />
                      Time
                    </label>
                    <select className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors">
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C6A769]" />
                    Number of Guests
                  </label>
                  <select className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1E1B18] mb-2">Special Requests (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F8F5F0] border border-transparent rounded-xl focus:outline-none focus:border-[#C6A769] transition-colors resize-none"
                    placeholder="Dietary restrictions, occasion, seating preference..."
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Reserve Table
                </Button>

                <p className="text-sm text-[#6E6257] text-center">
                  You'll receive a confirmation email shortly after booking
                </p>
              </form>
            </motion.div>

            {/* Information & Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=1080"
                  alt="Luxury dining"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-[#C6A769] to-[#B8985A] rounded-3xl p-8 text-[#1E1B18]">
                <h3 className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Reservation Policy
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1E1B18] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C6A769] text-xs">✓</span>
                    </div>
                    <span>Reservations are held for 15 minutes after the scheduled time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1E1B18] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C6A769] text-xs">✓</span>
                    </div>
                    <span>For groups of 6 or more, please call us directly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1E1B18] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C6A769] text-xs">✓</span>
                    </div>
                    <span>Cancellations must be made 24 hours in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1E1B18] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C6A769] text-xs">✓</span>
                    </div>
                    <span>Smart casual dress code recommended</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-[#EFE7DA]">
                    <span className="text-[#1E1B18]">Monday - Friday</span>
                    <span className="text-[#6E6257]">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#EFE7DA]">
                    <span className="text-[#1E1B18]">Saturday</span>
                    <span className="text-[#6E6257]">8:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#1E1B18]">Sunday</span>
                    <span className="text-[#6E6257]">8:00 AM - 11:00 PM</span>
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
