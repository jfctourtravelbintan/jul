export interface Destination {
  id: string;
  name: string;
  region: 'Lagoi' | 'Tanjung Pinang' | 'Tanjung Uban';
  theme: 'Pantai & Bahari' | 'Religi & Budaya' | 'Gurun Pasir & Danau';
  shortDesc: string;
  description: string;
  highlights: string[];
  photos: {
    url: string;
    caption: string;
  }[];
  ticketInfo: string;
  bestTime: string;
  locationName: string;
  tag: string;
}

export interface TourPackage {
  id: string;
  title: string;
  type: 'Private' | 'Group';
  duration: string;
  tagline: string;
  minPax: number;
  priceIdr: number;
  priceSgd: number;
  priceUnit: string;
  featured?: boolean;
  bannerImg: string;
  destinationsCovered: string[];
  itinerary: {
    time: string;
    activity: string;
    desc: string;
  }[];
  includes: string[];
  excludes: string[];
  recommendation: string;
}

export interface CarRentalItem {
  id: string;
  model: string;
  brand: string;
  category: 'MPV' | 'SUV' | 'Van' | 'Luxury';
  seats: number;
  luggage: number;
  transmission: 'Automatic' | 'Manual';
  image: string;
  dailyWithDriverPriceIdr: number;
  dailySelfDrivePriceIdr: number;
  weeklyPriceIdr: number;
  monthlyPriceIdr: number;
  features: string[];
  fuelIncludedDaily: boolean;
  driverIncludedDaily: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  avatar: string;
  comment: string;
  tourTaken: string;
  badge?: string;
}

