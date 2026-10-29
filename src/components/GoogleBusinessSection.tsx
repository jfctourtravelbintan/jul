import React from 'react';
import { 
  MapPin, 
  Star, 
  ExternalLink, 
  CheckCircle, 
  Phone, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  MessageSquare,
  ThumbsUp
} from 'lucide-react';
import { BUSINESS_PROFILE, GOOGLE_REVIEWS_DATA } from '../data/bintanData';

export const GoogleBusinessSection: React.FC = () => {
  return (
    <section id="google-bisnis" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-200 mb-3 shadow-xs">
            {/* Google G Icon */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Terintegrasi Google Bisnis (Google Business Profile)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Map Lokasi & Profil Resmi JFC Tour & Travel Bintan
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Kepercayaan Anda adalah prioritas kami. Didukung rating <strong className="text-amber-600">4.9 / 5.0 dari 320+ ulasan nyata pelancong</strong> di Google Bisnis, kantor resmi yang jelas, serta legalitas pariwisata resmi.
          </p>
        </div>

        {/* Profile Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Google Business Profile Info Card */}
          <div className="lg:col-span-5 bg-stone-50 rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm space-y-6">
            
            {/* Business Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xl font-bold text-stone-950 font-display">
                    {BUSINESS_PROFILE.name}
                  </h3>
                  <span className="text-blue-600" title="Terverifikasi Google">
                    <CheckCircle className="w-5 h-5 fill-blue-600 text-white" />
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">Biro Perjalanan Wisata & Sewa Mobil Pulau Bintan</p>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-amber-700 font-bold text-sm">{BUSINESS_PROFILE.googleRating}</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500">
                    ({BUSINESS_PROFILE.totalReviews} Ulasan)
                  </span>
                </div>
              </div>

              <div className="w-12 h-12 bg-white rounded-2xl border border-stone-200 shadow-xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
            </div>

            {/* Address & Office Details */}
            <div className="space-y-3.5 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Kantor Utama Tanjung Pinang:</span>
                  <p className="text-stone-600 mt-0.5">{BUSINESS_PROFILE.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Meeting Point Kawasan Lagoi:</span>
                  <p className="text-stone-600 mt-0.5">{BUSINESS_PROFILE.branchLagoi}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Pos Penjemputan Tanjung Uban:</span>
                  <p className="text-stone-600 mt-0.5">{BUSINESS_PROFILE.branchTgUban}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Jam Operasional:</span>
                  <p className="text-stone-600 mt-0.5">{BUSINESS_PROFILE.operatingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Telepon / WhatsApp Resmi:</span>
                  <p className="text-stone-600 mt-0.5">{BUSINESS_PROFILE.whatsappFormatted}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons for Google Integration */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={BUSINESS_PROFILE.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Buka di Google Maps</span>
              </a>

              <a
                href={BUSINESS_PROFILE.googleReviewDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-stone-100 text-stone-800 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors border border-stone-300 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                <span>Tulis Ulasan Google</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Google Maps Embed */}
          <div className="lg:col-span-7 bg-stone-100 rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm relative min-h-[420px]">
            {/* Top Bar for Map */}
            <div className="bg-white px-4 py-2.5 border-b border-stone-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-stone-800">Map Navigasi Pulau Bintan (Lagoi - Tg Pinang - Tg Uban)</span>
              </div>
              <a
                href={BUSINESS_PROFILE.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 text-[11px]"
              >
                <span>Perbesar Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Iframe Google Maps Embed */}
            <iframe
              title="Lokasi JFC Tour & Travel Pulau Bintan"
              src={BUSINESS_PROFILE.googleMapsEmbedUrl}
              className="w-full h-[400px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Quick floating address badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-stone-200/90 shadow-md flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-stone-800 font-medium">
                  Titik jemput siap di Pelabuhan BBT Lagoi & Sri Bintan Pura
                </span>
              </div>
              <a
                href={BUSINESS_PROFILE.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] shrink-0"
              >
                Rute GPS
              </a>
            </div>
          </div>

        </div>

        {/* Google Reviews Showcase Section */}
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-display font-extrabold text-stone-900">
                  Ulasan Asli Pengunjung di Google Bisnis
                </h3>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  Rating 4.9 ★★★★★
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Pengalaman nyata wisatawan dari Singapura, Jakarta, Batam, dan Malaysia yang menggunakan jasa JFC Tour & Travel Bintan.
              </p>
            </div>

            <a
              href={BUSINESS_PROFILE.googleReviewDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs self-start sm:self-auto"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
              <span>Lihat Semua 328 Ulasan di Google</span>
            </a>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GOOGLE_REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-amber-200"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-xs text-stone-900 truncate">
                        {rev.author}
                      </h4>
                      <p className="text-[10px] text-stone-400 truncate">
                        {rev.origin}
                      </p>
                    </div>
                  </div>

                  {/* Stars & Date */}
                  <div className="flex items-center justify-between mb-2 text-[11px]">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400">{rev.date}</span>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed italic line-clamp-5">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[10px]">
                  <span className="text-stone-500 font-medium truncate">
                    Paket: {rev.tourTaken}
                  </span>
                  <span className="text-blue-600 font-bold shrink-0">✓ Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
