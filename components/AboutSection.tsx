import React from 'react';
import { VISION, MISSION, CORE_VALUES } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-mc-green">Sekolah Kami</span>
          </h2>
          <div className="w-20 h-1.5 bg-mc-green mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h3 className="font-display text-2xl font-bold text-mc-blue mb-4 flex items-center gap-2">
              🚀 Visi Kami
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
              "{VISION}"
            </p>
          </div>
          
          <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100">
            <h3 className="font-display text-2xl font-bold text-mc-orange mb-4 flex items-center gap-2">
              🎯 Misi Kami
            </h3>
            <ul className="space-y-3">
              {MISSION.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-mc-orange rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div>
           <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-800">
                Core Values (Nilai Inti)
              </h3>
              <p className="text-gray-500 mt-2">Karakter yang kami tanamkan pada setiap siswa</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {CORE_VALUES.map((value, index) => (
               <div key={index} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-mc-blue transition-all duration-300">
                 <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                   {value.icon}
                 </div>
                 <h4 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-mc-blue transition-colors">
                   {value.title}
                 </h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   {value.description}
                 </p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;