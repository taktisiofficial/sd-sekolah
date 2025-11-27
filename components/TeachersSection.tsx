import React, { useState } from 'react';
import { TEACHERS } from '../constants';
import { Teacher } from '../types';
import { X, Quote, GraduationCap } from 'lucide-react';

const TeachersSection: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <section id="teachers" className="py-20 bg-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mc-blue font-bold uppercase tracking-wider text-sm">Tim Pengajar</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Guru & Staf <span className="text-mc-orange">Inspiratif</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berkenalan dengan para pendidik berdedikasi yang siap membimbing putra-putri Anda mencapai potensi terbaiknya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEACHERS.map((teacher, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-mc-blue/30 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-mc-yellow rounded-full transform rotate-6 group-hover:rotate-12 transition-transform opacity-20"></div>
                <img 
                  src={teacher.photo} 
                  alt={teacher.name} 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-display font-bold text-xl text-gray-900 mb-1 group-hover:text-mc-blue transition-colors">
                {teacher.name}
              </h3>
              
              <div className="inline-block px-3 py-1 bg-blue-50 text-mc-blue text-xs font-bold rounded-full mb-4">
                {teacher.role}
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed italic line-clamp-2 mb-4">
                "{teacher.bio}"
              </p>

              <button 
                onClick={() => setSelectedTeacher(teacher)}
                className="mt-auto px-6 py-2 border-2 border-mc-blue text-mc-blue rounded-full font-bold text-sm hover:bg-mc-blue hover:text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-mc-blue focus:ring-offset-2"
              >
                Lihat Profil
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Profile Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedTeacher(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl relative z-10 overflow-hidden animate-fade-in-up">
            <button 
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-gray-600 hover:text-red-500 transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side: Photo */}
              <div className="w-full md:w-2/5 bg-blue-50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-mc-blue opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-mc-yellow opacity-20 rounded-full -ml-12 -mb-12"></div>
                
                <img 
                  src={selectedTeacher.photo} 
                  alt={selectedTeacher.name} 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-white shadow-xl relative z-10"
                />
              </div>

              {/* Right Side: Info */}
              <div className="w-full md:w-3/5 p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-mc-green text-xs font-bold rounded-full mb-4">
                  <GraduationCap size={14} />
                  {selectedTeacher.role}
                </div>
                
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">
                  {selectedTeacher.name}
                </h3>

                <div className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Quote className="absolute top-4 left-4 text-mc-blue/20 w-8 h-8" />
                  <p className="text-gray-700 leading-relaxed relative z-10 pt-2 italic">
                    {selectedTeacher.bio}
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <div className="flex-1 bg-yellow-50 p-3 rounded-xl border border-yellow-100 text-center">
                    <span className="block text-2xl font-bold text-mc-orange mb-1">10+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Tahun Pengalaman</span>
                  </div>
                  <div className="flex-1 bg-blue-50 p-3 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl font-bold text-mc-blue mb-1">S1/S2</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Pendidikan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeachersSection;