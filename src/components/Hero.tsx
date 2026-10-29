import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Car, 
  Calendar, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  CheckCircle2,
  Compass,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_PROFILE, TOUR_PACKAGES, CAR_RENTAL_DATA } from '../data/bintanData';

interface HeroProps {
  onOpenBookingModal: (preset?: { type?: 'tour' | 'car'; title?: string }) => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<'tour' | 'car'>('tour');
  const [selectedItem, setSelectedItem] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [paxCount, setPaxCount] = useState('2-4 Orang');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      type: activeTab,
      title: selectedItem || (activeTab === 'tour' ? TOUR_PACKAGES[0].title : CAR_RENTAL_DATA[0].model)
    });
  };

  return (
    <div className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Hero with Dual Atmosphere (Beach, Desert & Spiritual) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Keindahan Pantai dan Wisata Pulau Bintan"
          className="w-full h-full object-cover object-center brightness-40 scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/60" />
        {/* Subtle Desert Golden & Oceanic Teal Vignette */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Trust Badges, Theme Accents */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google Business & Verified Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-stone-800/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                4.9 / 5.0 Google Bisnis
              </span>
              <span className="text-stone-400">•</span>
              <span className="text-teal-300 font-medium">Bintan Island Official Agency</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Terpercaya
              </span>
            </div>

            {/* Main Title with pantai, religi, gurun pasir themes */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              Jelajahi Pesona <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                Pulau Bintan
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-stone-200 mt-2">
                Lagoi, Tanjung Pinang & Tanjung Uban
              </span>
            </h1>

            {/* Description highlighting the user's specific destinations & themes */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Selamat datang di <strong>JFC Tour & Travel Bintan</strong>. Nikmati keindahan pantai pasir putih kelas dunia <em>Kawasan Lagoi</em>, warisan religi & sejarah agung <em>Pulau Penyengat & Vihara Kwan Im Tanjung Pinang</em>, serta keajaiban eksotis <em>Gurun Pasir Busung & Sleeping Buddha Tanjung Uban</em>.
            </p>

            {/* Quick Benefits / Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-stone-200 text-left">
              <div className="flex items-center gap-2 bg-stone-900/60 backdrop-blur-xs p-2.5 rounded-lg border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private & Group Tour</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 backdrop-blur-xs p-2.5 rounded-lg border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rental Harian / Mingguan / Bulanan</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 backdrop-blur-xs p-2.5 rounded-lg border border-stone-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Antar Jemput Port BBT & Bandara</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour & Travel Bintan, saya ingin informasi paket tour dan sewa mobil.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all text-sm group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Konsultasi Booking via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('destinasi');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 font-semibold px-5 py-3.5 rounded-xl border border-stone-700 text-sm transition-all"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Eksplor Destinasi Wisata</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking & Estimator Box */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-2xl p-6 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                Respon Cepat 24 Jam
              </div>

              <h2 className="text-xl font-display font-bold text-white mb-1">
                Kalkulator & Rencana Perjalanan
              </h2>
              <p className="text-xs text-stone-400 mb-5">
                Dapatkan estimasi harga tour atau rental mobil secara instan via WhatsApp resmi JFC.
              </p>

              {/* Tab Selector: Tour vs Rental */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-950/80 rounded-xl mb-4 border border-stone-800">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('tour');
                    setSelectedItem('');
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'tour'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Paket Tour Bintan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('car');
                    setSelectedItem('');
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'car'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  Rental Mobil Bintan
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {activeTab === 'tour' ? 'Pilih Paket Tour' : 'Pilihan Unit Armada Mobil'}
                  </label>
                  <select
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    required
                  >
                    <option value="">
                      {activeTab === 'tour' ? '-- Pilih Paket Wisata Bintan --' : '-- Pilih Unit Kendaraan --'}
                    </option>
                    {activeTab === 'tour' ? (
                      TOUR_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.title}>
                          [{pkg.type}] {pkg.title} ({pkg.duration})
                        </option>
                      ))
                    ) : (
                      CAR_RENTAL_DATA.map((car) => (
                        <option key={car.id} value={car.model}>
                          {car.model} ({car.seats} Seats) - {car.category}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      Tanggal Mulai
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1 flex items-center gap-1">
                      <Users className="w-3 h-3 text-teal-400" />
                      {activeTab === 'tour' ? 'Jumlah Peserta' : 'Durasi Sewa'}
                    </label>
                    <select
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    >
                      {activeTab === 'tour' ? (
                        <>
                          <option value="2 Orang (Private Couple)">2 Orang (Private)</option>
                          <option value="3-5 Orang (Keluarga Kecil)">3-5 Orang (Keluarga)</option>
                          <option value="6-10 Orang (Keluarga Besar)">6-10 Orang (Big Family)</option>
                          <option value="11-15 Orang (Hiace Group)">11-15 Orang (Rombongan)</option>
                          <option value=">15 Orang (Bus Pariwisata)">15+ Orang (Gathering)</option>
                        </>
                      ) : (
                        <>
                          <option value="1 Hari (Harian 12-14 Jam)">1 Hari (Harian)</option>
                          <option value="2-3 Hari (Weekend)">2-3 Hari</option>
                          <option value="1 Minggu (Tarif Diskon)">1 Minggu (Mingguan)</option>
                          <option value="1 Bulan (Kontrak Dinas)">1 Bulan (Bulanan)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800/80 text-[11px] text-stone-400">
                  <div className="flex items-center justify-between text-stone-300">
                    <span>Estimasi Harga Mulai Dari:</span>
                    <span className="font-bold text-amber-400 text-xs">
                      {activeTab === 'tour' ? 'Rp 390.000 / orang' : 'Rp 350.000 / hari'}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-stone-400">
                    *Termasuk supir lokal ramah, BBM, dan penjemputan di terminal ferry/hotel.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-black py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  <span>Lanjutkan Booking via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-400" />
                  JFC Bintan Tour & Travel
                </span>
                <span className="text-emerald-400 font-semibold">Online Sekarang</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
