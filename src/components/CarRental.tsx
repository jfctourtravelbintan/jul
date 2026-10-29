import React, { useState } from 'react';
import { 
  Car, 
  Users, 
  Briefcase, 
  Fuel, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Award,
  ChevronRight
} from 'lucide-react';
import { CAR_RENTAL_DATA, CarRentalItem, BUSINESS_PROFILE } from '../data/bintanData';

interface CarRentalProps {
  currency: 'IDR' | 'SGD';
  onOpenBookingModal: (preset?: { type?: 'tour' | 'car'; title?: string }) => void;
}

export const CarRental: React.FC<CarRentalProps> = ({ currency, onOpenBookingModal }) => {
  const [selectedDuration, setSelectedDuration] = useState<'harian' | 'mingguan' | 'bulanan'>('harian');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'MPV', 'SUV', 'Van', 'Luxury'];

  const filteredCars = CAR_RENTAL_DATA.filter((car) => {
    if (selectedCategory === 'Semua') return true;
    return car.category === selectedCategory;
  });

  const formatCurrency = (idrAmount: number) => {
    if (idrAmount === 0) return 'Khusus Dengan Supir';
    if (currency === 'SGD') {
      const sgd = Math.round(idrAmount / 11500);
      return `SGD $${sgd}`;
    }
    return `Rp ${idrAmount.toLocaleString('id-ID')}`;
  };

  const getPriceByDuration = (car: CarRentalItem) => {
    switch (selectedDuration) {
      case 'harian':
        return {
          price: car.dailyWithDriverPriceIdr,
          label: '/ Hari (Mobil + Supir + BBM)',
          subtitle: 'Durasi 12 - 14 Jam per hari'
        };
      case 'mingguan':
        return {
          price: car.weeklyPriceIdr,
          label: '/ Minggu (7 Hari Penuh)',
          subtitle: 'Hemat hingga 15% dibanding harian'
        };
      case 'bulanan':
        return {
          price: car.monthlyPriceIdr,
          label: '/ Bulan (30 Hari Kontrak)',
          subtitle: 'Cocok untuk operasional dinas & ekspatriat'
        };
    }
  };

  return (
    <section id="rental-mobil" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-teal-600" />
            Layanan Transportasi & Sewa Mobil Bintan
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Paket Rental Mobil Harian, Mingguan & Bulanan
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Armada kendaraan terbaru, wangi, ber-AC dingin dan terawat prima. Dilengkapi opsi <strong className="text-stone-900">Dengan Supir Berpengalaman + BBM</strong> untuk kenyamanan liburan Anda, serta paket <strong className="text-stone-900">Mingguan & Bulanan</strong> untuk kebutuhan dinas proyek di Pulau Bintan.
          </p>

          {/* Duration Selector Tabs (Harian, Mingguan, Bulanan) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedDuration('harian')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedDuration === 'harian'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Rental Harian (12-14 Jam)</span>
            </button>

            <button
              onClick={() => setSelectedDuration('mingguan')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedDuration === 'mingguan'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Rental Mingguan (Diskon 15%)</span>
            </button>

            <button
              onClick={() => setSelectedDuration('bulanan')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedDuration === 'bulanan'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Rental Bulanan (Kontrak Dinas)</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xs text-stone-400 font-semibold mr-1">Tipe:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-800 text-white font-bold'
                    : 'bg-stone-200/70 text-stone-600 hover:bg-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => {
            const priceInfo = getPriceByDuration(car);

            return (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Car Image Banner */}
                <div className="relative h-48 bg-stone-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    {car.brand} • {car.category}
                  </div>

                  {/* Transmisi */}
                  <div className="absolute top-3 right-3 bg-white/90 text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    Transmisi: {car.transmission}
                  </div>

                  {/* Car Model at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-display font-bold leading-tight drop-shadow-sm">
                      {car.model}
                    </h3>
                  </div>
                </div>

                {/* Capacity Badges */}
                <div className="px-5 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span><strong>{car.seats}</strong> Penumpang</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-teal-600" />
                    <span><strong>{car.luggage}</strong> Koper</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel className="w-4 h-4 text-emerald-600" />
                    <span>Bensin Irit</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price Block */}
                    <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/80 mb-4">
                      <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                        Tarif Sewa {selectedDuration === 'harian' ? 'Harian' : selectedDuration === 'mingguan' ? 'Mingguan' : 'Bulanan'}:
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-amber-700 font-display">
                          {formatCurrency(priceInfo.price)}
                        </span>
                        <span className="text-xs text-stone-600">
                          {priceInfo.label}
                        </span>
                      </div>
                      <p className="text-[10px] text-amber-800/80 mt-1">
                        {priceInfo.subtitle}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-1.5 mb-4">
                      {car.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Free Pickup Points */}
                    <div className="text-[11px] text-stone-500 bg-stone-100 p-2 rounded-lg">
                      📍 <strong>Gratis Antar-Jemput:</strong> Ferry Terminal Lagoi BBT, Pelabuhan Tg Pinang, atau Pelabuhan Tg Uban.
                    </div>
                  </div>

                  {/* Booking Buttons */}
                  <div className="pt-4 mt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenBookingModal({ type: 'car', title: `${car.model} (${selectedDuration.toUpperCase()})` })}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer text-center"
                    >
                      Pilih Tanggal
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(`Halo JFC Tour & Travel Bintan, saya mau sewa mobil:
Unit: *${car.model}*
Paket: *Rental ${selectedDuration.toUpperCase()}* (${formatCurrency(priceInfo.price)} ${priceInfo.label})

Mohon info ketersediaan unit dan jadwal penjemputan.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Sewa via WA</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison: Mengapa Lebih Nyaman Dengan Supir di Bintan? */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-900">Supir Lokal Ramah & Tahu Rute</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Tidak perlu khawatir tersesat di rute antar-kawasan Bintan (Lagoi ke Tanjung Pinang butuh 1-1.5 jam). Supir kami merangkap fotografer & guide.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Fuel className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-900">Sudah Termasuk BBM</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Semua paket harian kami sudah All-In bahan bakar. Anda tinggal duduk tenang menikmati pemandangan pantai dan alam Bintan.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-900">Standby Sesuai Tiket Kapal</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Mobil dan supir sudah siap menunggu di lobi kedatangan pelabuhan ferry sebelum kapal Anda bersandar. Bebas antre taksi!
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
