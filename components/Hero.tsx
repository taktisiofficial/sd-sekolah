import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-mc-blue font-bold rounded-full text-sm mb-2 shadow-sm animate-fade-in-down">
              👋 Selamat Datang di SD Tunas Harapan
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Membangun Generasi <span className="text-mc-blue">Cerdas</span> & <span className="text-mc-orange">Berkarakter</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Sekolah dasar yang menyenangkan dengan kurikulum terpadu untuk mengembangkan potensi akademis dan akhlak mulia buah hati Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#ppdb" className="flex items-center justify-center gap-2 bg-mc-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-200">
                Info PPDB
                <ArrowRight size={20} />
              </a>
              <a href="#programs" className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-mc-blue hover:text-mc-blue transition-all hover:shadow-md">
                Lihat Program
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-mc-blue to-mc-green rounded-[3rem] opacity-20 blur-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
              alt="Happy Students Learning" 
              className="relative rounded-[2.5rem] shadow-2xl w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-2xl">🏆</div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Akreditasi</p>
                  <p className="font-display font-bold text-lg text-gray-800">A (Unggul)</p>
                </div>
              </div>
            </div>
            
            {/* Additional Floating Card */}
            <div className="absolute top-10 -right-4 bg-white p-3 rounded-2xl shadow-lg hidden lg:block transform rotate-6 hover:rotate-0 transition-all">
               <span className="text-2xl">📚</span>
               <span className="font-bold text-sm ml-2 text-gray-700">Fun Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;