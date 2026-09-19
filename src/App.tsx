import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import BreedsSection from './components/BreedsSection';
import FeedFodder from './components/FeedFodder';
import Infrastructure from './components/Infrastructure';
import OpeningHoursSection from './components/OpeningHoursSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { FARM_INFO } from './data/farmData';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleViewProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProductForEnquiry = (productName: string) => {
    setSelectedProduct(productName);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Primary Navigation */}
      <Navbar onSelectProductForEnquiry={handleSelectProductForEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onViewProducts={handleViewProducts} onContactUs={handleContactUs} />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Our Products Section */}
        <OurProducts onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* 4. Cow & Buffalo Breeds Section */}
        <BreedsSection />

        {/* 5. Feed & Fodder Section */}
        <FeedFodder />

        {/* 6. Farm Infrastructure Section */}
        <Infrastructure />

        {/* 7. Opening Hours Section */}
        <OpeningHoursSection />

        {/* 8. Contact Us & Enquiry Form Section */}
        <ContactSection
          selectedProduct={selectedProduct}
          onClearSelectedProduct={() => setSelectedProduct('')}
        />
      </main>

      {/* Footer */}
      <Footer onSelectProductForEnquiry={handleSelectProductForEnquiry} />

      {/* Floating Sticky Mobile Quick Action Bar */}
      <aside aria-label="Quick contact actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-3">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${FARM_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs"
        >
          <Phone className="w-4 h-4" />
          <span>Call {FARM_INFO.phone}</span>
        </a>

        <a
          id="mobile-sticky-whatsapp-btn"
          href={`https://wa.me/91${FARM_INFO.phone}?text=Hello%20Choudhary%20Dairy%20Farm,%20I%20would%20like%20to%20order%20dairy%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
