import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/bintanData';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'Bagaimana prosedur penjemputan di Pelabuhan Ferry BBT Lagoi atau Sri Bintan Pura?',
    a: 'Supir tim JFC Tour & Travel Bintan akan standby 15-30 menit sebelum jadwal kedatangan kapal Anda di lobi kedatangan pelabuhan dengan membawa nameboard bertuliskan nama pemesan. Kami juga akan mengontak Anda via WhatsApp sesaat sebelum kapal bersandar.'
  },
  {
    q: 'Apakah harga paket tour sudah termasuk tiket masuk ke objek wisata?',
    a: 'Ya, seluruh paket tour standar kami sudah mencakup tiket masuk objek wisata utama seperti Gurun Pasir Busung, Telaga Biru, boat pompong ke Pulau Penyengat, dan becak motor. Untuk tiket wahana khusus seperti Treasure Bay Crystal Lagoon, tersedia opsi All-In atau tiket dapat dibeli di lokasi sesuai kebutuhan aktivitas Anda.'
  },
  {
    q: 'Bagaimana sistem pembayaran pemesanan tour atau rental mobil?',
    a: 'Pemesanan cukup dengan DP (Down Payment) ringan 20-30% sebagai tanda jadi penguncian unit armada mobil dan supir. Sisa pembayaran dapat dilunasi saat bertemu dengan driver kami di Bintan, baik secara tunai (IDR/SGD) maupun transfer bank.'
  },
  {
    q: 'Apakah jadwal perjalanan (itinerary) bisa diubah atau disesuaikan (custom)?',
    a: 'Sangat bisa! Seluruh Private Tour kami bersifat fleksibel (Private Tour). Anda bebas meminta berhenti di restoran seafood favorit (seperti Sei Enam Tanjung Pinang / Kelong Mangrove), mampir toko oleh-oleh otak-otak gonggong, atau memperpanjang waktu berfoto di destinasi pilihan Anda.'
  },
  {
    q: 'Untuk rental mobil harian, apakah sudah termasuk supir dan bahan bakar (BBM)?',
    a: 'Benar sekali. Mayoritas paket harian kami adalah paket All-In (Mobil + Supir Ramah + BBM) dengan durasi 12 hingga 14 jam per hari. Anda tidak perlu memikirkan isi bensin atau repot mencari rute jalan di Pulau Bintan.'
  },
  {
    q: 'Bagaimana jika kapal ferry atau penerbangan kami mengalami delay?',
    a: 'Jangan khawatir. Tim customer service dan driver JFC Tour & Travel selalu memantau status jadwal pelayaran dan penerbangan secara real-time. Penjemputan akan otomatis disesuaikan tanpa biaya denda keterlambatan.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Tanya Jawab Seputar Wisata Bintan
          </div>
          <h2 className="text-3xl font-display font-extrabold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            Semua yang perlu Anda ketahui sebelum merencanakan liburan di Pulau Bintan bersama kami.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all bg-stone-50/50 hover:bg-stone-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-stone-900">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-amber-700">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Ada Pertanyaan Lain yang Belum Terjawab?</h4>
            <p className="text-xs text-stone-600 mt-0.5">Admin kami siap menjawab konsultasi rute dan perhitungan harga Anda.</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo JFC Tour Bintan, saya ada pertanyaan mengenai rencana liburan kami.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Chat WhatsApp Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};
