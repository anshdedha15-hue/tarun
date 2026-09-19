import { Heart, Sparkles, Sprout, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Clean and Hygienic Animal Care',
      description: 'Daily sanitization of animal sheds, clean washdowns, and continuous vet-guided sanitation routines.',
      icon: Sparkles,
    },
    {
      title: 'Healthy Cows and Buffaloes',
      description: 'Well-monitored herd health, humane treatment, and comfortable living quarters allowing natural behaviors.',
      icon: Heart,
    },
    {
      title: 'Proper Nutrition',
      description: 'Balanced diet consisting of freshly harvested green fodder, dry roughage, and mineral-fortified cattle feed.',
      icon: Sprout,
    },
    {
      title: 'Fresh Milk Production',
      description: 'Direct farm milk drawn every morning and evening, unadulterated and delivered fresh to Delhi households.',
      icon: Award,
    },
    {
      title: 'Quality Dairy Products',
      description: 'Handcrafted curd, pure desi ghee, fresh churned butter, and rich cream prepared using traditional methods.',
      icon: ShieldCheck,
    },
    {
      title: 'Clean Milking & Handling Practices',
      description: 'Strict hygiene protocols during milking sessions and food-grade storage containers prevent contamination.',
      icon: CheckCircle2,
    },
    {
      title: 'Animal Well-Being',
      description: 'Zero cruelty, relaxed pacing, proper hydration, and loving attention to every cow and buffalo on the farm.',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            About Our Farm
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Rooted in Hygiene, Animal Care & Dairy Craftsmanship
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            At <strong>{FARM_INFO.name}</strong> in Old Gardhi Mendu, Delhi, we believe that pure, nutritious milk can only come from content, healthy, and thoughtfully cared-for animals.
          </p>
        </div>

        {/* Content & Professional Farm Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image & Key Badges Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80"
                alt="Dairy cows grazing and enjoying clean conditions at Choudhary Dairy Farm Delhi"
                className="w-full h-96 sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg font-bold">Old Gardhi Mendu, Delhi</p>
                <p className="text-xs text-emerald-200">Dedicated local dairy farm serving pure milk daily</p>
              </div>
            </div>

            {/* Farm commitment callout card */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    Responsible Dairy Farming in Delhi
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    We maintain regular veterinary care, hygienic milking routines, and clean resting sheds to preserve dairy purity from source to glass.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Story Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                A Commitment to Quality at Every Step
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Operating every day from <strong>5:00 AM to 7:00 PM</strong> in Old Gardhi Mendu, Choudhary Dairy Farm has established a trusted name across Delhi for uncompromising dairy quality. We do not use hormones or shortcuts; instead, we invest heavily in cattle well-being, balanced nutritious fodder, and hygienic handling.
              </p>
            </div>

            {/* Focus Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pl-8">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Highlight */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${FARM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-900 transition-colors"
              >
                <span>Call Farm: {FARM_INFO.phone}</span>
              </a>
              <a
                href="#products"
                className="text-emerald-800 hover:text-emerald-900 font-bold text-xs sm:text-sm underline underline-offset-4"
              >
                Explore our pure dairy products →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
