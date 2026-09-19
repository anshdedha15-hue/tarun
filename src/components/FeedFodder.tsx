import { Sprout, Wheat, Scale, Droplets, Clock, ShieldCheck } from 'lucide-react';
import { FEED_FODDER_ITEMS } from '../data/farmData';

export default function FeedFodder() {
  const iconMap: Record<string, any> = {
    Sprout,
    Wheat,
    Scale,
    Droplets,
    Clock,
    ShieldCheck,
  };

  return (
    <section id="feed-fodder" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            Cattle Nutrition & Diet
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Feed & Fodder: The Foundation of Pure Milk
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            What our dairy animals consume directly shapes the taste, purity, and nutritional value of our milk. At Choudhary Dairy Farm, we adhere to strict scientific feeding routines prioritizing natural forage, wholesome grains, and pure water.
          </p>
        </div>

        {/* Big Visual Dual Feature Banner for Green Fodder & Cattle Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Card 1: Fresh Green Fodder */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group border border-stone-200 bg-white">
            <div className="aspect-16/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1000&q=80"
                alt="Lush fresh green fodder for dairy cattle at Choudhary Dairy Farm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-lime-100 text-lime-900 text-xs font-bold">
                <Sprout className="w-3.5 h-3.5" />
                <span>Succulent Daily Greens</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Fresh Green Fodder
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Daily harvested green fodder (seasonal sorghum, berseem, maize, and hybrid Napier grass) packed with natural beta-carotene, vitamins, and dietary fiber that promotes animal digestion and creamy milk texture.
              </p>
            </div>
          </div>

          {/* Card 2: Nutritious Feed & Concentrates */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group border border-stone-200 bg-white">
            <div className="aspect-16/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=80"
                alt="Nutritious cattle feed grains, wheat bran and mineral supplements"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
                <Wheat className="w-3.5 h-3.5" />
                <span>Wholesome Concentrates</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Nutritious Feed & Balanced Diet
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A custom ration of pure mustard oil-cake, wheat bran, crushed maize, chickpeas, and balanced mineral mixtures formulated to support bone density, lactation vitality, and robust immunity without artificial enhancers.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Grid Nutrition Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEED_FODDER_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName] || Sprout;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Milk Quality Connection Summary Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-emerald-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold">
              Nutrition Directly Supporting Health & Milk Quality
            </h4>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              When dairy animals receive clean drinking water, high-fiber natural green fodder, and punctual feeding routines, the resulting milk possesses natural sweetness, optimal calcium content, and pure flavor.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm shadow-md hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Visit Our Farm in Delhi
          </a>
        </div>
      </div>
    </section>
  );
}
