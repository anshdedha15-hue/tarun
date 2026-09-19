import { Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';
import { FARM_INFO, PRODUCTS } from '../data/farmData';

interface FooterProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

export default function Footer({ onSelectProductForEnquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Cow & Buffalo Breeds', href: '#breeds' },
    { name: 'Feed & Fodder', href: '#feed-fodder' },
    { name: 'Farm Infrastructure', href: '#infrastructure' },
    { name: 'Opening Hours', href: '#opening-hours' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleProductLinkClick = (name: string) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(name);
    }
  };

  return (
    <footer className="bg-[#14281D] text-[#E8ECE9] pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Farm Brand & Summary (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-xl shadow-xs">
                C
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                {FARM_INFO.name}
              </span>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Fresh milk and quality dairy products produced with proper animal care, nutritious feed, hygiene and responsible dairy farming practices in Old Gardhi Mendu, Delhi.
            </p>

            <div className="pt-2 text-xs text-emerald-300/90 space-y-1">
              <p>✓ Fresh Milk in Delhi</p>
              <p>✓ Cow Milk & Buffalo Milk</p>
              <p>✓ 100% Adulteration-Free Guarantee</p>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-emerald-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Our Fresh Products
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#contact"
                    onClick={() => handleProductLinkClick(prod.name)}
                    className="text-stone-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Order →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Timing Info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contact & Location
            </h4>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{FARM_INFO.name}</p>
                  <p>{FARM_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${FARM_INFO.phone}`}
                  className="font-bold text-emerald-300 hover:text-white hover:underline text-sm"
                >
                  {FARM_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Opening Hours:</p>
                  <p className="text-emerald-300 font-semibold">{FARM_INFO.openingHours}</p>
                  <p className="text-[11px] text-stone-400">Open Daily (Monday – Sunday)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Keywords Strip */}
        <div className="py-6 border-b border-emerald-900/40 text-[11px] text-stone-400 leading-relaxed flex flex-wrap gap-x-4 gap-y-1.5 justify-center">
          <span className="text-emerald-400 font-semibold">Local Dairy Services:</span>
          <span>Dairy Farm in Delhi</span>
          <span>•</span>
          <span>Fresh Milk</span>
          <span>•</span>
          <span>Cow Milk</span>
          <span>•</span>
          <span>Buffalo Milk</span>
          <span>•</span>
          <span>Fresh Dairy Products</span>
          <span>•</span>
          <span>Choudhary Dairy Farm</span>
          <span>•</span>
          <span>Dairy Farm Old Gardhi Mendu</span>
          <span>•</span>
          <span>Fresh Milk in Delhi</span>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {FARM_INFO.name}. All rights reserved. Old Gardhi Mendu, Delhi, India.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Committed to animal care & pure nutrition <Heart className="w-3 h-3 text-red-400 inline" />
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-stone-200 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
