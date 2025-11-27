import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import { PPDB_TIMELINE, WA_LINK_REG } from '../constants';

const PpdbSection: React.FC = () => {
  return (
    <section id="ppdb" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-mc-blue rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400 opacity-20 rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10 text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Penerimaan Peserta Didik Baru
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Tahun Ajaran 2025/2026. Bergabunglah menjadi bagian dari keluarga besar SD Tunas Harapan.
            </p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
            <h3 className="font-display text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Calendar className="w-7 h-7" /> Timeline PPDB
            </h3>

            <div className="space-y-8">
              {PPDB_TIMELINE.map((event, index) => {
                const isPast = event.status === 'past';
                const isCurrent = event.status === 'current';
                
                return (
                  <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start relative ${isPast ? 'opacity-60 grayscale-[0.5]' : ''}`}>
                    {/* Line connecting items (desktop) */}
                    {index !== PPDB_TIMELINE.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-2rem] w-0.5 bg-blue-300/30 md:left-[160px] md:top-2 md:bottom-2 hidden md:block"></div>
                    )}
                    
                    <div className="flex-shrink-0 w-full md:w-40 text-left md:text-right">
                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${isCurrent ? 'bg-mc-yellow text-gray-900 animate-pulse shadow-glow' : 'bg-blue-800 text-blue-200'}`}>
                         {event.date}
                       </span>
                    </div>

                    <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-white mt-1.5 ring-4 ring-blue-500/30 items-center justify-center z-10">
                        {isPast && <div className="w-2 h-2 bg-mc-green rounded-full" />}
                        {isCurrent && <div className="w-2 h-2 bg-mc-yellow rounded-full" />}
                    </div>

                    <div className="flex-grow bg-white text-gray-800 p-4 rounded-xl shadow-sm w-full border border-white/10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg">{event.title}</h4>
                        {isPast && <CheckCircle className="w-5 h-5 text-mc-green" />}
                        {isCurrent && <Clock className="w-5 h-5 text-mc-orange" />}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center flex flex-col items-center">
               <a 
                 href={WA_LINK_REG}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-mc-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
               >
                 Daftar Online via WhatsApp
               </a>
               <p className="mt-4 text-sm text-blue-100">
                 Butuh bantuan? <a href={WA_LINK_REG} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Hubungi Admin</a>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PpdbSection;