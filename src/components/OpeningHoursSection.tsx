import { useState, useEffect } from 'react';
import { Clock, Sunrise, Sunset, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function OpeningHoursSection() {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [currentSlot, setCurrentSlot] = useState<string>('Day Operations');

  useEffect(() => {
    const updateStatus = () => {
      try {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const istDate = new Date(utc + 3600000 * 5.5);
        const hours = istDate.getHours();
        const mins = istDate.getMinutes();
        const totalMinutes = hours * 60 + mins;

        // 5:00 AM (300 mins) to 7:00 PM (1140 mins)
        const open = totalMinutes >= 300 && totalMinutes < 1140;
        setIsOpenNow(open);

        if (totalMinutes >= 300 && totalMinutes < 510) {
          setCurrentSlot('Morning Fresh Milking & Distribution');
        } else if (totalMinutes >= 510 && totalMinutes < 960) {
          setCurrentSlot('Daytime Animal Feeding, Grooming & Farm Enquiries');
        } else if (totalMinutes >= 960 && totalMinutes < 1140) {
          setCurrentSlot('Evening Fresh Milking & Supply Batch');
        } else {
          setCurrentSlot('Closed for the night (Opens at 5:00 AM)');
        }
      } catch {
        setIsOpenNow(true);
      }
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="opening-hours" className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Card Container */}
          <div className="rounded-3xl bg-white border-2 border-emerald-800/20 shadow-xl overflow-hidden">
            {/* Header with high-contrast farm green */}
            <div className="bg-[#1b4332] text-white p-6 sm:p-10 text-center relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>Operating Hours</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Open Daily
              </h2>

              {/* Huge, Highly Visible Timing Display */}
              <div className="mt-4 inline-block bg-white/10 backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 rounded-2xl border border-white/20">
                <p className="font-serif text-3xl sm:text-5xl font-extrabold text-emerald-300 tracking-wider">
                  5:00 AM – 7:00 PM
                </p>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1 font-medium">
                  Monday through Sunday • 365 Days a Year
                </p>
              </div>

              {/* Real-time Open Status Pill */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ${
                      isOpenNow ? 'bg-emerald-400' : 'bg-amber-500'
                    }`}
                  />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                  {isOpenNow ? `Farm Currently Open (${currentSlot})` : 'Farm Currently Closed • Reopens 5:00 AM'}
                </span>
              </div>
            </div>

            {/* Detailed Milking & Visiting Breakdown */}
            <div className="p-6 sm:p-10 bg-white space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Morning Slot */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                    <Sunrise className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      Morning Milking & Delivery
                    </span>
                    <h4 className="font-serif text-xl font-bold text-stone-900">
                      {FARM_INFO.milkingSlots.morning}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Freshly milked cow and buffalo milk bottled directly for early morning delivery routes across Delhi and early pickup.
                    </p>
                  </div>
                </div>

                {/* Evening Slot */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Sunset className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Evening Milking & Pickup
                    </span>
                    <h4 className="font-serif text-xl font-bold text-stone-900">
                      {FARM_INFO.milkingSlots.evening}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Evening fresh batch of raw milk, freshly set curd, ghee, butter, and cream prepared for dinner and next-day needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Day Details */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Farm visits and inquiries are welcomed throughout the day.</span>
                </div>

                <a
                  id="timing-call-btn"
                  href={`tel:${FARM_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {FARM_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
