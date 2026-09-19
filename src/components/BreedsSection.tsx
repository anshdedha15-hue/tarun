import { Heart, Sparkles, Sprout, ShieldCheck, Activity, Droplets } from 'lucide-react';
import { BREEDS_DATA } from '../data/farmData';

export default function BreedsSection() {
  const highlights = [
    { title: 'Healthy Animals', icon: Heart, desc: 'Stress-free environment promoting vibrant animal vigor' },
    { title: 'Proper Animal Care', icon: Sparkles, desc: 'Gentle handling, daily grooming, and comfortable bedding' },
    { title: 'Nutritious Feeding', icon: Sprout, desc: 'Custom fiber rations, fresh green fodder, and mineral licks' },
    { title: 'Clean Surroundings', icon: Droplets, desc: 'Flushed concrete floors, natural sunlight, and breezy ventilation' },
    { title: 'Regular Care & Monitoring', icon: Activity, desc: 'Routine health checkups, temperature monitoring, and vaccinations' },
    { title: 'Quality Milk Production', icon: ShieldCheck, desc: 'Uncompromised natural milk with pure nutrition and rich taste' },
  ];

  return (
    <section id="breeds" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            Livestock Welfare & Care
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Cow & Buffalo Management
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            At Choudhary Dairy Farm, our high-quality milk begins with the well-being of our cows and buffaloes. We prioritize animal welfare, clean surroundings, and individual veterinary attention.
          </p>
        </div>

        {/* 6 Core Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center flex flex-col items-center hover:border-emerald-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 mt-1 leading-tight hidden sm:block">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Separate Visual Cards for Cows and Buffaloes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {BREEDS_DATA.map((animal) => (
            <div
              key={animal.id}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Animal Photo with clean badge */}
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={animal.image}
                  alt={`${animal.title} at Choudhary Dairy Farm in Delhi`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-700/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                    Responsible Husbandry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white drop-shadow-sm">
                    {animal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                    {animal.subtitle}
                  </p>
                </div>
              </div>

              {/* Animal Care Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {animal.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Farm Protocol & Standards:
                    </h4>
                    <div className="space-y-2">
                      {animal.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                            ✓
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    Daily checkups • Clean stalls
                  </span>
                  <a
                    href="#products"
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center gap-1"
                  >
                    View Dairy Products →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Breeds Integrity */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center max-w-2xl mx-auto text-xs text-amber-900">
          <span className="font-bold">Our Philosophy:</span> We focus strictly on the authentic welfare, hygienic conditions, and nourishment of our dairy cattle and buffaloes rather than unsubstantiated claims. Every drop of milk reflects honest dairy practices.
        </div>
      </div>
    </section>
  );
}
