import Link from 'next/link';
import { Coffee, Heart, Star, Share2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1B18] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C6A769] to-[#B8985A] rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-[#1E1B18]" />
              </div>
              <span className="text-2xl tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                <span className="font-semibold">Artisan</span>
                <span className="text-[#C6A769]">Chai</span>
              </span>
            </Link>
            <p className="text-[#EFE7DA] mb-6 leading-relaxed">
              Experience the art of handcrafted chai and coffee. Premium quality, timeless elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#EFE7DA]/10 hover:bg-[#C6A769] rounded-full flex items-center justify-center transition-all duration-300 group">
                <Heart className="w-5 h-5 text-[#EFE7DA] group-hover:text-[#1E1B18]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#EFE7DA]/10 hover:bg-[#C6A769] rounded-full flex items-center justify-center transition-all duration-300 group">
                <Star className="w-5 h-5 text-[#EFE7DA] group-hover:text-[#1E1B18]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#EFE7DA]/10 hover:bg-[#C6A769] rounded-full flex items-center justify-center transition-all duration-300 group">
                <Share2 className="w-5 h-5 text-[#EFE7DA] group-hover:text-[#1E1B18]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About', 'Contact', 'Reservation'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Our Menu</h3>
            <ul className="space-y-3">
              {['Handcrafted Chai', 'Artisan Coffee', 'Fresh Bakery', 'Bun Maska', 'Fresh Juices', 'Ice Cream'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A769] flex-shrink-0 mt-1" />
                <span className="text-[#EFE7DA]">
                  123 Luxury Lane,<br />
                  Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C6A769] flex-shrink-0" />
                <a href="tel:+911234567890" className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C6A769] flex-shrink-0" />
                <a href="mailto:hello@artisanchai.com" className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                  hello@artisanchai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#EFE7DA]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#EFE7DA] text-sm">
              © 2026 ArtisanChai. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#EFE7DA] hover:text-[#C6A769] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
