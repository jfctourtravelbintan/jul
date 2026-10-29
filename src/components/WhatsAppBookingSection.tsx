import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Calendar, 
  MapPin, 
  Users, 
  Car, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Clock, 
  User, 
  PhoneCall, 
  FileText
} from 'lucide-react';
import { BUSINESS_PROFILE, TOUR_PACKAGES, CAR_RENTAL_DATA, PICKUP_POINTS } from '../data/bintanData';

interface WhatsAppBookingProps {
  initialType?: 'tour' | 'car';
  initialTitle?: string;
}

export const WhatsAppBookingSection: React.FC<WhatsAppBookingProps> = ({ 
  initialType = 'tour', 
  initialTitle 
}) => {
  const [serviceType, setServiceType] = useState<'tour' | 'car' | 'custom'>(initialType);
  const [selectedTour, setSelectedTour] = useState(
    initialType === 'tour' && initialTitle ? initialTitle : TOUR_PACKAGES[0].title
  );
  const [selectedCar, setSelectedCar] = useState(
    initialType === 'car' && initialTitle ? initialTitle : CAR_RENTAL_DATA[0].model
  );
  const [rentalDuration, setRentalDuration] = useState('1 Hari (Full Day)');
  const [paxCount, setPaxCount] = useState('4 Orang');
  const [travelDate, setTravelDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState(PICKUP_POINTS[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  // Generate WhatsApp preformatted message
  const generateWhatsAppMessage = () => {
    let serviceDetail = '';
    if (serviceType === 'tour') {
      serviceDetail = `*Layanan:* Paket Tour Wisata Bintan\n*Pilihan Paket:* ${selectedTour}\n*Jumlah Peserta:* ${paxCount}`;
    } else if (serviceType === 'car') {
      serviceDetail = `*Layanan:* Rental / Sewa Mobil Bintan\n*Unit Armada:* ${selectedCar}\n*Durasi Sewa:* ${rentalDuration}`;
    } else {
      serviceDetail = `*Layanan:* Custom Trip / Gathering Rombongan Bintan\n*Estimasi Peserta:* ${paxCount}`;
    }

    const message = `Halo *JFC Tour & Travel Bintan*, saya ingin melakukan pemesanan / booking via website:

${serviceDetail}
*Tanggal Keberangkatan / Sewa:* ${travelDate || 'Belum Ditentukan'}
*Titik Penjemputan:* ${pickupLocation}
*Nama Pemesan:* ${customerName || '(Tamu)'}
*Kontak WhatsApp:* ${customerPhone || '-'}
*Catatan Tambahan:* ${specialNotes || 'Mohon konfirmasi ketersediaan dan rincian penjemputannya.'}

Mohon diproses penawarannya ya. Terima kasih!`;

    return message;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(generateWhatsAppMessage());
    const waUrl = `https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking-wa" className="py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-950" />
            <span>Fitur Booking Langsung via WhatsApp Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Form Pemesanan Cepat & Otomatis
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Pilih layanan tour atau rental mobil, tentukan titik jemput di pelabuhan/hotel, dan sistem kami akan langsung menyusun format WhatsApp siap kirim ke customer service kami.
          </p>
        </div>

        {/* 2-Column Layout: Form & Live WhatsApp Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-stone-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xl">
            
            {/* Service Type Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-stone-950 rounded-2xl mb-6 border border-stone-800 text-xs">
              <button
                type="button"
                onClick={() => setServiceType('tour')}
                className={`py-2.5 px-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  serviceType === 'tour'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paket Tour</span>
              </button>

              <button
                type="button"
                onClick={() => setServiceType('car')}
                className={`py-2.5 px-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  serviceType === 'car'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Rental Mobil</span>
              </button>

              <button
                type="button"
                onClick={() => setServiceType('custom')}
                className={`py-2.5 px-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  serviceType === 'custom'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Custom / Group</span>
              </button>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
              
              {/* Dynamic Field Based on Service Type */}
              {serviceType === 'tour' && (
                <div>
                  <label className="block text-stone-300 font-semibold mb-1.5">
                    Pilihan Paket Wisata Bintan:
                  </label>
                  <select
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                  >
                    {TOUR_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>
                        [{pkg.type}] {pkg.title} - {pkg.duration}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {serviceType === 'car' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-300 font-semibold mb-1.5">
                      Pilihan Unit Mobil:
                    </label>
                    <select
                      value={selectedCar}
                      onChange={(e) => setSelectedCar(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-teal-500 text-xs"
                    >
                      {CAR_RENTAL_DATA.map((car) => (
                        <option key={car.id} value={car.model}>
                          {car.model} ({car.seats} Seats)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-semibold mb-1.5">
                      Pilihan Durasi Sewa:
                    </label>
                    <select
                      value={rentalDuration}
                      onChange={(e) => setRentalDuration(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-teal-500 text-xs"
                    >
                      <option value="1 Hari (Full Day Dengan Supir + BBM)">1 Hari (Harian + Supir + BBM)</option>
                      <option value="2 Hari (Weekend Tour)">2 Hari</option>
                      <option value="3 Hari (Explore Bintan Lengkap)">3 Hari</option>
                      <option value="1 Minggu (Tarif Diskon Mingguan)">1 Minggu (Mingguan)</option>
                      <option value="1 Bulan (Kontrak Bulanan Perusahaan)">1 Bulan (Bulanan Dinas)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Date & Pax Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Tanggal Mulai Liburan / Sewa:
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-teal-400" />
                    Jumlah Orang (Peserta):
                  </label>
                  <input
                    type="text"
                    value={paxCount}
                    onChange={(e) => setPaxCount(e.target.value)}
                    placeholder="Contoh: 4 Dewasa + 1 Anak"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    required
                  />
                </div>
              </div>

              {/* Pickup Point Selection */}
              <div>
                <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Titik Penjemputan di Bintan:
                </label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                >
                  {PICKUP_POINTS.map((pt, idx) => (
                    <option key={idx} value={pt}>
                      {pt}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-400 mt-1">
                  *Driver kami akan menunggu dengan nameboard bertuliskan nama Anda di lobi kedatangan pelabuhan/hotel.
                </p>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    Nama Lengkap Pemesan:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Bpk. Ridwan / Mr. David"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    Nomor WhatsApp / HP Aktif:
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Contoh: 0812-xxxx-xxxx / +65 xxx"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                    required
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  Catatan Tambahan (Opsional):
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Misal: Jam ketibaan ferry pukul 09:30 WIB di BBT Lagoi, request supir bisa bahasa Inggris, ingin mampir makan seafood di Sei Enam..."
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Format Booking ke WhatsApp Resmi ({BUSINESS_PROFILE.whatsappFormatted})</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Tanpa Biaya Tersembunyi
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Konfirmasi Cepat 5-10 Menit
                </span>
              </div>

            </form>
          </div>

          {/* Right Column: Live WhatsApp Message Simulator Preview */}
          <div className="lg:col-span-5 bg-stone-900 rounded-3xl p-6 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-stone-200">
                    Live Preview Pesan WhatsApp:
                  </span>
                </div>
                <span className="text-[10px] bg-stone-800 text-stone-400 px-2 py-0.5 rounded">
                  Format Otomatis
                </span>
              </div>

              {/* WhatsApp Chat Bubble Mockup */}
              <div className="bg-[#0b141a] rounded-2xl p-4 border border-[#202c33] shadow-inner font-mono text-xs text-stone-200 relative">
                {/* Header bar of fake chat */}
                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#202c33] text-[11px]">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-xs">
                    JFC
                  </div>
                  <div>
                    <span className="font-bold text-white block">JFC Tour & Travel Bintan</span>
                    <span className="text-[9px] text-emerald-400">Terverifikasi Google Bisnis</span>
                  </div>
                </div>

                {/* Sent bubble */}
                <div className="bg-[#005c4b] p-3.5 rounded-xl rounded-tr-none text-white text-xs leading-relaxed whitespace-pre-line shadow-xs">
                  {generateWhatsAppMessage()}
                  <div className="text-[9px] text-emerald-200 text-right mt-2 flex items-center justify-end gap-1">
                    <span>Baru saja</span>
                    <span>✓✓</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-stone-950/60 rounded-xl border border-stone-800/80 text-[11px] text-stone-400 space-y-1">
                <p className="font-bold text-stone-300">Cara Kerja Booking WhatsApp:</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  <li>Lengkapi formulir di samping.</li>
                  <li>Klik tombol kirim WhatsApp di bawah.</li>
                  <li>Aplikasi WhatsApp akan terbuka otomatis dengan teks tersusun rapi.</li>
                  <li>Admin kami langsung membalas konfirmasi ketersediaan & total harga.</li>
                </ol>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 text-center">
              <a
                href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-950" />
                <span>Klik di sini untuk langsung chat sekarang</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
