import React from 'react';
import { School, Phone, MapPin, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { SCHOOL_NAME, WA_LINK_ASK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
               <School className="w-8 h-8 text-mc-blue-light" />
               <span className="font-display font-bold text-xl">{SCHOOL_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Membangun generasi emas yang berakhlak mulia dan berwawasan global untuk masa depan Indonesia yang lebih cerah.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-mc-yellow transition-colors hover:scale-110 transform duration-200"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-mc-blue transition-colors hover:scale-110 transform duration-200"><Facebook size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors hover:scale-110 transform duration-200"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer" onClick={() => window.open("https://maps.google.com/?q=SD+Tunas+Harapan", "_blank")}>
                <MapPin className="w-5 h-5 text-mc-blue-light mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-sm group-hover:text-white transition-colors">Jl. Pendidikan No. 123, Kota Harapan, Indonesia 12345</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-mc-green" />
                <a href={WA_LINK_ASK} target="_blank" rel="noopener noreferrer" className="text-sm group-hover:text-white transition-colors">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-mc-yellow" />
                <a href="mailto:info@tunasharapan.sch.id" className="text-sm group-hover:text-white transition-colors">info@tunasharapan.sch.id</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-mc-blue-light transition-colors block py-1">Tentang Kami</a></li>
              <li><a href="#programs" className="hover:text-mc-blue-light transition-colors block py-1">Program Unggulan</a></li>
              <li><a href="#ppdb" className="hover:text-mc-blue-light transition-colors block py-1">Info Pendaftaran</a></li>
              <li><a href="#" className="hover:text-mc-blue-light transition-colors block py-1">Karir</a></li>
              <li><a href="#" className="hover:text-mc-blue-light transition-colors block py-1">Berita Sekolah</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;