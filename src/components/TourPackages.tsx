import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Clock, 
  Check, 
  X as CloseIcon, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  MapPin,
  HelpCircle
} from 'lucide-react';
import { TOUR_PACKAGES, TourPackage, BUSINESS_PROFILE } from '../data/bintanData';

interface TourPackagesProps {
  currency: 'IDR' | 'SGD';
  onOpenBookingModal: (preset?: { type?: 'tour' | 'car'; title?: string }) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ currency, onOpenBookingModal }) => {
  const [filterType, setFilterType] = useState<'All' | 'Private' | 'Group'>('All');
  const [expandedItineraryId, setExpandedItineraryId] = useState<string | null>(TOUR_PACKAGES[0].id);

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (filterType === 'All') return true;
    return pkg.type === filterType;
  });

  const toggleItinerary = (id: string) => {
    setExpandedItineraryId(expandedItineraryId === id ? null : id);
  };

  const formatPrice = (pkg: TourPackage) => {
    if (currency === 'SGD') {
      return `SGD $${pkg.priceSgd}`;
    }
    return `Rp ${pkg.priceIdr.toLocaleString('id-ID')}`;
  };

  return (
    <section id="paket-tour" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Paket Wisata Pulau Bintan Terlengkap
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Pilihan Paket Tour Private & Group
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Pilih perjalanan eksklusif bersama keluarga tercinta (Private Tour) atau kebersamaan rombongan perusahaan & komunitas (Group Tour). Estimasi harga jujur, transparan, dan fasilitas terjamin.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1 bg-stone-200/80 rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setFilterType('All')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'All'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Semua Paket ({TOUR_PACKAGES.length})
            </button>
            <button
              onClick={() => setFilterType('Private')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                filterType === 'Private'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>Private Tour</span>
              <span className="text-[10px] bg-amber-700/60 text-amber-100 px-1.5 py-0.2 rounded-full">Eksklusif</span>
            </button>
            <button
              onClick={() => setFilterType('Group')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                filterType === 'Group'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>Group Tour</span>
              <span className="text-[10px] bg-teal-700/60 text-teal-100 px-1.5 py-0.2 rounded-full">Rombongan</span>
            </button>
          </div>
        </div>

        {/* Tour Packages List */}
        <div className="space-y-8">
          {filteredPackages.map((pkg) => {
            const isExpanded = expandedItineraryId === pkg.id;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Image Banner & Highlights */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={pkg.bannerImg}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
                    
                    {/* Featured / Best Seller Badge */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className={`text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-md ${
                        pkg.type === 'Private' ? 'bg-amber-500 text-stone-950' : 'bg-teal-500 text-white'
                      }`}>
                        {pkg.type} Tour
                      </span>
                      {pkg.featured && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase">
                          🔥 Paling Laris
                        </span>
                      )}
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-amber-300 mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Durasi: {pkg.duration}</span>
                        <span>•</span>
                        <Users className="w-3.5 h-3.5" />
                        <span>Min. {pkg.minPax} Pax</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Pricing, Destinations, Inclusions, WhatsApp Action */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    
                    <div>
                      {/* Top Row: Price Display */}
                      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-stone-100">
                        <div>
                          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
                            Estimasi Biaya Paket:
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight font-display">
                              {formatPrice(pkg)}
                            </span>
                            <span className="text-xs text-stone-500 font-medium">
                              {pkg.priceUnit}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Harga All-In Tanpa Biaya Tersembunyi
                          </span>
                        </div>
                      </div>

                      {/* Destinations Included Badges */}
                      <div className="py-4">
                        <span className="text-xs font-bold text-stone-700 block mb-2">
                          Destinasi yang Dikunjungi:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.destinationsCovered.map((dest, dIdx) => (
                            <span
                              key={dIdx}
                              className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg border border-stone-200/80 flex items-center gap-1"
                            >
                              <MapPin className="w-3 h-3 text-amber-600" />
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Included & Excluded Summary */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 text-xs bg-stone-50/80 p-4 rounded-2xl border border-stone-200/70">
                        <div>
                          <span className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                            <Check className="w-4 h-4 text-emerald-600" />
                            Fasilitas Sudah Termasuk:
                          </span>
                          <ul className="space-y-1 text-stone-600">
                            {pkg.includes.slice(0, 4).map((inc, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-500 font-bold">•</span>
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="font-bold text-stone-600 flex items-center gap-1.5 mb-2">
                            <CloseIcon className="w-4 h-4 text-stone-400" />
                            Belum Termasuk:
                          </span>
                          <ul className="space-y-1 text-stone-500">
                            {pkg.excludes.slice(0, 3).map((exc, e) => (
                              <li key={e} className="flex items-start gap-1.5">
                                <span className="text-stone-400 font-bold">•</span>
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Expandable Itinerary Schedule */}
                      <div className="mt-4">
                        <button
                          onClick={() => toggleItinerary(pkg.id)}
                          className="w-full text-left text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100/80 px-4 py-2.5 rounded-xl transition-colors flex items-center justify-between cursor-pointer border border-amber-200"
                        >
                          <span className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            {isExpanded ? 'Sembunyikan Rencana Perjalanan (Itinerary)' : 'Lihat Susunan Acara Lengkap (Itinerary)'}
                          </span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 animate-fadeIn">
                            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                              Rundown Perjalanan {pkg.title}:
                            </h4>
                            <div className="space-y-3 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-stone-300">
                              {pkg.itinerary.map((step, sIdx) => (
                                <div key={sIdx} className="relative pl-6 text-xs">
                                  <div className="absolute left-1 top-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white" />
                                  <div className="font-bold text-stone-900">
                                    <span className="text-amber-700 mr-2">{step.time}</span>
                                    <span>{step.activity}</span>
                                  </div>
                                  <p className="text-stone-600 text-[11px] mt-0.5">{step.desc}</p>
                                </div>
                              ))}
                            </div>
                            <div className="pt-2 text-[11px] text-stone-500 italic bg-amber-50/50 p-2 rounded">
                              💡 <strong>Catatan:</strong> {pkg.recommendation} Jadwal bisa disesuaikan dengan jam kedatangan ferry atau pesawat Anda.
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Bottom CTA Buttons */}
                    <div className="pt-6 mt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-500 text-center sm:text-left">
                        <span>Penjemputan siap di Pelabuhan BBT Lagoi, Tg Pinang, Tg Uban, atau Hotel.</span>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => onOpenBookingModal({ type: 'tour', title: pkg.title })}
                          className="flex-1 sm:flex-none bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                        >
                          Hitung Pax
                        </button>

                        <a
                          href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(`Halo JFC Tour & Travel Bintan! Saya berminat booking:
Paket: *${pkg.title}* (${pkg.type} Tour)
Durasi: ${pkg.duration}
Estimasi: ${formatPrice(pkg)} ${pkg.priceUnit}

Mohon info ketersediaan tanggal dan penjemputan.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                          <span>Booking WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Group & Corporate Notice Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-900 via-stone-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Layanan Khusus Gathering & Custom Trip
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Punya Rencana Perjalanan Sendiri atau Rombongan Besar?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
              Kami siap merancang itinerary khusus sesuai waktu santai Anda, budget instansi, fasilitas gala dinner seafood, spanduk rombongan, dan armada Bus Pariwisata / Hiace.
            </p>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour Bintan, saya mau request proposal custom tour / family gathering rombongan di Pulau Bintan.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi Custom Trip Gratis</span>
          </a>
        </div>

      </div>
    </section>
  );
};
