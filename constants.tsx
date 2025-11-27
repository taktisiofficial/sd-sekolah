import React from 'react';
import { BookOpen, Heart, Globe, Users, Star, Sun } from 'lucide-react';
import { Program, TimelineEvent, CoreValue, GalleryItem, Teacher, Testimonial, FaqItem } from './types';

export const SCHOOL_NAME = "SD Tunas Harapan";
export const PHONE_NUMBER = "6281234567890"; // Format internasional tanpa +
export const WA_LINK_REG = `https://wa.me/${PHONE_NUMBER}?text=Halo%20Admin%20SD%20Tunas%20Harapan,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20siswa%20baru.`;
export const WA_LINK_ASK = `https://wa.me/${PHONE_NUMBER}?text=Halo%20Admin,%20saya%20ingin%20bertanya%20informasi%20sekolah.`;

export const VISION = "Mewujudkan generasi pembelajar sepanjang hayat yang berkarakter mulia, cerdas, kreatif, dan berwawasan global berlandaskan iman dan takwa.";

export const MISSION = [
  "Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai agama dan ilmu pengetahuan.",
  "Membangun lingkungan belajar yang kondusif, ceria, dan inklusif.",
  "Mengembangkan potensi minat dan bakat siswa secara optimal.",
  "Menanamkan karakter mandiri, jujur, dan peduli lingkungan.",
  "Mempersiapkan siswa menghadapi tantangan global dengan penguasaan teknologi."
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Cerdas (Smart)",
    description: "Memiliki kemampuan berpikir kritis dan problem solving.",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Empati (Empathy)",
    description: "Peduli terhadap sesama dan lingkungan sekitar.",
    icon: <Heart className="w-6 h-6 text-red-500" />
  },
  {
    title: "Nasionalis & Global",
    description: "Cinta tanah air namun berwawasan internasional.",
    icon: <Globe className="w-6 h-6 text-green-600" />
  },
  {
    title: "Dedikasi (Dedication)",
    description: "Tekun dan bersungguh-sungguh dalam belajar.",
    icon: <Star className="w-6 h-6 text-yellow-500" />
  },
  {
    title: "Integritas (Integrity)",
    description: "Jujur, amanah, dan bertanggung jawab.",
    icon: <Users className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Aktif & Kreatif",
    description: "Selalu berinovasi dan aktif berpartisipasi.",
    icon: <Sun className="w-6 h-6 text-orange-500" />
  }
];

export const PROGRAMS: Program[] = [
  {
    title: "Bilingual Class",
    description: "Pembelajaran menggunakan dua bahasa (Indonesia & Inggris) untuk mata pelajaran Sains dan Matematika.",
    icon: "🗣️",
    color: "bg-blue-100"
  },
  {
    title: "Tahfidz Quran",
    description: "Program unggulan hafalan Al-Quran dengan target minimal 2 Juz lulusan.",
    icon: "📖",
    color: "bg-green-100"
  },
  {
    title: "Coding & Robotics",
    description: "Ekstrakurikuler wajib untuk mengenalkan logika pemrograman sejak dini.",
    icon: "🤖",
    color: "bg-purple-100"
  },
  {
    title: "Green School",
    description: "Program pembiasaan cinta lingkungan melalui berkebun dan daur ulang.",
    icon: "🌱",
    color: "bg-emerald-100"
  }
];

export const TEACHERS: Teacher[] = [
  {
    name: "Budi Santoso, S.Pd.",
    role: "Kepala Sekolah",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    bio: "Berpengalaman 15 tahun memimpin pendidikan dasar dengan pendekatan humanis."
  },
  {
    name: "Siti Aminah, S.Pd.I",
    role: "Guru PAI & Tahfidz",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    bio: "Penuh kesabaran dalam membimbing siswa mencintai Al-Quran."
  },
  {
    name: "Michael Chen, B.Ed.",
    role: "Guru Sains & Bahasa Inggris",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    bio: "Membuat pelajaran sains menjadi petualangan seru yang dinanti siswa."
  },
  {
    name: "Dewi Kartika, S.Pd.",
    role: "Guru Kelas 1",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    bio: "Spesialis pendidikan karakter awal dengan metode belajar sambil bermain."
  }
];

