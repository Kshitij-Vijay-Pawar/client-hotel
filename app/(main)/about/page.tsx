"use client";

import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Award, Coffee, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '15+', label: 'Premium Products' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Coffee,
      title: 'Handcrafted Quality',
      description: 'Every beverage is meticulously prepared by skilled artisans using traditional methods.'
    },
    {
      icon: Award,
      title: 'Premium Ingredients',
      description: 'We source only the finest ingredients from trusted suppliers around the world.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building lasting relationships with our customers and creating a welcoming atmosphere.'
    },
    {
      icon: Heart,
      title: 'Passion & Tradition',
      description: 'Honoring chai traditions while innovating to create unforgettable experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1 className="text-5xl lg:text-7xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Where Tradition Meets
              <br />
              <span className="text-[#C6A769]">Luxury</span>
            </h1>
            <p className="text-[#6E6257] text-lg max-w-3xl mx-auto leading-relaxed">
              Founded in 2016, ArtisanChai has redefined the art of handcrafted beverages. We blend time-honored traditions with contemporary elegance to create an unparalleled experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=1920"
              alt="ArtisanChai café interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#1E1B18] to-[#3A3631] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl text-[#C6A769] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {stat.number}
                </div>
                <div className="text-[#EFE7DA]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1572982270699-473dfa34d7e7?q=80&w=1080"
                  alt="Café atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-[#6E6257] leading-relaxed">
                <p>
                  What began as a small passion project has evolved into Mumbai's most prestigious café destination. Our founder, inspired by generations of chai-making tradition, envisioned a space where heritage meets contemporary luxury.
                </p>
                <p>
                  Every cup we serve tells a story—of carefully selected tea leaves, aromatic spices, and the dedication of our master chai wallahs. We believe that exceptional quality should never be compromised, which is why we maintain the highest standards in everything we do.
                </p>
                <p>
                  Today, ArtisanChai stands as a testament to what happens when craftsmanship, quality, and passion converge. We're not just serving beverages; we're creating moments of joy, comfort, and connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Our Values</p>
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#C6A769]" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-[#6E6257] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Meet Our Team</p>
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              The Artisans Behind Your Cup
            </h2>
            <p className="text-[#6E6257] text-lg max-w-2xl mx-auto">
              Our talented team brings decades of combined experience in hospitality and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arjun Patel', role: 'Master Chai Wallah', image: 'https://images.unsplash.com/photo-1579265898841-79c7890d69cf?q=80&w=1080' },
              { name: 'Priya Sharma', role: 'Head Barista', image: 'https://images.unsplash.com/photo-1469631423273-6995642a6a40?q=80&w=1080' },
              { name: 'Vikram Singh', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1656237464012-7e22a14401ad?q=80&w=1080' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-[#C6A769]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
