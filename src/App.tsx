/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationShowcase } from './components/DestinationShowcase';
import { TourPackages } from './components/TourPackages';
import { CarRental } from './components/CarRental';
import { WhatsAppBookingSection } from './components/WhatsAppBookingSection';
import { GoogleBusinessSection } from './components/GoogleBusinessSection';
import { TravelGuide } from './components/TravelGuide';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingWhatsAppModal } from './components/BookingWhatsAppModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Compass, Palmtree, Landmark, Sun, Star, ShieldCheck, Car, Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from './data/bintanData';

export default function App() {
  const [currency, setCurrency] = useState<'IDR' | 'SGD'>('IDR');
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    preset?: { type?: 'tour' | 'car'; title?: string };
  }>({
    isOpen: false,
    preset: undefined,
  });

  const handleCurrencyToggle = () => {
    setCurrency((prev) => (prev === 'IDR' ? 'SGD' : 'IDR'));
  };

  const handleOpenBookingModal = (preset?: { type?: 'tour' | 'car'; title?: string }) => {
    setBookingModal({
      isOpen: true,
      preset,
    });
  };

  const handleCloseBookingModal = () => {
    setBookingModal({
      isOpen: false,
      preset: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        currency={currency}
        onCurrencyToggle={handleCurrencyToggle}
        onOpenBookingModal={handleOpenBookingModal}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBookingModal={handleOpenBookingModal}
          onSelectCategory={(cat) => {
            const destEl = document.getElementById('destinasi');
            destEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3 Iconic Thematic Pillars Banner (Pantai, Religi, Gurun Pasir) */}
        <section className="bg-stone-900 text-white py-8 border-y border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1: Pantai Tropis */}
              <div className="flex items-center gap-4 bg-stone-950/60 p-4 rounded-2xl border border-stone-800/80">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
                  <Palmtree className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Kawasan Lagoi</span>
                  <h4 className="font-display font-bold text-base text-white">Nuansa Pantai Tropis</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Crystal Lagoon, Pasir Putih Lagoi & Mangrove</p>
                </div>
              </div>

              {/* Pillar 2: Wisata Religi & Budaya */}
              <div className="flex items-center gap-4 bg-stone-950/60 p-4 rounded-2xl border border-stone-800/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Tanjung Pinang & Uban</span>
                  <h4 className="font-display font-bold text-base text-white">Nuansa Religi & Sejarah</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Masjid Penyengat, Kwan Im & Sleeping Buddha</p>
                </div>
              </div>

              {/* Pillar 3: Gurun Pasir & Danau Biru */}
              <div className="flex items-center gap-4 bg-stone-950/60 p-4 rounded-2xl border border-stone-800/80">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-300 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">Desa Busung</span>
                  <h4 className="font-display font-bold text-base text-white">Nuansa Gurun Pasir</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Bukit Pasir Sahara Mini & Telaga Biru Toska</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Destinasi Wisata Showcase (Lagoi, Tanjung Pinang, Tanjung Uban) */}
        <DestinationShowcase onOpenBookingModal={handleOpenBookingModal} />

        {/* Pilihan Paket Tour Private & Group */}
        <TourPackages currency={currency} onOpenBookingModal={handleOpenBookingModal} />

        {/* Rental Mobil Harian, Mingguan, Bulanan */}
        <CarRental currency={currency} onOpenBookingModal={handleOpenBookingModal} />

        {/* Form Booking WhatsApp Terintegrasi */}
        <WhatsAppBookingSection />

        {/* Integrasi Google Bisnis & Map Lokasi JFC Tour */}
        <GoogleBusinessSection />

        {/* Panduan Ferry Singapura & Batam */}
        <TravelGuide />

        {/* Tanya Jawab (FAQ) */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pop-up Booking Modal */}
      <BookingWhatsAppModal
        isOpen={bookingModal.isOpen}
        onClose={handleCloseBookingModal}
        preset={bookingModal.preset}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
