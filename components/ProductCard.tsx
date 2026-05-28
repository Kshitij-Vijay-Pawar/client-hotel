import { motion } from "framer-motion";
import Link from 'next/link';
import ImageWithFallback from './ImageWithFallback';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#C6A769]/10 transition-all duration-500"
    >
      <Link href={`/products/${id}`}>
        <div className="aspect-square overflow-hidden bg-[#EFE7DA]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="p-6">
          <p className="text-xs text-[#C6A769] uppercase tracking-wider mb-2">{category}</p>
          <h3 className="text-xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl text-[#1E1B18]" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              ₹{price}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#C6A769] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#C6A769]/30 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                console.log('Add to cart:', id);
              }}
            >
              <ShoppingCart className="w-5 h-5 text-[#1E1B18]" />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
