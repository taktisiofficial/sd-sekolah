import React from 'react';
import { PROGRAMS } from '../constants';

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-mc-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mc-orange font-bold uppercase tracking-wider text-sm">Keunggulan Kami</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Program <span className="text-mc-blue">Unggulan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami merancang kurikulum yang seimbang antara akademik, karakter, dan keterampilan masa depan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-mc-blue">
              <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {program.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;