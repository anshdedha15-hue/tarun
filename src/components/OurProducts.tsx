import { useState } from 'react';
import { Phone, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { PRODUCTS, FARM_INFO } from '../data/farmData';
import { ProductItem } from '../types';

interface OurProductsProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export default function OurProducts({ onSelectProductForEnquiry }: OurProductsProps) {
  const [filter, setFilter] = useState<'all' | 'milk' | 'ghee-butter' | 'curd-cream'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Products (7)' },
    { id: 'milk', label: 'Fresh Milk Varieties' },
    { id: 'ghee-butter', label: 'Ghee & Butter' },
    { id: 'curd-cream', label: 'Curd & Cream' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === 'milk') return product.id.includes('milk');
    if (filter === 'ghee-butter') return product.id === 'ghee' || product.id === 'butter';
    if (filter === 'curd-cream') return product.id === 'curd' || product.id === 'cream';
    return true;
  });

  const handleOrderClick = (product: ProductItem) => {
    onSelectProductForEnquiry(product.name);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            Our Products
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Pure & Fresh Dairy Products
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Freshly sourced from our healthy cows and buffaloes in Old Gardhi Mendu, Delhi. Handled with supreme cleanliness and available fresh every day.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image Box */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={product.image}
                  alt={`${product.name} from Choudhary Dairy Farm Delhi`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-emerald-900 text-xs font-bold tracking-wide shadow-xs">
                  {product.tag}
                </span>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-stone-900/70 text-stone-100 text-[11px] font-medium backdrop-blur-xs">
                  Daily Farm Fresh
                </span>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed min-h-[40px]">
                    {product.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="pt-2 space-y-1 text-xs text-stone-600">
                    {product.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-stone-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleOrderClick(product)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Enquire / Book Order</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-stone-500 px-1">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="text-stone-600 hover:text-emerald-800 font-semibold underline underline-offset-2 cursor-pointer"
                    >
                      View Details
                    </button>
                    <a
                      href={`tel:${FARM_INFO.phone}`}
                      className="text-emerald-800 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{FARM_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order Banner */}
        <div className="mt-12 rounded-3xl bg-emerald-800 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Need Fresh Milk Delivery or Farm Pickup?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Morning & Evening Milk Subscriptions in Old Gardhi Mendu & Delhi
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Call us directly at <strong>{FARM_INFO.phone}</strong> between 5:00 AM – 7:00 PM for daily supplies of pure Cow Milk, Buffalo Milk, Ghee, Butter and Curd.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="banner-call-btn"
              href={`tel:${FARM_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-emerald-900 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-800" />
              <span>Call {FARM_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/91${FARM_INFO.phone}?text=Hello%20Choudhary%20Dairy%20Farm,%20I%20am%20interested%20in%20your%20dairy%20products`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm border border-emerald-500 shadow-md transition-all flex items-center gap-2"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            <div className="relative aspect-16/10">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-sm hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {activeModalProduct.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
                  {activeModalProduct.name}
                </h3>
                <p className="text-stone-700 text-sm mt-2 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  Quality Assurance & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeModalProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                {activeModalProduct.unitHint && (
                  <p className="text-xs text-emerald-800 font-semibold mt-3 pt-2 border-t border-stone-200">
                    ℹ {activeModalProduct.unitHint}
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const prodName = activeModalProduct.name;
                    setActiveModalProduct(null);
                    handleOrderClick({ ...activeModalProduct, name: prodName });
                  }}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-colors text-center"
                >
                  Enquire About {activeModalProduct.name}
                </button>
                <a
                  href={`tel:${FARM_INFO.phone}`}
                  className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