export const PPDB_TIMELINE: TimelineEvent[] = [
  {
    title: "Gelombang 1 (Early Bird)",
    date: "1 Okt - 30 Nov 2024",
    description: "Diskon uang pangkal 20%.",
    status: 'past'
  },
  {
    title: "Gelombang 2",
    date: "1 Des 2024 - 28 Feb 2025",
    description: "Biaya normal, kuota terbatas.",
    status: 'current'
  },
  {
    title: "Gelombang 3",
    date: "1 Mar - 31 Mei 2025",
    description: "Dibuka jika kuota masih tersedia.",
    status: 'future'
  },
  {
    title: "Tes Masuk & Wawancara",
    date: "Setiap Sabtu",
    description: "Observasi kematangan anak dan wawancara orang tua.",
    status: 'future'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    title: "Kegiatan Belajar Mengajar",
    category: "Akademik"
  },
  {
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
    title: "Ekstrakurikuler Tari",
    category: "Seni & Budaya"
  },
  {
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop",
    title: "Praktikum Sains",
    category: "Eksperimen"
  },
  {
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
    title: "Upacara Bendera",
    category: "Kebangsaan"
  },
  {
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop",
    title: "Wisata Edukasi",
    category: "Outing Class"
  },
  {
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1000&auto=format&fit=crop",
    title: "Robotika",
    category: "Teknologi"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ibu Ratna Sari",
    role: "Orang Tua Siswa Kelas 2",
    content: "Anak saya jadi lebih percaya diri dan rajin ibadah sejak sekolah di sini. Gurunya sangat perhatian dan sabar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" // Menggunakan gambar guru sebagai placeholder contoh
  },
  {
    name: "Bapak Haryanto",
    role: "Ayah dari Rizky (Alumni)",
    content: "Fasilitas lengkap dan lingkungan yang aman. Program Tahfidz-nya sangat membantu anak saya menghafal Juz 30 dengan lancar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ibu Linda Wijaya",
    role: "Orang Tua Siswa Kelas 4",
    content: "Sangat suka dengan program Coding-nya. Anak saya jadi mengerti dasar logika pemrograman sejak dini tanpa merasa terbebani.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Berapa biaya masuk (uang pangkal) dan SPP bulanan?",
    answer: "Untuk Tahun Ajaran 2025/2026, Uang Pangkal adalah Rp 10.000.000 (sudah termasuk seragam dan buku tahun pertama) dan SPP Bulanan Rp 850.000. Tersedia diskon khusus untuk pendaftaran gelombang awal."
  },
  {
    question: "Apakah tersedia layanan antar-jemput siswa?",
    answer: "Ya, kami bekerja sama dengan penyedia layanan antar-jemput terpercaya yang mencakup wilayah Kota Harapan dan sekitarnya dengan biaya tambahan sesuai jarak."
  },
  {
    question: "Bagaimana rasio guru dan murid di kelas?",
    answer: "Kami menerapkan rasio ideal 1:20 (1 guru untuk maksimal 20 siswa) agar setiap anak mendapatkan perhatian yang optimal dalam proses belajar mengajar."
  },
  {
    question: "Apakah sekolah menerima siswa pindahan?",
    answer: "Ya, kami menerima siswa pindahan selama kuota kelas masih tersedia dan siswa lulus tes penempatan serta wawancara."
  },
  {
    question: "Apa saja dokumen yang diperlukan untuk pendaftaran?",
    answer: "Dokumen yang perlu disiapkan antara lain: Fotokopi Akta Kelahiran, Kartu Keluarga, KTP Orang Tua, dan Pas Foto terbaru calon siswa."
  }
];

export const FAQ_CONTEXT = `
Anda adalah asisten AI ramah dari ${SCHOOL_NAME}. 
Gunakan data berikut untuk menjawab pertanyaan:
Visi: ${VISION}
Misi: ${MISSION.join(", ")}
Program Unggulan: Bilingual Class, Tahfidz Quran, Coding & Robotics, Green School.
PPDB: Saat ini sedang dibuka Gelombang 2 (sampai 28 Feb 2025).
Biaya Masuk: Uang Pangkal Rp 10.000.000, SPP Bulanan Rp 850.000 (Mohon konfirmasi ke admin untuk detail terbaru).
Alamat: Jl. Pendidikan No. 123, Kota Harapan.
Kontak Admin: 0812-3456-7890 (WA).
Fasilitas: Ruang kelas ber-AC, Lab Komputer, Perpustakaan Digital, Lapangan Olahraga, Masjid, Kantin Sehat.
Ekstrakurikuler: Futsal, Tari, Melukis, Pramuka, Dokter Kecil.

Instruksi Gaya Bahasa:
- Jawablah dengan nada yang ceria, sopan, dan sangat membantu, khas guru SD yang ramah.
- Gunakan emoji yang relevan untuk membuat percakapan hidup.
- Jawaban harus ringkas namun padat informasi.
- Jika informasi tidak tersedia dalam konteks, arahkan penanya untuk mengklik tombol WhatsApp admin di website.
`;