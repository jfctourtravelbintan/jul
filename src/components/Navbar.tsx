import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Compass, 
  Car, 
  Calendar, 
  Star, 
  Menu, 
  X, 
  MessageCircle, 
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/bintanData';

interface NavbarProps {
  currency: 'IDR' | 'SGD';
  onCurrencyToggle: () => void;
  onOpenBookingModal: (preset?: { type?: 'tour' | 'car'; title?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currency, 
  onCurrencyToggle, 
  onOpenBookingModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100/80 shadow-xs transition-all">
      {/* Top Bar: Google Bisnis Rating & Operational Hours */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-teal-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-medium bg-amber-900/40 px-2 py-0.5 rounded-full border border-amber-300/30">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Google Bisnis <strong>4.9/5.0</strong> (328+ Ulasan)</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-amber-100">
              <Clock className="w-3 h-3 text-amber-200" />
              <span>Standby 24 Jam Antar-Jemput Pelabuhan & Bandara</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour & Travel Bintan, saya ingin konsultasi wisata/rental mobil.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_PROFILE.whatsappFormatted}</span>
            </a>
            <div className="h-3 w-px bg-amber-400/40 hidden sm:block"></div>
            {/* Currency Selector */}
            <button
              onClick={onCurrencyToggle}
              className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider transition-colors cursor-pointer"
              title="Ganti Mata Uang"
            >
              <span>Mata Uang:</span>
              <span className="text-amber-200 uppercase font-bold">{currency}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="cursor-pointer flex items-center gap-3 group"
            style={{ width: '270.094px' }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-teal-600 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center justify-center text-center p-1">
                <span className="text-xs font-black tracking-widest text-amber-600 leading-none">JFC</span>
                <span className="text-[9px] font-bold text-teal-700 tracking-tighter">BINTAN</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span 
                  className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors inline-block"
                  style={{ width: '194.344px' }}
                >
                  JFC Tour & Travel
                </span>
                <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-1.5 py-0.5 rounded-full border border-teal-200 hidden sm:inline-block">
                  Bintan
                </span>
              </div>
              <p 
                className="text-xs text-stone-500 tracking-tight font-medium hidden sm:block"
                style={{ width: '210.109px' }}
              >
                Lagoi • Tanjung Pinang • Tanjung Uban • Rental Mobil
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            <button 
              onClick={() => handleNavClick('destinasi')}
              className="text-stone-700 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              Destinasi Wisata
            </button>

            <button 
              onClick={() => handleNavClick('paket-tour')}
              className="text-stone-700 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Paket Tour
            </button>

            <button 
              onClick={() => handleNavClick('rental-mobil')}
              className="text-stone-700 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <Car className="w-4 h-4 text-amber-500" />
              Rental Mobil
            </button>

            <button 
              onClick={() => handleNavClick('google-bisnis')}
              className="text-stone-700 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              Lokasi & Google Bisnis
            </button>

            <button 
              onClick={() => handleNavClick('panduan-ferry')}
              className="text-stone-700 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer"
            >
              Panduan Ferry
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-stone-100 hover:bg-stone-200 text-stone-800 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border border-stone-200 cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Hitung Estimasi</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo Admin JFC Tour & Travel Bintan! Saya tertarik booking tour / sewa mobil di Pulau Bintan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm hover:shadow flex items-center gap-2 group"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Booking via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onCurrencyToggle}
              className="bg-stone-100 px-2 py-1 rounded text-xs font-bold text-amber-700 border border-stone-200"
            >
              {currency}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-1 gap-2 pt-1 pb-3 border-b border-stone-100">
            <button
              onClick={() => handleNavClick('destinasi')}
              className="flex items-center justify-between p-2.5 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-800 font-medium text-left"
            >
              <span className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-amber-600" />
                Destinasi Wisata Bintan
              </span>
              <span className="text-xs text-stone-400">Lagoi, Tg Pinang, Tg Uban</span>
            </button>

            <button
              onClick={() => handleNavClick('paket-tour')}
              className="flex items-center justify-between p-2.5 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-800 font-medium text-left"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Paket Tour Private & Group
              </span>
              <span className="text-xs text-amber-600 font-semibold">1D, 2D1N, 3D2N</span>
            </button>

            <button
              onClick={() => handleNavClick('rental-mobil')}
              className="flex items-center justify-between p-2.5 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-800 font-medium text-left"
            >
              <span className="flex items-center gap-2.5">
                <Car className="w-4 h-4 text-amber-600" />
                Rental Mobil Bintan
              </span>
              <span className="text-xs text-stone-400">Harian, Mingguan, Bulanan</span>
            </button>

            <button
              onClick={() => handleNavClick('google-bisnis')}
              className="flex items-center justify-between p-2.5 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-800 font-medium text-left"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                Lokasi & Google Bisnis
              </span>
              <span className="text-xs text-amber-700 font-bold">⭐ 4.9 (328 Ulasan)</span>
            </button>

            <button
              onClick={() => handleNavClick('panduan-ferry')}
              className="flex items-center gap-2.5 p-2.5 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-800 font-medium text-left"
            >
              <span>Panduan Ferry Singapura & Batam</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg text-sm font-bold shadow-xs text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Kalkulator & Form Booking WhatsApp
            </button>
            <a
              href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour & Travel Bintan, saya ingin konsultasi paket wisata.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-bold shadow-xs text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              Chat Langsung via WhatsApp ({BUSINESS_PROFILE.whatsappFormatted})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
