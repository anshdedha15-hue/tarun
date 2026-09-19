import { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, MapPin } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

interface NavbarProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if current time in IST is within 5:00 AM - 7:00 PM
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        // Convert to India Standard Time (UTC+5:30)
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const istDate = new Date(utc + 3600000 * 5.5);
        const hours = istDate.getHours();
        setIsOpenNow(hours >= 5 && hours < 19);
      } catch {
        setIsOpenNow(true);
      }
    };
    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Cow & Buffalo Breeds', href: '#breeds' },
    { name: 'Feed & Fodder', href: '#feed-fodder' },
    { name: 'Farm Infrastructure', href: '#infrastructure' },
    { name: 'Opening Hours', href: '#opening-hours' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner for Delhi local identity & quick contact */}
      <div className="bg-[#1b4332] text-[#f4efe6] text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Old Gardhi Mendu, Delhi, India
            </span>
            <span className="hidden md:inline-block text-emerald-700">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Daily: 5:00 AM – 7:00 PM
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-700/50">
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {isOpenNow ? 'Open Now' : 'Opens at 5:00 AM'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="top-call-btn"
              href={`tel:${FARM_INFO.phone}`}
              className="flex items-center gap-1.5 font-semibold text-emerald-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {FARM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-stone-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Farm Branding */}
          <a href="#home" id="brand-logo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:bg-emerald-800 transition-colors">
              C
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                Choudhary Dairy Farm
              </span>
              <span className="block text-[11px] text-emerald-800 font-medium tracking-wide">
                Fresh Milk & Pure Dairy • Delhi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-emerald-800 hover:bg-emerald-50/80 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to action button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-quick-call-btn"
              href={`tel:${FARM_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{FARM_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={`tel:${FARM_INFO.phone}`}
              className="sm:hidden p-2 text-emerald-700 bg-emerald-50 rounded-lg"
              aria-label="Call Farm"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-700 hover:text-emerald-800 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-t border-stone-200 px-4 pt-3 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-stone-800 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 mt-2 space-y-2">
              <a
                href={`tel:${FARM_INFO.phone}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-700 text-white font-bold text-sm rounded-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Call {FARM_INFO.phone}</span>
              </a>
              <div className="text-center text-xs text-stone-500 py-1">
                Old Gardhi Mendu, Delhi • 5:00 AM – 7:00 PM
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
