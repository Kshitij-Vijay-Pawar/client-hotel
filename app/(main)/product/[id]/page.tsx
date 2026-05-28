"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImageWithFallback from '@/components/ImageWithFallback';
import ProductCard from '@/components/ProductCard';
import { Star, ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Regular');

  const product = {
    id: '1',
    name: 'Masala Chai Supreme',
    price: 150,
    category: 'Handcrafted Chai',
    image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?q=80&w=1080',
    description: 'Our signature masala chai is a perfect blend of premium Assam tea leaves, aromatic spices, and fresh milk. Each cup is handcrafted to perfection, delivering a rich, warming experience that embodies tradition and luxury.',
    rating: 4.9,
    reviews: 248,
    ingredients: ['Assam Tea Leaves', 'Cardamom', 'Ginger', 'Cinnamon', 'Fresh Milk', 'Premium Honey'],
    sizes: ['Small', 'Regular', 'Large'],
    benefits: [
      'Handcrafted with premium ingredients',
      'Rich in antioxidants',
      'Warming and energizing',
      'Perfect for any time of day'
    ]
  };

  const relatedProducts = [
    { id: '2', name: 'Ginger Chai', price: 130, category: 'Handcrafted Chai', image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?q=80&w=1080' },
    { id: '3', name: 'Cardamom Chai', price: 140, category: 'Handcrafted Chai', image: 'https://images.unsplash.com/photo-1563311977-d285756282dc?q=80&w=1080' },
    { id: '4', name: 'Signature Cappuccino', price: 200, category: 'Artisan Coffee', image: 'https://images.unsplash.com/photo-1574914629385-46448b767aec?q=80&w=1080' }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/products" className="inline-flex items-center gap-2 text-[#C6A769] hover:text-[#B8985A] transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg">
                  <Heart className="w-6 h-6 text-[#C6A769]" />
                </button>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-[#C6A769] uppercase tracking-[0.3em] mb-3">{product.category}</p>
              <h1 className="text-5xl mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                        ? 'fill-[#C6A769] text-[#C6A769]'
                        : 'text-[#EFE7DA]'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-[#6E6257]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-2xl mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                ₹{product.price}
              </p>

              <p className="text-[#6E6257] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-[#1E1B18] mb-3">Select Size</label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl transition-all duration-300 ${selectedSize === size
                        ? 'bg-[#C6A769] text-[#1E1B18] shadow-lg shadow-[#C6A769]/20'
                        : 'bg-white text-[#1E1B18] hover:bg-[#EFE7DA]'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-[#1E1B18] mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-white rounded-xl hover:bg-[#EFE7DA] transition-colors flex items-center justify-center text-xl"
                  >
                    −
                  </button>
                  <span className="text-2xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-white rounded-xl hover:bg-[#EFE7DA] transition-colors flex items-center justify-center text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-12">
                <Button variant="primary" size="lg" className="flex-1">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  Product Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#C6A769] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#6E6257]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 mb-24"
          >
            <h2 className="text-3xl mb-8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Premium Ingredients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#C6A769]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <p className="text-[#6E6257] text-sm">{ingredient}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
