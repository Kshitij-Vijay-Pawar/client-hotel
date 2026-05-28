import { motion } from "framer-motion";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Star, Coffee, Award, Clock, Quote } from 'lucide-react';

export default function LandingPage() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Masala Chai Supreme',
      price: 150,
      category: 'Handcrafted Chai',
      image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: '2',
      name: 'Signature Cappuccino',
      price: 200,
      category: 'Artisan Coffee',
      image: 'https://images.unsplash.com/photo-1574914629385-46448b767aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: '3',
      name: 'Croissant Collection',
      price: 180,
      category: 'Fresh Bakery',
      image: 'https://images.unsplash.com/photo-1656237464012-7e22a14401ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: '4',
      name: 'Premium Bun Maska',
      price: 120,
      category: 'Bun Maska',
      image: 'https://images.unsplash.com/photo-1741092964333-887184621ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Regular Customer',
      text: 'The finest chai I have ever tasted. Every visit feels like a luxury experience.',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      role: 'Coffee Enthusiast',
      text: 'Exceptional quality and ambiance. The attention to detail is remarkable.',
      rating: 5
    },
    {
      name: 'Ananya Patel',
      role: 'Food Blogger',
      text: 'A perfect blend of tradition and luxury. Their bun maska is legendary!',
      rating: 5
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1542181961-9590d0c79dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1561336526-2914f13ceb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1536782896453-61d09f3aaf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Luxury café interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B18]/80 via-[#1E1B18]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#C6A769] uppercase tracking-[0.3em] mb-6"
            >
              Handcrafted Excellence
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl mb-6 leading-[1.1]"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Where Tradition
              <br />
              Meets <span className="text-[#C6A769]">Luxury</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#EFE7DA] mb-8 leading-relaxed max-w-2xl"
            >
              Experience the finest handcrafted chai and artisan coffee in an atmosphere of timeless elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg">
                Explore Menu
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1E1B18]">
                Reserve Table
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Our Signature Collection</p>
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Featured Selections
            </h2>
            <p className="text-[#6E6257] text-lg max-w-2xl mx-auto">
              Meticulously crafted beverages and delicacies that define excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakery Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Fresh Daily</p>
              <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Artisan Bakery
              </h2>
              <p className="text-[#6E6257] text-lg mb-8 leading-relaxed">
                Every morning, our master bakers craft fresh pastries, breads, and desserts using time-honored techniques and premium ingredients.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#C6A769]" />
                  </div>
                  <p className="text-sm text-[#6E6257]">Award Winning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Coffee className="w-8 h-8 text-[#C6A769]" />
                  </div>
                  <p className="text-sm text-[#6E6257]">Fresh Daily</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-[#C6A769]" />
                  </div>
                  <p className="text-sm text-[#6E6257]">Traditional</p>
                </div>
              </div>
              <Button variant="primary">View Bakery Menu</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1536782896453-61d09f3aaf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Artisan bakery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#C6A769]/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bun Maska Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1741092964333-887184621ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Fresh bun maska"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl mt-12">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1741092966938-8c5db884477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Artisan bread"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Mumbai's Finest</p>
              <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Premium Bun Maska
              </h2>
              <p className="text-[#6E6257] text-lg mb-8 leading-relaxed">
                A Mumbai classic elevated to perfection. Soft, buttery buns paired with our signature chai create an unforgettable experience.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#C6A769] flex-shrink-0" />
                  <div>
                    <p className="text-[#1E1B18] italic mb-2">
                      "The perfect balance of tradition and refinement. Simply exceptional."
                    </p>
                    <p className="text-[#C6A769] text-sm">— Chef Vinay Kumar</p>
                  </div>
                </div>
              </div>
              <Button variant="primary">Order Now</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-gradient-to-br from-[#1E1B18] to-[#3A3631] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Customer Favorites</p>
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Best Sellers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Masala Chai', orders: '2.5K+', icon: '🫖' },
              { name: 'Cappuccino', orders: '1.8K+', icon: '☕' },
              { name: 'Bun Maska', orders: '3.2K+', icon: '🥐' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {item.name}
                </h3>
                <p className="text-[#C6A769] text-lg">{item.orders} orders this month</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Testimonials</p>
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              What Our Guests Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#C6A769]/10 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C6A769] text-[#C6A769]" />
                  ))}
                </div>
                <p className="text-[#1E1B18] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-[#1E1B18]">{testimonial.name}</p>
                  <p className="text-[#6E6257] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-4">Experience</p>
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 bg-gradient-to-r from-[#C6A769] to-[#B8985A] text-[#1E1B18]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Reserve Your Table
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience luxury dining at its finest. Book your exclusive table today.
            </p>
            <Link href="/reservation">
              <Button variant="secondary" size="lg" className="bg-[#1E1B18] text-white hover:bg-[#1E1B18]/90">
                Make a Reservation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