export const DESTINATIONS_DATA: Destination[] = [
  // KAWASAN LAGOI
  {
    id: 'treasure-bay-lagoi',
    name: 'Treasure Bay Crystal Lagoon',
    region: 'Lagoi',
    theme: 'Pantai & Bahari',
    tag: 'Ikonik Lagoi',
    shortDesc: 'Kolam air asin buatan manusia terbesar di Asia Tenggara dengan luas 6,3 hektar berair kristal toska.',
    description: 'Treasure Bay Bintan menawarkan Crystal Lagoon spektakuler di mana air laut disaring menjadi jernih toska. Anda dapat menikmati puluhan wahana air seru seperti kayak transparan, paddle boat, slip and slide, ATV offroad tepi lagoon, hingga solar boat yang ramah lingkungan.',
    highlights: [
      'Lagoon air asin terbesar di Asia Tenggara (6.3 Ha)',
      'Water sports seru: Kayak bening, Cable Ski, Jetovator',
      'Spot foto tepi kolam dengan pasir putih halus',
      'Penyewaan ATV, Scooter listrik & segway keliling kawasan'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Panorama air biru kristal bening Crystal Lagoon Treasure Bay'
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hamparan tepi pantai dan gazebo bersantai keluarga'
      },
      {
        url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wahana kayak dan olahraga air ramah anak'
      }
    ],
    ticketInfo: 'Mulai Rp 180.000 / $18 SGD (Tiket masuk dasar & akses berenang)',
    bestTime: '09.00 - 16.00 WIB (Sinar matahari cerah untuk foto toska)',
    locationName: 'Kawasan Wisata Terpadu Lagoi, Bintan Utara'
  },
  {
    id: 'lagoi-bay-beach',
    name: 'Pantai Lagoi Bay & Plaza Lagoi',
    region: 'Lagoi',
    theme: 'Pantai & Bahari',
    tag: 'Pantai Pasir Putih',
    shortDesc: 'Pantai pasir putih eksklusif dengan ombak tenang, deretan kafe tepi laut, dan Bintan Lantern Park.',
    description: 'Pantai Lagoi Bay merupakan area publik premium di jantung Bintan Resorts. Pantai ini terkenal dengan pasir putihnya yang sangat lembut, air laut jernih, spot foto tulisan "LAGOI BAY", serta Bintan Lantern Park dengan lampion satwa laut yang menyala cantik di malam hari.',
    highlights: [
      'Akses gratis ke pantai pasir putih bersih & terawat',
      'Spot foto ikonik Love Lock & Landmark Lagoi Bay',
      'Plaza Lagoi: Kuliner lokal, kafe kelapa muda & toko cinderamata',
      'Suasana senja dan sunset tepi Selat Riau yang romantis'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
        caption: 'Kelembutan pasir putih dan deretan pohon kelapa Pantai Lagoi'
      },
      {
        url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sunset keemasan di bibir pantai Lagoi Bay'
      }
    ],
    ticketInfo: 'Gratis akses pantai (Wahana & Lantern Park opsional)',
    bestTime: '15.30 - 18.30 WIB (Momen sunset paling menawan)',
    locationName: 'Lagoi Bay, Teluk Sebong, Bintan'
  },
  {
    id: 'bintan-mangrove-tour',
    name: 'Bintan Mangrove Discovery & Firefly Tour',
    region: 'Lagoi',
    theme: 'Pantai & Bahari',
    tag: 'Ekowisata Alami',
    shortDesc: 'Menyusuri Sungai Sebung melewati hutan bakau berusia ratusan tahun dan pertunjukan kunang-kunang malam.',
    description: 'Petualangan menyusuri ekosistem mangrove Sungai Sebung dengan speedboat. Pada siang hari Anda bisa melihat ular pohon bakau, monyet liar, dan kepiting lumpur. Pada malam hari, tur berubah menjadi pengalaman magis di mana ribuan kunang-kunang menerangi pepohonan bakau bagai pohon natal alami.',
    highlights: [
      'Tur perahu 60 menit menyusuri rimbunnya hutan bakau purba',
      'Melihat fauna liar asli Bintan dalam habitat alaminya',
      'Pilihan Night Firefly Tour melihat kerlap-kerlip ribuan kunang-kunang',
      'Didampingi pemandu lokal berlisensi dan jaket pelampung standar'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
        caption: 'Menyusuri sungai mangrove purba Sebung dengan speedboat'
      },
      {
        url: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Suasana magis malam hari berburu kunang-kunang bercahaya'
      }
    ],
    ticketInfo: 'Mulai Rp 350.000 / orang (Sudah termasuk boat, guide & life jacket)',
    bestTime: 'Siang 10.00 - 14.00 WIB atau Malam Kunang-kunang 19.00 WIB',
    locationName: 'Sungai Sebung, Perbatasan Lagoi, Bintan'
  },
  {
    id: 'safari-lagoi-eco-farm',
    name: 'Safari Lagoi & Eco Farm Bintan',
    region: 'Lagoi',
    theme: 'Pantai & Bahari',
    tag: 'Wisata Edukasi Keluarga',
    shortDesc: 'Pusat konservasi satwa langka Indonesia dan kebun buah tropis organik.',
    description: 'Tempat pelestarian satwa yang diselamatkan seperti beruang madu, komodo, gajah sumatera, elang laut, dan buaya. Terhubung dengan kebun buah tropis di mana pengunjung bisa mencicipi buah segar dan belajar pertanian ramah lingkungan.',
    highlights: [
      'Melihat langsung satwa dilindungi Indonesia',
      'Interaksi memberi makan gajah sumatera & kelinci',
      'Kebun buah naga, semangka, dan rosela organik',
      'Sangat ramah anak dan keluarga'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interaksi edukatif satwa di kawasan konservasi Safari Lagoi'
      }
    ],
    ticketInfo: 'Rp 120.000 (Domestik) / $15 SGD',
    bestTime: '08.30 - 11.30 WIB',
    locationName: 'Baru City, Teluk Sebong, Lagoi'
  },

  // TANJUNG PINANG
  {
    id: 'pulau-penyengat',
    name: 'Pulau Penyengat & Masjid Sultan Riau',
    region: 'Tanjung Pinang',
    theme: 'Religi & Budaya',
    tag: 'Warisan UNESCO Tentative',
    shortDesc: 'Pusat kejayaan Kerajaan Melayu Riau-Lingga dengan Masjid Raya berkuning telur legendaris.',
    description: 'Pulau kecil sarat sejarah yang dapat dicapai dengan perahu pompong tradisional selama 15 menit dari Tanjung Pinang. Di sini berdiri Masjid Raya Sultan Riau yang unik karena dibangun menggunakan perekat putih telur pada abad ke-19, menyimpan Kitab Suci Al-Quran tulisan tangan berusia ratusan tahun, makam pahlawan nasional Raja Ali Haji (pencipta Gurindam Dua Belas), dan benteng pertahanan Bukit Kursi.',
    highlights: [
      'Masjid Raya Sultan Riau Penyengat berdinding campuran putih telur',
      'Makam Pahlawan Nasional Raja Ali Haji & Raja-Raja Riau',
      'Kompleks Istana Kantor Kerajaan Melayu & Gedung Mesiu',
      'Keliling pulau menaiki becak motor tradisional khas Penyengat'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
        caption: 'Kemegahan arsitektur kuning-hijau Masjid Raya Sultan Riau Penyengat'
      },
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        caption: 'Perahu pompong tradisional menyeberang ke Pulau Penyengat'
      },
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        caption: 'Nuansa religi dan kearifan Melayu yang damai nan teduh'
      }
    ],
    ticketInfo: 'Pompong Rp 10.000 / sewa becak motor Rp 50.000 / jam',
    bestTime: 'Pagi 08.00 - 11.00 WIB atau Sore 15.00 - 17.30 WIB',
    locationName: 'Pulau Penyengat, Kota Tanjung Pinang'
  },
  {
    id: 'vihara-avalokitesvara-graha',
    name: 'Vihara Avalokitesvara Graha (Kwan Im)',
    region: 'Tanjung Pinang',
    theme: 'Religi & Budaya',
    tag: 'Vihara Terbesar Asia Tenggara',
    shortDesc: 'Vihara megah dengan Patung Dewi Kwan Im 1000 Tangan setinggi 16,8 meter bersepuh emas.',
    description: 'Vihara Avalokitesvara Graha di KM 14 Tanjung Pinang dinobatkan oleh MURI sebagai vihara terbesar di Asia Tenggara. Berdiri megah di atas lahan 10 hektar dengan kebun buah naga di halamannya. Di dalam ruang doa utama terdapat patung Dewi Kwan Im Seribu Tangan yang sangat agung berlapis emas 22 karat.',
    highlights: [
      'Patung Dewi Kwan Im 1000 Tangan tercatat MURI setinggi 16.8 meter',
      'Arsitektur vihara tionghoa klasik beratap genteng emas dan ukiran naga',
      'Suasana sangat hening, suci, dan penuh kedamaian spiritual',
      'Halaman luas dikelilingi patung 16 arhat dan kebun buah naga'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        caption: 'Kemegahan arsitektur bernuansa emas Vihara Avalokitesvara Graha'
      },
      {
        url: 'https://images.unsplash.com/photo-1609137144820-2213d2f9d6c4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Detail seni pahatan dan pilar megah vihara'
      }
    ],
    ticketInfo: 'Gratis donasi sukarela (Bebas parkir mobil tur)',
    bestTime: '08.00 - 16.30 WIB',
    locationName: 'Jl. WR Supratman KM 14, Tanjung Pinang'
  },
  {
    id: 'gedung-gonggong-tepi-laut',
    name: 'Gedung Gonggong & Tepi Laut Tanjung Pinang',
    region: 'Tanjung Pinang',
    theme: 'Pantai & Bahari',
    tag: 'Landmark Kota',
    shortDesc: 'Gedung berbentuk siput laut Gonggong dengan pemandangan promenade tepi laut dan sunset.',
    description: 'Landmark kebanggaan masyarakat Kepulauan Riau yang menyerupai keong Gonggong, biota laut endemik Bintan yang terkenal sangat gurih saat dimasak. Area ini menjadi pusat santai sore dengan angin laut sepoi-sepoi, taman bermain, dan kuliner jajanan jalanan khas Melayu.',
    highlights: [
      'Arsitektur ikonik berbentuk kerang gonggong emas',
      'Promenade tepi laut menghadap langsung ke Pulau Penyengat',
      'Pusat informasi pariwisata dan cenderamata khas Kepri',
      'Tempat terbaik mencicipi olahan Gonggong rebus sambal kecap'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pemandangan senja tepi laut Tanjung Pinang berlatar laut lepas'
      }
    ],
    ticketInfo: 'Gratis akses area terbuka tepi laut',
    bestTime: '16.30 - 20.00 WIB (Sore hingga malam)',
    locationName: 'Laman Boenda Tepi Laut, Tanjung Pinang'
  },
  {
    id: 'danau-biru-kawal',
    name: 'Danau Biru Kawal & Bukit Pasir Trikora',
    region: 'Tanjung Pinang',
    theme: 'Gurun Pasir & Danau',
    tag: 'Danau Toska Tersembunyi',
    shortDesc: 'Danau berwarna biru toska pekat hasil kawah tambang dengan formasi gundukan tanah putih kapur.',
    description: 'Terletak di kawasan Kawal menuju Pantai Trikora, danau kawah ini memikat dengan airnya yang berwarna biru kehijauan bagai permata. Kontras dramatis antara gundukan tanah berpasir putih dan air tenang menjadikannya spot foto yang sangat instagramable.',
    highlights: [
      'Gradasi warna air biru toska yang memukau mata',
      'Formasi gundukan tanah kapur eksotis',
      'Jalur searah menuju pantai berpasir putih Trikora',
      'Banyak spot pondok bambu dan perahu kayu untuk berfoto'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Gradasi bukit pasir keemasan dan danau biru cerah'
      }
    ],
    ticketInfo: 'Rp 10.000 / orang',
    bestTime: '10.00 - 15.00 WIB (Cahaya matahari tegak membuat danau bersinar biru)',
    locationName: 'Kawal, Gunung Kijang, Bintan Timur'
  },

  // TANJUNG UBAN & BUSUNG
  {
    id: 'gurun-pasir-busung',
    name: 'Gurun Pasir Busung & Telaga Biru',
    region: 'Tanjung Uban',
    theme: 'Gurun Pasir & Danau',
    tag: 'Paling Populer & Viral',
    shortDesc: 'Hamparan bukit gurun pasir bergelombang ala Timur Tengah dengan telaga kawah biru jernih.',
    description: 'Destinasi paling viral di Pulau Bintan! Awalnya merupakan bekas area tambang pasir bauksit yang kini secara alami bertransformasi menjadi gurun pasir eksotis mirip padang pasir Sahara. Di tengah perbukitan pasir terdapat ceruk-ceruk telaga dengan air biru toska pekat yang sangat memanjakan mata kamera.',
    highlights: [
      'Lanskap perbukitan gurun pasir bergelombang keemasan',
      'Telaga Biru dengan air toska kontras di tengah gurun',
      'Spot foto unta tiruan, ayunan gurun pasir, dan jembatan bambu',
      'Mencicipi es kelapa muda segar di pondok bambu tepi gurun'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lekukan bukit pasir gurun Busung bernuansa eksotis Timur Tengah'
      },
      {
        url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Telaga Biru Busung dengan air toska jernih di bawah terik matahari'
      },
      {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
        caption: 'Petualangan seru melintasi lembah pasir gurun Busung Bintan'
      }
    ],
    ticketInfo: 'Rp 15.000 / orang (Biaya masuk area danau & gurun)',
    bestTime: '08.00 - 10.30 WIB atau 15.30 - 17.30 WIB (Hindari panas terik tengah hari)',
    locationName: 'Desa Busung, Seri Kuala Lobam, Tanjung Uban'
  },
  {
    id: 'vihara-dharma-shanti-sleeping-buddha',
    name: 'Vihara Dharma Shanti & Patung Sleeping Buddha',
    region: 'Tanjung Uban',
    theme: 'Religi & Budaya',
    tag: 'Ikon Religi Buddha Tidur',
    shortDesc: 'Vihara asri dengan patung Buddha Tidur (Reclining Buddha) berselimut jubah emas megah.',
    description: 'Terletak di Tanjung Uban, Vihara Dharma Shanti menyimpan karya seni religi yang mengagumkan yaitu Patung Buddha Tidur (Sleeping Buddha) berukuran besar dengan posisi miring menghadap utara, berselimut warna emas kemilau. Kompleks vihara memiliki taman yang sangat asri, ornamen khas Thailand & Tiongkok, serta suasana tenang yang menyejukkan hati.',
    highlights: [
      'Patung Buddha Tidur berbalut cat emas dengan postur Parinirvana agung',
      'Taman bunga asri dan miniatur stupa bernuansa Thailand-Buddhist',
      'Hiasan relief kisah perjalanan hidup Siddharta Gautama',
      'Hanya 10 menit perjalanan dari Pelabuhan Ferry Bulang Linggi Tanjung Uban'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        caption: 'Patung Buddha Tidur berlapis warna emas agung di Vihara Dharma Shanti'
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Taman vihara bernuansa spiritual yang teduh dan bersih'
      }
    ],
    ticketInfo: 'Gratis / Donasi suka rela',
    bestTime: '08.30 - 17.00 WIB',
    locationName: 'Jl. Merdeka, Tanjung Uban Kota, Bintan Utara'
  },
  {
    id: 'pantai-senggiling',
    name: 'Pantai Senggiling & Tebing Batu Hitam',
    region: 'Tanjung Uban',
    theme: 'Pantai & Bahari',
    tag: 'Pantai Perawan Bintan',
    shortDesc: 'Pantai eksotis tersembunyi dengan garis pantai panjang dan tebing karang alami.',
    description: 'Pantai alami yang belum banyak terjamah di pesisir utara Tanjung Uban. Menawarkan pasir putih bersih berkilau, deburan ombak laut Cina Selatan, dan formasi batuan karang unik. Tempat pelarian terbaik bagi pecinta alam dan fotografi lanskap.',
    highlights: [
      'Garis pantai pasir putih bersih tanpa keramaian',
      'Pemandangan laut lepas dengan udara segar bebas polusi',
      'Spot foto tebing karang dramatis',
      'Jalur petualangan asri melewati perkebunan kelapa sawit'
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pesisir pantai alami Senggiling dengan birunya laut'
      }
    ],
    ticketInfo: 'Rp 10.000 / mobil parkir',
    bestTime: '08.00 - 15.00 WIB',
    locationName: 'Senggiling, Sebong Lagoi, Bintan Utara'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'bintan-iconic-1d',
    title: 'Bintan Iconic One Day Tour',
    type: 'Private',
    duration: '1 Hari (Full Day 10-12 Jam)',
    tagline: 'Eksplorasi Lengkap Gurun Pasir, Telaga Biru & Sensasi Mewah Lagoi',
    minPax: 2,
    priceIdr: 450000,
    priceSgd: 45,
    priceUnit: 'per orang (Min. 4 pax)',
    featured: true,
    bannerImg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    destinationsCovered: ['Gurun Pasir Busung', 'Telaga Biru', 'Treasure Bay Crystal Lagoon', 'Pantai Lagoi Bay', 'Sleeping Buddha Tg Uban'],
    itinerary: [
      { time: '08:30 WIB', activity: 'Penjemputan Peserta', desc: 'Driver kami siap menjemput di Pelabuhan Ferry BBT Lagoi / Pelabuhan Tanjung Uban / Hotel Anda.' },
      { time: '09:30 WIB', activity: 'Gurun Pasir Busung & Telaga Biru', desc: 'Berfoto di bukit pasir gurun eksotis dan danau toska alami, minum es kelapa muda.' },
      { time: '11:30 WIB', activity: 'Vihara Dharma Shanti (Sleeping Buddha)', desc: 'Mengagumi kemegahan Patung Buddha Tidur berselimut emas dan taman vihara.' },
      { time: '12:30 WIB', activity: 'Makan Siang Kuliner Khas Bintan', desc: 'Menikmati sajian Seafood gonggong / masakan khas Melayu (biaya pribadi/opsional paket).' },
      { time: '14:00 WIB', activity: 'Treasure Bay Bintan (Crystal Lagoon)', desc: 'Menikmati lagoon air asin terbesar se-Asia Tenggara, berenang dan wahana seru.' },
      { time: '16:30 WIB', activity: 'Pantai Lagoi Bay & Love Lock Plaza', desc: 'Bersantai menikmati angin pantai pasir putih dan pemandangan sunset romantis.' },
      { time: '18:00 WIB', activity: 'Pusat Oleh-Oleh & Drop Off', desc: 'Belanja kerupuk otak-otak gonggong khas Bintan, diantar kembali ke pelabuhan/hotel.' }
    ],
    includes: [
      'Mobil Private ber-AC (Avanza / Innova Reborn / Hiace)',
      'Supir ramah merangkap Local Tour Guide & Fotografer',
      'BBM & Parkir seluruh objek wisata',
      'Tiket Masuk Gurun Pasir & Telaga Biru Busung',
      'Air mineral dingin selama perjalanan',
      'Penjemputan & Pengantaran (Ferry Port / Hotel)'
    ],
    excludes: [
      'Tiket masuk Treasure Bay (opsional addon Rp 180.000 / $18 SGD)',
      'Tiket Ferry PP Singapura/Batam',
      'Makan siang / pengeluaran pribadi',
      'Tipping supir (sukarela)'
    ],
    recommendation: 'Sangat cocok untuk wisatawan 1 hari (day-trip) dari Singapura (Ferry Tanah Merah) atau Batam.'
  },
  {
    id: 'bintan-heritage-religi-1d',
    title: 'Bintan Heritage & Spiritual Cultural Tour',
    type: 'Private',
    duration: '1 Hari (8 - 10 Jam)',
    tagline: 'Napak Tilas Kerajaan Melayu Penyengat & Kemegahan Dewi Kwan Im',
    minPax: 2,
    priceIdr: 390000,
    priceSgd: 39,
    priceUnit: 'per orang (Min. 4 pax)',
    featured: false,
    bannerImg: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    destinationsCovered: ['Pulau Penyengat', 'Masjid Sultan Riau Putih Telur', 'Vihara Avalokitesvara Graha (Kwan Im)', 'Gedung Gonggong Tepi Laut', 'Pasar Rimba Jaya'],
    itinerary: [
      { time: '09:00 WIB', activity: 'Penjemputan di Pelabuhan Sri Bintan Pura / Hotel', desc: 'Disambut hangat oleh tim JFC Tour & Travel.' },
      { time: '09:30 WIB', activity: 'Penyeberangan Pompong ke Pulau Penyengat', desc: 'Naik perahu tradisional pompong menyusuri selat bersejarah.' },
      { time: '10:00 WIB', activity: 'Jelajah Sejarah Pulau Penyengat', desc: 'Ziarah Masjid Raya Sultan Riau, Makam Raja Ali Haji, Balai Adat, dan Benteng Bukit Kursi naik becak motor.' },
      { time: '12:30 WIB', activity: 'Makan Siang Seafood Sei Enam', desc: 'Mencicipi ketam masak asam pedas dan gonggong rebus khas Kepri.' },
      { time: '14:30 WIB', activity: 'Vihara Avalokitesvara Graha (Kwan Im)', desc: 'Mengunjungi vihara terbesar se-Asia Tenggara dengan patung Dewi Kwan Im 1000 Tangan.' },
      { time: '16:30 WIB', activity: 'Gedung Gonggong & Sunset Laman Boenda', desc: 'Foto di landmark keong gonggong dan jalan santai tepi laut.' },
      { time: '18:00 WIB', activity: 'Pusat Kuliner Rimba Jaya / Drop Off', desc: 'Mencicipi aneka jajanan malam Tanjung Pinang sebelum kembali.' }
    ],
    includes: [
      'Transportasi mobil private AC + Driver Guide',
      'Tiket Perahu Pompong PP Tanjung Pinang - Penyengat',
      'Sewa Becak Motor keliling Pulau Penyengat',
      'Air Mineral selama tour',
      'BBM & Parkir seluruh destinasi'
    ],
    excludes: [
      'Makan siang & belanja oleh-oleh pribadi',
      'Tiket kapal ferry ke Pulau Bintan'
    ],
    recommendation: 'Pilihan favorit bagi keluarga, komunitas sejarah, dan wisatawan religi.'
  },
  {
    id: 'bintan-complete-2d1n',
    title: 'Pesona Bintan Eksotis 2D1N (Best Seller)',
    type: 'Group',
    duration: '2 Hari 1 Malam',
    tagline: 'Paket Lengkap: Lagoi + Gurun Pasir + Tanjung Pinang + Wisata Religi',
    minPax: 4,
    priceIdr: 850000,
    priceSgd: 85,
    priceUnit: 'per orang (Min. 6 pax)',
    featured: true,
    bannerImg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    destinationsCovered: ['Treasure Bay', 'Lagoi Bay Beach', 'Gurun Pasir Busung', 'Danau Biru', 'Sleeping Buddha', 'Pulau Penyengat', 'Vihara Kwan Im', 'Gedung Gonggong'],
    itinerary: [
      { time: 'Hari 1 - 09:00 WIB', activity: 'Jemput Port / Bandara & Explore Busung', desc: 'Gurun Pasir Busung & Telaga Biru, Sleeping Buddha Vihara Dharma Shanti.' },
      { time: 'Hari 1 - 13:00 WIB', activity: 'Treasure Bay Crystal Lagoon & Lagoi Bay', desc: 'Berenang dan wahana di Crystal Lagoon, bersantai sore di Pantai Lagoi Bay.' },
      { time: 'Hari 1 - 18:30 WIB', activity: 'Check-in Hotel / Resort & Makan Malam', desc: 'Istirahat dan waktu bebas menikmati suasana malam Bintan.' },
      { time: 'Hari 2 - 08:30 WIB', activity: 'Wisata Budaya Tanjung Pinang & Penyengat', desc: 'Menyeberang pompong ke Pulau Penyengat, ziarah Masjid Bersejarah, Vihara Kwan Im Seribu Tangan.' },
      { time: 'Hari 2 - 14:00 WIB', activity: 'Gedung Gonggong & Belanja Oleh-Oleh', desc: 'Belanja kerupuk atom, otak-otak, dan souvenir khas Bintan lalu pengantaran kembali.' }
    ],
    includes: [
      'Transportasi All Days dengan mobil/minibus AC nyaman',
      'Driver ramah & Berpengalaman merangkap Tour Leader',
      'Tiket Masuk Seluruh Objek Wisata (Termasuk Gurun Pasir & Penyengat)',
      'Boat Pompong PP ke Pulau Penyengat',
      'Air mineral setiap hari',
      'Dokumentasi foto perjalanan'
    ],
    excludes: [
      'Akomodasi Hotel (Bisa dibantu bookingkan resort/hotel sesuai budget)',
      'Makan (Fleksibel sesuai pilihan peserta)',
      'Tiket Ferry / Pesawat menuju Bintan'
    ],
    recommendation: 'Paket terlengkap untuk liburan akhir pekan keluarga, rombongan arisan, maupun kantor.'
  },
  {
    id: 'bintan-mangrove-sunset-1d',
    title: 'Lagoi Nature & Fireflies Sunset Tour',
    type: 'Private',
    duration: 'Sore - Malam (14:30 - 21:00 WIB)',
    tagline: 'Sunset Romantis Lagoi Bay & Sensasi Ribuan Kunang-kunang Sungai Sebung',
    minPax: 2,
    priceIdr: 520000,
    priceSgd: 52,
    priceUnit: 'per orang (Min. 3 pax)',
    featured: false,
    bannerImg: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    destinationsCovered: ['Pantai Lagoi Bay', 'Lantern Park', 'Sungai Sebung Mangrove Tour', 'Ribuan Kunang-kunang Fireflies'],
    itinerary: [
      { time: '14:30 WIB', activity: 'Penjemputan di Resort / Ferry Terminal', desc: 'Driver standby menjemput Anda dengan mobil AC.' },
      { time: '15:30 WIB', activity: 'Santai Sore di Pantai Lagoi Bay', desc: 'Berfoto di pasir putih Lagoi Bay, menikmati kelapa muda segar.' },
      { time: '17:30 WIB', activity: 'Makan Malam Seafood Kelong Terapung', desc: 'Menikmati ikan bakar segar dan kepiting saus tiram di restoran kelong atas air.' },
      { time: '19:00 WIB', activity: 'Night Mangrove Firefly Discovery', desc: 'Naik boat menyusuri sungai gelap gulita untuk melihat pertunjukan kunang-kunang berpendar alami.' },
      { time: '20:30 WIB', activity: 'Drop Off kembali ke Hotel / Penginapan', desc: 'Perjalanan kembali dengan kenangan tak terlupakan.' }
    ],
    includes: [
      'Mobil Private AC + Driver Profesional',
      'Tiket Boat Mangrove Night Firefly Tour',
      'Jaket Keselamatan (Life Jacket) & Pemandu Lokal',
      'BBM & Parkir area Lagoi'
    ],
    excludes: [
      'Makan malam kelong',
      'Pengeluaran belanja pribadi'
    ],
    recommendation: 'Sangat romantis untuk pasangan bulan madu (honeymoon) dan keluarga dengan anak-anak.'
  },
  {
    id: 'bintan-custom-group-gathering',
    title: 'Custom Corporate / Family Gathering 3D2N',
    type: 'Group',
    duration: '3 Hari 2 Malam (Customizable)',
    tagline: 'Program Fleksibel Rombongan Perusahaan, Komunitas & Reuni Sekolah',
    minPax: 15,
    priceIdr: 1250000,
    priceSgd: 120,
    priceUnit: 'per orang (Min. 15 pax)',
    featured: false,
    bannerImg: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    destinationsCovered: ['Kawasan Wisata Lagoi', 'Gurun Pasir & Danau Biru', 'Wisata Religi Tg Uban & Tg Pinang', 'Pantai Trikora White Sands'],
    itinerary: [
      { time: 'Hari 1', activity: 'Kedatangan & Wisata Pantai Lagoi', desc: 'Penyambutan rombongan di pelabuhan dengan spanduk banner, explore Lagoi Bay & Team Building di pantai.' },
      { time: 'Hari 2', activity: 'Amazing Race Bintan: Gurun Pasir & Treasure Bay', desc: 'Petualangan bukit pasir Busung, wahana air Crystal Lagoon, makan malam gala seafood kelong.' },
      { time: 'Hari 3', activity: 'Heritage Penyengat, Belanja Oleh-Oleh & Kepulangan', desc: 'Ziarah Masjid Sultan Riau, borong oleh-oleh khas Tanjung Pinang, transfer out ke bandara/pelabuhan.' }
    ],
    includes: [
      'Bus Pariwisata Medium / Toyota Hiace Armada Terbaru',
      'Tour Leader & Fasilitator Games Ramah Berpengalaman',
      'Spanduk / Banner Custom Nama Perusahaan / Komunitas',
      'Makan Siang & Malam Seafood Prasmanan',
      'Tiket Masuk Objek Wisata Utama',
      'Air mineral & snack harian'
    ],
    excludes: [
      'Tiket Pesawat / Ferry Utama',
      'Pengeluaran pribadi'
    ],
    recommendation: 'Direkomendasikan khusus untuk outing kantor, instansi BUMN, gathering alumni, dan study tour.'
  }
];

