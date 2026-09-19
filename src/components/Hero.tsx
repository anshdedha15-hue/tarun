import { ArrowRight, Phone, ShieldCheck, Heart, Sparkles, Sprout } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

interface HeroProps {
  onViewProducts: () => void;
  onContactUs: () => void;
}

export default function Hero({ onViewProducts, onContactUs }: HeroProps) {
  const highlights = [
    {
      title: 'Fresh Milk',
      subtitle: 'Pure daily morning & evening batches',
      icon: Sparkles,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      title: 'Hygienic Animal Care',
      subtitle: 'Sanitized sheds & veterinarian monitored',
      icon: Heart,
      color: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      title: 'Nutritious Feed',
      subtitle: 'Natural green fodder & wholesome grains',
      icon: Sprout,
      color: 'bg-lime-100 text-lime-800 border-lime-200',
    },
    {
      title: 'Quality Dairy Products',
      subtitle: '100% natural, unadulterated goodness',
      icon: ShieldCheck,
      color: 'bg-stone-200 text-stone-800 border-stone-300',
    },
  ];

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F5EFE6] via-[#FAF8F5] to-[#FAF8F5] opacity-90" />
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Freshness Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/10 border border-emerald-700/20 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Dairy Farm in Delhi • Old Gardhi Mendu</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Fresh & Quality Dairy Products from{' '}
              <span className="text-emerald-800 inline-block underline decoration-emerald-300 decoration-wavy decoration-2">
                Choudhary Dairy Farm
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
              Fresh milk and quality dairy products produced with proper animal care, nutritious feed, hygiene and responsible dairy farming practices.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="hero-view-products-btn"
                type="button"
                onClick={onViewProducts}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-us-btn"
                type="button"
                onClick={onContactUs}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-300 font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Contact Us</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${FARM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {FARM_INFO.phone}</span>
              </a>
            </div>

            {/* Timings & Purity Note */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-600 pt-2 border-t border-stone-200">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Open Daily: 5:00 AM – 7:00 PM</span>
              </div>
              <span className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Cow & Buffalo Milk Available</span>
              </div>
            </div>
          </div>

          {/* Hero Media Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-600/20 via-amber-200/40 to-emerald-800/10 blur-md transform -rotate-1" />

              {/* Main Farm Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
                  alt="Choudhary Dairy Farm peaceful green cattle pasture and healthy livestock in Delhi"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Overlay Badge on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-stone-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                        Pure Dairy Production
                      </p>
                      <p className="text-sm sm:text-base font-bold text-stone-900 font-serif">
                        Old Gardhi Mendu, Delhi
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-lg">
                        100% Fresh
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-stone-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Daily Supply</p>
                  <p className="text-xs font-bold text-stone-800">5:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Highlights Grid */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
