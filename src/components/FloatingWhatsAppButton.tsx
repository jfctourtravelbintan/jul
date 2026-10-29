import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/bintanData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-stone-900 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2 max-w-xs animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span className="font-medium">
            Butuh info tour Bintan atau sewa mobil? <strong>Chat CS kami di sini!</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo Admin JFC Tour & Travel Bintan! Saya ingin tanya paket wisata Lagoi, Tanjung Pinang, Tanjung Uban atau sewa mobil.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group relative border-2 border-white"
        aria-label="Hubungi WhatsApp JFC Tour & Travel"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
        
        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
