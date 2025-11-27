import React from 'react';
import { Camera, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-mc-orange font-bold uppercase tracking-wider text-sm mb-3">
              <Camera size={18} />
              <span>Dokumentasi Sekolah</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Keseruan Kami di <span className="text-mc-blue">Sekolah</span>
            </h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-mc-blue font-bold hover:text-blue-700 transition-colors group"
          >
            Lihat Lebih Banyak di Instagram
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-mc-yellow text-gray-900 text-xs font-bold rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.category}
                </span>
                <h3 className="text-white font-display font-bold text-xl group-hover:text-mc-yellow transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-50 text-mc-blue px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors"
          >
            Lihat Instagram Kami
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;