export const CAR_RENTAL_DATA: CarRentalItem[] = [
  {
    id: 'toyota-avanza-veloz',
    model: 'Toyota All New Avanza / Veloz',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    luggage: 3,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 550000,
    dailySelfDrivePriceIdr: 350000,
    weeklyPriceIdr: 2200000,
    monthlyPriceIdr: 6500000,
    features: ['AC Dingin Double Blower', 'Audio Bluetooth & USB Charger', 'Kondisi Prima & Bersih', 'Supir Ramah & Paham Rute'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-innova-reborn',
    model: 'Toyota All New Innova Reborn',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    luggage: 4,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 750000,
    dailySelfDrivePriceIdr: 500000,
    weeklyPriceIdr: 3200000,
    monthlyPriceIdr: 9500000,
    features: ['Suspensi Sangat Nyaman', 'Ruang Kaki Luas & Senyap', 'Audio Touchscreen', 'Unit Terfavorit Tamu Keluarga'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-innova-zenix',
    model: 'Toyota Innova Zenix Hybrid',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    luggage: 4,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 950000,
    dailySelfDrivePriceIdr: 650000,
    weeklyPriceIdr: 4200000,
    monthlyPriceIdr: 13000000,
    features: ['Mesin Hybrid Irit & Senyap', 'Panoramic Roof Mewah', 'Kursi Captain Seat Nyaman', 'Layanan VIP Driver Berbaju Rapi'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-fortuner-gr',
    model: 'Toyota Fortuner VRZ / GR Sport',
    brand: 'Toyota',
    category: 'SUV',
    seats: 7,
    luggage: 4,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 1200000,
    dailySelfDrivePriceIdr: 850000,
    weeklyPriceIdr: 5500000,
    monthlyPriceIdr: 16500000,
    features: ['SUV Tangguh Segala Medan', 'Interior Mewah Kulit Hitam', 'Tampilan Gagah & Prestise', 'Kenyamanan Maksimal'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-hiace-commuter',
    model: 'Toyota Hiace Commuter 14-Seat',
    brand: 'Toyota',
    category: 'Van',
    seats: 14,
    luggage: 8,
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 1100000,
    dailySelfDrivePriceIdr: 0, // Tidak lepas kunci untuk Hiace
    weeklyPriceIdr: 6500000,
    monthlyPriceIdr: 18000000,
    features: ['Kapasitas 14 Orang Dewasa', 'AC Ducting Dingin Merata Tiap Baris', 'Reclining Seat Nyaman', 'Bagasi Koper Sangat Lapang'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-hiace-premio-vip',
    model: 'Toyota Hiace Premio Luxury VIP',
    brand: 'Toyota',
    category: 'Van',
    seats: 10,
    luggage: 8,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 1400000,
    dailySelfDrivePriceIdr: 0,
    weeklyPriceIdr: 8500000,
    monthlyPriceIdr: 22000000,
    features: ['Desain Muka Eropa Modern', 'Kursi Captain Seat VIP', 'Suasana Kabin Megah & Berkelas', 'Cocok Delegasi Bisnis & Tamu Penting'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  },
  {
    id: 'toyota-alphard-transformer',
    model: 'Toyota Alphard Transformer VIP',
    brand: 'Toyota',
    category: 'Luxury',
    seats: 6,
    luggage: 4,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    dailyWithDriverPriceIdr: 2200000,
    dailySelfDrivePriceIdr: 0,
    weeklyPriceIdr: 13500000,
    monthlyPriceIdr: 38000000,
    features: ['Ottoman Executive Lounge Seat', 'Sunroof & Moonlight Ambience', 'Layanan Protokoler VIP & Air Mineral Premium', 'Driver Berjas / Kemeja Batik Rapi'],
    fuelIncludedDaily: true,
    driverIncludedDaily: true
  }
];

export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'David Tan & Family',
    origin: 'Singapura (Ferry via Tanah Merah to BBT Lagoi)',
    rating: 5,
    date: '2 minggu lalu',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Super recommended! We booked the 1-Day Iconic Tour with JFC Tour & Travel Bintan. The driver, Pak Rudi, picked us up right on time at Bandar Bentan Telani ferry terminal. The sand dunes in Busung and Sleeping Buddha in Tanjung Uban were amazing. Seamless WhatsApp booking and fast response in English and Malay!',
    tourTaken: 'Bintan Iconic One Day Tour',
    badge: 'Local Guide Google Bisnis (Level 7)'
  },
  {
    id: 'rev-2',
    author: 'Hendri Prasetyo',
    origin: 'Jakarta Selatan',
    rating: 5,
    date: '1 bulan lalu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Sewa Innova Reborn selama 3 hari untuk liburan keluarga di Bintan. Mobil super wangi, AC dingin, dan supirnya sangat sopan tahu jalan tikus bebas macet. Direkomendasikan tempat makan otak-otak dan gonggong yang enak dan murah di Tanjung Pinang. Harga sangat transparan tanpa biaya siluman!',
    tourTaken: 'Rental Mobil Innova Reborn 3 Hari',
    badge: 'Ulasan Terverifikasi Google'
  },
  {
    id: 'rev-3',
    author: 'Siti Nurhaliza & Rombongan Kantor',
    origin: 'Batam (Speedboat via Punggur - Tg Uban)',
    rating: 5,
    date: '3 minggu lalu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    comment: 'Kami rombongan 12 orang sewa Toyota Hiace Commuter ke Lagoi dan Gurun Pasir Telaga Biru. Komunikasi lewat WhatsApp sangat cepat dan ramah dari admin JFC. Dijemput pas di Pelabuhan Bulang Linggi Tanjung Uban. Pelayanan bintang 5!',
    tourTaken: 'Private Hiace Tour Tanjung Uban & Lagoi',
    badge: 'Ulasan Terverifikasi Google'
  },
  {
    id: 'rev-4',
    author: 'Michael Chang',
    origin: 'Kuala Lumpur, Malaysia',
    rating: 5,
    date: '2 bulan lalu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: 'Visit to Pulau Penyengat and Avalokitesvara Graha temple was spiritual and awe-inspiring. JFC Tour arranged the boat pompong, motorized rickshaws and guide seamlessly. Highly legitimate agency in Bintan Island!',
    tourTaken: 'Bintan Heritage & Spiritual Tour',
    badge: 'Google Reviewer'
  }
];

export const BUSINESS_PROFILE = {
  name: 'JFC Tour & Travel Bintan',
  shortName: 'JFC Bintan Tour',
  tagline: 'Pilihan No. 1 Wisata & Rental Mobil di Pulau Bintan',
  googleRating: 4.9,
  totalReviews: 328,
  address: 'Jl. Hang Tuah No. 18, Tepi Laut, Kota Tanjung Pinang, Kepulauan Riau 29111',
  branchLagoi: 'Kawasan Wisata Terpadu Lagoi (Meeting Point Bandar Bentan Telani Port)',
  branchTgUban: 'Jl. Merdeka No. 8, Dekat Pelabuhan Ferry Bulang Linggi Tanjung Uban',
  phone: '+62-813-7248-3985',
  whatsappNumber: '6281372483985', // format international without +
  whatsappFormatted: '+62-813-7248-3985',
  email: 'booking@jfctourbintan.com',
  operatingHours: 'Buka 24 Jam (Layanan Penjemputan Ferry & Bandara Standby)',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127638.29177141517!2d104.35411782001955!3d0.941913165217961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d972ea2d603e51%3A0x6b7ca3c3fa83d47b!2sTanjung%20Pinang%2C%20Tanjungpinang%20City%2C%20Riau%20Islands!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  googleMapsDirectLink: 'https://maps.google.com/?q=JFC+Tour+Travel+Pulau+Bintan+Tanjung+Pinang+Lagoi',
  googleReviewDirectLink: 'https://search.google.com/local/writereview?placeid=ChIJUT5gLepydTERe9SD-sOjehU'
};

export const PICKUP_POINTS = [
  'Bandar Bentan Telani (BBT) Ferry Terminal - Lagoi (Dari Singapura)',
  'Pelabuhan Sri Bintan Pura - Tanjung Pinang (Ferry Batam / Dumai / JB)',
  'Pelabuhan Ferry Bulang Linggi - Tanjung Uban (Speedboat Batam Punggur)',
  'Pelabuhan RoRo ASDP Tanjung Uban (Kapal Roro Mobil Batam)',
  'Bandara Raja Haji Fisabilillah (RHF) Tanjung Pinang',
  'Hotel / Resort Kawasan Lagoi (Club Med, Natra, Cassia, The Sanchaya, dll)',
  'Hotel Kawasan Kota Tanjung Pinang / Trikora',
  'Lokasi Lainnya di Pulau Bintan (Tulis di Catatan)'
];
