import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Car, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/bintanData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Brand Profile & Google Business Credential */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-stone-950 rounded-[10px] flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-black tracking-widest text-amber-500 leading-none">JFC</span>
                  <span className="text-[9px] font-bold text-teal-400 tracking-tighter">BINTAN</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white">
                  JFC Tour & Travel Bintan
                </h3>
                <p className="text-xs text-stone-400">
                  PT. JFC Bintan Wisata Bahari Nusantara
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Biro perjalanan wisata resmi dan penyedia jasa rental mobil terpercaya di Pulau Bintan. Melayani Private Tour, Group Gathering, Antar-Jemput Pelabuhan Ferry BBT Lagoi & Sri Bintan Pura, serta rental mobil harian, mingguan, dan bulanan.
            </p>

            {/* Google Business Badge */}
            <div className="bg-stone-900 p-3 rounded-2xl border border-stone-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white block text-[11px]">Terverifikasi Google Bisnis</span>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span><strong>4.9 / 5.0</strong> (328 Ulasan Pelancong)</span>
                  </div>
                </div>
              </div>
              <a
                href={BUSINESS_PROFILE.googleReviewDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] bg-stone-800 hover:bg-stone-700 text-stone-200 px-2.5 py-1.5 rounded-lg font-bold"
              >
                Ulas Kami
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NIB Resmi Pariwisata
              </span>
              <span>•</span>
              <span>Standby 24 Jam</span>
            </div>
          </div>

          {/* Col 3: Destinasi Populer */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-500" />
              Destinasi Bintan
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Treasure Bay Crystal Lagoon</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Pantai & Plaza Lagoi Bay</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Gurun Pasir & Danau Biru Busung</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Sleeping Buddha Vihara Tg Uban</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Pulau Penyengat & Masjid Sultan</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Vihara Kwan Im 1000 Tangan</a></li>
              <li><a href="#destinasi" className="hover:text-amber-400 transition-colors">Mangrove Discovery & Fireflies</a></li>
            </ul>
          </div>

          {/* Col 4: Layanan & Paket */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Car className="w-4 h-4 text-teal-400" />
              Paket & Rental
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#paket-tour" className="hover:text-teal-300 transition-colors">Bintan Iconic 1-Day Tour</a></li>
              <li><a href="#paket-tour" className="hover:text-teal-300 transition-colors">Heritage & Religi Penyengat</a></li>
              <li><a href="#paket-tour" className="hover:text-teal-300 transition-colors">Pesona Bintan Eksotis 2D1N</a></li>
              <li><a href="#rental-mobil" className="hover:text-teal-300 transition-colors">Rental Mobil Harian + BBM</a></li>
              <li><a href="#rental-mobil" className="hover:text-teal-300 transition-colors">Rental Mobil Mingguan (Diskon)</a></li>
              <li><a href="#rental-mobil" className="hover:text-teal-300 transition-colors">Rental Bulanan Kontrak Dinas</a></li>
              <li><a href="#rental-mobil" className="hover:text-teal-300 transition-colors">Sewa Toyota Hiace Rombongan</a></li>
            </ul>
          </div>

          {/* Col 5: Kontak & Alamat Kantor */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-400" />
              Kontak Kantor JFC
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_PROFILE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_PROFILE.phone}`} className="hover:text-white">
                  {BUSINESS_PROFILE.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_PROFILE.email}`} className="hover:text-white">
                  {BUSINESS_PROFILE.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour Bintan, saya butuh bantuan informasi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-2 rounded-xl text-xs shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat WhatsApp CS</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} JFC Tour & Travel Bintan. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#destinasi" className="hover:text-stone-300">Kawasan Lagoi</a>
            <span>•</span>
            <a href="#destinasi" className="hover:text-stone-300">Tanjung Pinang</a>
            <span>•</span>
            <a href="#destinasi" className="hover:text-stone-300">Tanjung Uban & Busung</a>
            <span>•</span>
            <a href="#google-bisnis" className="hover:text-stone-300">Profil Google Bisnis</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
