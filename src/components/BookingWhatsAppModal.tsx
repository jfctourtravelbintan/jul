import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, Calendar, Users, MapPin, Car, Sparkles, User, PhoneCall, ShieldCheck } from 'lucide-react';
import { BUSINESS_PROFILE, TOUR_PACKAGES, CAR_RENTAL_DATA, PICKUP_POINTS } from '../data/bintanData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preset?: {
    type?: 'tour' | 'car';
    title?: string;
  };
}

export const BookingWhatsAppModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preset }) => {
  const [serviceType, setServiceType] = useState<'tour' | 'car'>('tour');
  const [selectedTour, setSelectedTour] = useState(TOUR_PACKAGES[0].title);
  const [selectedCar, setSelectedCar] = useState(CAR_RENTAL_DATA[0].model);
  const [travelDate, setTravelDate] = useState('');
  const [paxCount, setPaxCount] = useState('2-4 Orang');
  const [pickupPoint, setPickupPoint] = useState(PICKUP_POINTS[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preset?.type) {
      setServiceType(preset.type);
    }
    if (preset?.title) {
      if (preset.type === 'tour') {
        setSelectedTour(preset.title);
      } else if (preset.type === 'car') {
        setSelectedCar(preset.title);
      }
    }
  }, [preset]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = serviceType === 'tour' ? `Paket Tour: ${selectedTour}` : `Sewa Mobil: ${selectedCar}`;
    const text = `Halo *JFC Tour & Travel Bintan*, saya ingin reservasi:

*Layanan:* ${serviceName}
*Tanggal:* ${travelDate || 'Segera'}
*Jumlah Peserta / Durasi:* ${paxCount}
*Titik Jemput:* ${pickupPoint}
*Nama:* ${name || '(Tamu)'}
*WhatsApp:* ${phone || '-'}
*Catatan:* ${notes || 'Mohon cek jadwal dan total estimasinya.'}

Terima kasih!`;

    const url = `https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 cursor-pointer transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast WhatsApp Booking</span>
          </div>
          <h3 className="text-2xl font-display font-bold">
            Reservasi Cepat JFC Tour & Travel Bintan
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Isi rincian di bawah untuk langsung terhubung dengan admin WhatsApp resmi kami.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-stone-950 rounded-xl mb-4 text-xs font-bold border border-stone-800">
          <button
            type="button"
            onClick={() => setServiceType('tour')}
            className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
              serviceType === 'tour' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paket Tour Wisata</span>
          </button>
          <button
            type="button"
            onClick={() => setServiceType('car')}
            className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
              serviceType === 'car' ? 'bg-teal-600 text-white shadow-xs' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Rental Mobil</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {serviceType === 'tour' ? (
            <div>
              <label className="block text-stone-300 font-semibold mb-1">Pilih Paket Wisata:</label>
              <select
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
              >
                {TOUR_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.title}>
                    [{pkg.type}] {pkg.title}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className="block text-stone-300 font-semibold mb-1">Pilih Unit Kendaraan:</label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-teal-500 text-xs"
              >
                {CAR_RENTAL_DATA.map((car) => (
                  <option key={car.id} value={car.model}>
                    {car.model} ({car.seats} Seats)
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-400" /> Tanggal:
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                required
              />
            </div>
            <div>
              <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-teal-400" /> Pax / Durasi:
              </label>
              <input
                type="text"
                value={paxCount}
                onChange={(e) => setPaxCount(e.target.value)}
                placeholder="Contoh: 4 Orang / 2 Hari"
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" /> Titik Penjemputan di Bintan:
            </label>
            <select
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
            >
              {PICKUP_POINTS.map((pt, i) => (
                <option key={i} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-amber-400" /> Nama Anda:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                required
              />
            </div>
            <div>
              <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1">
                <PhoneCall className="w-3 h-3 text-emerald-400" /> Nomor WhatsApp:
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812-xxxx-xxxx"
                className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-500 text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-semibold mb-1">Catatan Tambahan (Opsional):</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Misal: Jam ketibaan ferry dari Singapura / Batam..."
              className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-1.5 text-white focus:outline-hidden focus:border-amber-500 text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-xs mt-2"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Pemesanan ke WhatsApp</span>
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-center gap-2 text-[11px] text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>JFC Tour & Travel Bintan • Terverifikasi Google Bisnis</span>
        </div>

      </div>
    </div>
  );
};
