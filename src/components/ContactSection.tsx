import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Navigation } from 'lucide-react';
import { FARM_INFO, PRODUCTS } from '../data/farmData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  selectedProduct?: string;
  onClearSelectedProduct?: () => void;
}

export default function ContactSection({ selectedProduct, onClearSelectedProduct }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    productInterest: selectedProduct || 'All / General Enquiry',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: selectedProduct,
        message: prev.message || `Hello, I would like to inquire about fresh ${selectedProduct} delivery / availability.`,
      }));
    }
  }, [selectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local processing and recording
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      productInterest: 'All / General Enquiry',
    });
    if (onClearSelectedProduct) onClearSelectedProduct();
  };

  const whatsappLink = `https://wa.me/91${FARM_INFO.phone}?text=Hello%20Choudhary%20Dairy%20Farm,%20my%20name%20is%20${encodeURIComponent(formData.name || 'a customer')}.%20I%20am%20interested%20in%20${encodeURIComponent(formData.productInterest || 'Fresh Milk & Dairy Products')}.`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Contact Choudhary Dairy Farm
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Have questions about daily fresh milk supplies, subscription orders, or would like to visit our farm? Contact us directly or send an enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Farm Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200 space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Farm Information
              </h3>

              {/* Clickable Phone (Critical for Mobile Users) */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-300 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      id="contact-phone-link"
                      href={`tel:${FARM_INFO.phone}`}
                      className="text-lg sm:text-xl font-bold text-emerald-800 hover:text-emerald-900 hover:underline block mt-0.5"
                    >
                      {FARM_INFO.phone}
                    </a>
                    <span className="text-xs text-stone-500 mt-1 block">
                      Tap to call directly from your phone
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Farm Location
                    </span>
                    <p className="text-base sm:text-lg font-bold text-stone-900 mt-0.5 font-serif">
                      Old Gardhi Mendu, Delhi
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      Delhi, India • Open for local daily supply and customer farm visits
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Info */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-lime-100 text-lime-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Opening Hours
                    </span>
                    <p className="text-base sm:text-lg font-bold text-stone-900 mt-0.5 font-serif">
                      5:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      Open daily (Monday to Sunday) for fresh milking batches & orders
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Connect Button */}
              <div className="pt-2">
                <a
                  id="whatsapp-chat-btn"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Farm on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Directions / Landmark Card */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Navigation className="w-4 h-4" />
                <span>Directions & Local Landmark:</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                Located conveniently in Old Gardhi Mendu, Northeast Delhi. Easy access for morning milk pickups, direct tanker subscriptions, or household bottle delivery. Call ahead at <strong>{FARM_INFO.phone}</strong> for instant assistance.
              </p>
            </div>
          </div>

          {/* Simple Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-md">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Fill out your details below and we will contact you shortly regarding pure milk deliveries, pricing, or product availability.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-emerald-950">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{formData.productInterest}</strong> has been received by Choudhary Dairy Farm. We will call you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${FARM_INFO.phone}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-900 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Us Now: {FARM_INFO.phone}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9812345678"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="enquiry-email" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-stone-400 text-[11px] lowercase">(optional)</span>
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <label htmlFor="enquiry-product" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        id="enquiry-product"
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                      >
                        <option value="All / General Enquiry">All / General Enquiry</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Message / Requirements
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your daily quantity (e.g., 2 Litres of Cow Milk daily), preferred delivery time, or query..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    id="enquiry-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-500 pt-1">
                    Your details are only used to contact you regarding your dairy order. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
