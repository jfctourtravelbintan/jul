import React from 'react';
import { 
  Ship, 
  Plane, 
  Compass, 
  Sun, 
  HeartHandshake, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Info
} from 'lucide-react';

export const TravelGuide: React.FC = () => {
  return (
    <section id="panduan-ferry" className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-amber-600" />
            Panduan Perjalanan Wisatawan
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Cara Menuju Pulau Bintan & Tips Wisata
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Panduan lengkap rute penyeberangan ferry dari Singapura & Batam, akses udara dari Jakarta, serta tips berbusana di objek wisata religi dan gurun pasir.
          </p>
        </div>

        {/* 3 Main Transport Routes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Route 1: Dari Singapura */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Ship className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-stone-900">Dari Singapura</h3>
                <span className="text-[11px] font-bold bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">60 Menit</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Naik kapal ferry dari <strong>Tanah Merah Ferry Terminal (TMFT) Singapura</strong> langsung menuju <strong>Bandar Bentan Telani (BBT) Ferry Terminal di Kawasan Lagoi</strong>.
              </p>
              
              <ul className="space-y-1.5 text-xs text-stone-700 border-t border-stone-100 pt-3">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>Operator: Bintan Resort Ferries</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>JFC Tour siap jemput langsung di gate BBT</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>Bebas Visa bagi paspor ASEAN / VoA</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-teal-800 font-semibold flex items-center gap-1">
              <span>Titik jemput utama wisatawan asing</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Route 2: Dari Batam */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Ship className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-stone-900">Dari Pulau Batam</h3>
                <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">15 - 45 Menit</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Dari <strong>Pelabuhan Telaga Punggur Batam</strong> ke Bintan ada 2 pilihan pintu masuk:
              </p>
              
              <ul className="space-y-1.5 text-xs text-stone-700 border-t border-stone-100 pt-3">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Speedboat ke Tanjung Uban (hanya 15 menit, jalan tiap 15 menit)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Ferry ke Sri Bintan Pura Tanjung Pinang (60 menit)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Kapal Roro ASDP Punggur - Tanjung Uban</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-semibold flex items-center gap-1">
              <span>Sangat dekat & banyak jadwal penyeberangan</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Route 3: Dari Jakarta / Luar Kota (Udara) */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Plane className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-stone-900">Penerbangan Udara</h3>
                <span className="text-[11px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Direct Flight</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Terbang ke <strong>Bandara Raja Haji Fisabilillah (RHF) Tanjung Pinang</strong> atau lewat <strong>Bandara Hang Nadim Batam</strong> kemudian disambung speedboat.
              </p>
              
              <ul className="space-y-1.5 text-xs text-stone-700 border-t border-stone-100 pt-3">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Garuda / Batik Air tujuan Tanjung Pinang</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Layanan antar-jemput bandara RHF standby</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Bisa langsung mulai city tour Tanjung Pinang</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-blue-800 font-semibold flex items-center gap-1">
              <span>Armada mobil standby sebelum pesawat mendarat</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

        </div>

        {/* Thematic Travel Etiquette & Tips (Pantai, Religi, Gurun Pasir) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-teal-900 text-white rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-teal-700/30 rounded-full blur-xl" />
            <span className="text-[11px] font-bold tracking-wider text-teal-300 uppercase block mb-1">
              Tips Wisata Pantai & Lagoi
            </span>
            <h4 className="font-display font-bold text-lg mb-3">Pesona Tropis Bahari</h4>
            <ul className="space-y-2 text-xs text-teal-100">
              <li>• Bawa pakaian renang & pakaian ganti saat berkunjung ke Treasure Bay Crystal Lagoon.</li>
              <li>• Siapkan sunblock/tabir surya dan topi pantai.</li>
              <li>• Nikmati sunset romantis di Lagoi Bay pukul 17:30 - 18:30 WIB.</li>
            </ul>
          </div>

          <div className="bg-amber-900 text-white rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-700/30 rounded-full blur-xl" />
            <span className="text-[11px] font-bold tracking-wider text-amber-300 uppercase block mb-1">
              Etika Wisata Religi & Budaya
            </span>
            <h4 className="font-display font-bold text-lg mb-3">Penyengat & Vihara Kwan Im</h4>
            <ul className="space-y-2 text-xs text-amber-100">
              <li>• Kenakan pakaian sopan (menutup aurat/lengan & lutut) saat ziarah Masjid Sultan Riau di Pulau Penyengat.</li>
              <li>• Vihara Avalokitesvara Graha dan Sleeping Buddha Tanjung Uban adalah tempat ibadah aktif, jaga ketenangan saat berfoto.</li>
              <li>• Disediakan kain sarung/penutup di lokasi bila diperlukan.</li>
            </ul>
          </div>

          <div className="bg-stone-900 text-white rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-stone-700/30 rounded-full blur-xl" />
            <span className="text-[11px] font-bold tracking-wider text-yellow-400 uppercase block mb-1">
              Tips Gurun Pasir & Telaga Biru
            </span>
            <h4 className="font-display font-bold text-lg mb-3">Eksotisme Pasir Busung</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>• Gunakan kacamata hitam (sunglasses) karena pantulan sinar matahari pada pasir gurun cukup terang.</li>
              <li>• Waktu terbaik foto golden hour adalah pagi (08.00 - 10.00) atau sore (16.00 - 17.30).</li>
              <li>• Kenakan alas kaki yang nyaman melangkah di perbukitan pasir bergelombang.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
