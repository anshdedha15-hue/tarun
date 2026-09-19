import { Home, Sparkles, Utensils, Droplets, HeartPulse, ThermometerSnowflake } from 'lucide-react';
import { INFRASTRUCTURE_ITEMS } from '../data/farmData';

export default function Infrastructure() {
  const iconMap: Record<string, any> = {
    Home,
    Sparkles,
    Utensils,
    Droplets,
    HeartPulse,
    ThermometerSnowflake,
  };

  return (
    <section id="infrastructure" className="py-16 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            Farm Facilities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Farm Infrastructure
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Our dairy facilities at Old Gardhi Mendu are purpose-built to maintain the highest standards of cleanliness, animal comfort, and food safety from milking to delivery.
          </p>
        </div>

        {/* 6 Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INFRASTRUCTURE_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName] || Home;
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#FAF8F5] rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo container */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={`${item.title} at Choudhary Dairy Farm Delhi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-emerald-900 text-xs font-bold shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-medium text-emerald-800">
                    <span>Hygienic standard verified</span>
                    <span>✓ Certified clean</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infrastructure Hygiene Promise */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium">
              We welcome local consumers in Delhi to observe our hygienic milking process and well-kept cattle barns in Old Gardhi Mendu.
            </p>
          </div>
          <a
            href={`tel:8860222844`}
            className="text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 underline underline-offset-4 whitespace-nowrap"
          >
            Call to schedule a farm visit →
          </a>
        </div>
      </div>
    </section>
  );
}
