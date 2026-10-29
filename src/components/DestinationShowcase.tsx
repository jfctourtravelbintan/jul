import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Ticket, 
  ChevronRight, 
  X, 
  Sparkles, 
  Compass, 
  Camera, 
  CheckCircle2, 
  MessageCircle,
  Sun,
  ChevronLeft
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination, BUSINESS_PROFILE } from '../data/bintanData';

interface DestinationShowcaseProps {
  onOpenBookingModal: (preset?: { type?: 'tour' | 'car'; title?: string }) => void;
}

export const DestinationShowcase: React.FC<DestinationShowcaseProps> = ({ onOpenBookingModal }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');
  const [selectedTheme, setSelectedTheme] = useState<string>('Semua');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);

  const regions = ['Semua', 'Lagoi', 'Tanjung Pinang', 'Tanjung Uban'];
  const themes = ['Semua', 'Pantai & Bahari', 'Religi & Budaya', 'Gurun Pasir & Danau'];

  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchRegion = selectedRegion === 'Semua' || dest.region === selectedRegion;
    const matchTheme = selectedTheme === 'Semua' || dest.theme === selectedTheme;
    return matchRegion && matchTheme;
  });

  const openDestinationDetail = (dest: Destination) => {
    setActiveModalDest(dest);
    setModalPhotoIndex(0);
  };

  const getThemeBadgeColor = (theme: string) => {
    switch (theme) {
      case 'Pantai & Bahari':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Religi & Budaya':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Gurun Pasir & Danau':
        return 'bg-orange-50 text-orange-800 border-orange-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <section id="destinasi" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Destinasi Wisata Unggulan Pulau Bintan
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Eksplorasi 3 Kawasan Utama Bintan
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Dari kemewahan resor dan pantai pasir putih <strong className="text-teal-700">Kawasan Lagoi</strong>, napak tilas sejarah & vihara megah di <strong className="text-amber-700">Tanjung Pinang</strong>, hingga fenomena eksotis bukit <strong className="text-orange-700">Gurun Pasir Busung & Sleeping Buddha di Tanjung Uban</strong>.
          </p>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <span className="text-xs font-semibold text-stone-400 mr-1 hidden sm:inline">Kawasan:</span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {region === 'Semua' ? '✨ Semua Kawasan' : `📍 ${region}`}
              </button>
            ))}
          </div>

          {/* Theme Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <span className="text-xs font-semibold text-stone-400 mr-1 hidden sm:inline">Nuansa:</span>
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedTheme === theme
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {theme === 'Semua' ? 'Semua Nuansa' : theme}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Showcase / Main Header Image */}
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  src={dest.photos[0].url}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                
                {/* Region & Tag badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-stone-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-xs">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {dest.region}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-xs ${getThemeBadgeColor(dest.theme)}`}>
                    {dest.theme}
                  </span>
                </div>

                {/* Multiple photos count indicator */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-medium px-2 py-1 rounded-md backdrop-blur-xs flex items-center gap-1">
                  <Camera className="w-3 h-3 text-amber-300" />
                  <span>{dest.photos.length} Foto</span>
                </div>

                {/* Destination Name at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold text-amber-300 tracking-wide uppercase">
                    {dest.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold leading-snug drop-shadow-sm">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Photo Thumbnail Strip */}
              {dest.photos.length > 1 && (
                <div className="bg-stone-100 px-3 py-2 border-b border-stone-200 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider shrink-0">Galeri:</span>
                  {dest.photos.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => {
                        setActiveModalDest(dest);
                        setModalPhotoIndex(pIdx);
                      }}
                      className="w-12 h-9 rounded-md overflow-hidden shrink-0 border border-stone-300 hover:border-amber-500 transition-colors cursor-pointer"
                      title={photo.caption}
                    >
                      <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <button
                    onClick={() => openDestinationDetail(dest)}
                    className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 ml-auto shrink-0 flex items-center"
                  >
                    +Lihat Semua
                  </button>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {dest.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-4">
                    {dest.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-500">
                    <div className="flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-amber-600" />
                      <span>{dest.ticketInfo}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>Waktu Terbaik: {dest.bestTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 mt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openDestinationDetail(dest)}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-2 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Detail & Foto</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(`Halo JFC Tour Bintan, saya ingin berkunjung ke destinasi: ${dest.name} (${dest.region}). Mohon info paket tour dan rental mobilnya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Booking WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal: Full Destination Photo Gallery & Details */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 animate-scaleUp">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalDest(null)}
              className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-900 text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Slider */}
            <div className="relative h-72 sm:h-96 bg-stone-900">
              <img
                src={activeModalDest.photos[modalPhotoIndex].url}
                alt={activeModalDest.photos[modalPhotoIndex].caption}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Prev / Next controls */}
              {activeModalDest.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setModalPhotoIndex((prev) => (prev > 0 ? prev - 1 : activeModalDest.photos.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setModalPhotoIndex((prev) => (prev < activeModalDest.photos.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded mr-2">
                  Foto {modalPhotoIndex + 1} dari {activeModalDest.photos.length}
                </span>
                <p className="text-xs sm:text-sm font-medium mt-1 drop-shadow-md">
                  {activeModalDest.photos[modalPhotoIndex].caption}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[50vh] overflow-y-auto">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-stone-900 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Kawasan {activeModalDest.region}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getThemeBadgeColor(activeModalDest.theme)}`}>
                    {activeModalDest.theme}
                  </span>
                  <span className="text-xs text-stone-500">
                    📍 {activeModalDest.locationName}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-stone-900">
                  {activeModalDest.name}
                </h3>
              </div>

              {/* Detailed Description */}
              <div className="text-stone-700 text-sm leading-relaxed space-y-3">
                <p>{activeModalDest.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Daya Tarik & Aktivitas Utama:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeModalDest.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                    <Ticket className="w-3.5 h-3.5 text-amber-700" />
                    Informasi Tiket & Biaya:
                  </span>
                  <p className="text-amber-800">{activeModalDest.ticketInfo}</p>
                </div>
                <div className="bg-teal-50/70 p-3 rounded-lg border border-teal-200">
                  <span className="font-bold text-teal-900 flex items-center gap-1 mb-1">
                    <Sun className="w-3.5 h-3.5 text-teal-700" />
                    Waktu Kunjungan Terbaik:
                  </span>
                  <p className="text-teal-800">{activeModalDest.bestTime}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-600 text-center sm:text-left">
                Ingin memasukkan <strong>{activeModalDest.name}</strong> ke rencana tour Anda?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveModalDest(null);
                    onOpenBookingModal({ type: 'tour', title: `Kunjungan ke ${activeModalDest.name}` });
                  }}
                  className="w-full sm:w-auto bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Rancang Itinerary Custom
                </button>
                <a
                  href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent(`Halo JFC Tour & Travel Bintan, saya ingin pesan tour ke ${activeModalDest.name} (${activeModalDest.region}). Bagaimana estimasi jadwal dan biayanya?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
