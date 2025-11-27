import React, { useState } from 'react';
import { Send, MapPin, MessageSquare, Copy, Check, ExternalLink, Clock, Map, Sun, Cloud, Trees, Bus, School } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Orang Tua Siswa',
    message: ''
  });

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) return;

    const text = `Halo Admin SD Tunas Harapan,%0A%0APerkenalkan saya: *${formData.name}* (${formData.category}).%0A%0AIngin bertanya:%0A${formData.message}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  const handleCopyAddress = () => {
    const address = "Jl. Pendidikan No. 123, Kota Harapan, Indonesia 12345";
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Background Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-mc-yellow/10 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-mc-blue/10 rounded-full blur-3xl -mr-40 -mb-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-mc-blue font-bold uppercase tracking-wider text-sm">Lokasi & Kontak</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Kunjungi <span className="text-mc-orange">Sekolah Kami</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami menantikan kehadiran Anda. Silakan datang langsung ke lokasi atau kirimkan pesan jika ada pertanyaan lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Custom Illustrated Map Container */}
          <div className="relative group h-[500px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#e6f5e6] transform transition-all hover:scale-[1.01] duration-500">
             
            {/* --- Illustration Layer --- */}
            
            {/* Sky */}
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-blue-200 to-[#e6f5e6]"></div>
            
            {/* Sun */}
            <div className="absolute top-6 right-6 text-yellow-400 animate-spin-slow">
              <Sun size={64} fill="currentColor" className="opacity-80" />
            </div>

            {/* Clouds */}
            <div className="absolute top-10 left-[-100px] text-white opacity-80 animate-cloud-move">
               <Cloud size={80} fill="currentColor" />
            </div>
            <div className="absolute top-24 left-[-150px] text-white opacity-60 animate-cloud-move-slow" style={{ animationDelay: '5s' }}>
               <Cloud size={50} fill="currentColor" />
            </div>

            {/* Roads */}
            <div className="absolute bottom-1/3 w-[120%] -left-[10%] h-24 bg-gray-700 transform -rotate-2 flex items-center overflow-hidden border-y-4 border-gray-600">
                {/* Road Stripes */}
                <div className="w-full h-0 border-t-2 border-dashed border-white/50"></div>
                
                {/* School Bus Animation */}
                <div className="absolute left-[-100px] text-yellow-400 animate-car-drive flex flex-col items-center">
                    <Bus size={48} fill="#FBBF24" className="text-yellow-600" />
                    <div className="w-10 h-2 bg-black/20 rounded-full blur-sm mt-1"></div>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 w-24 h-1/3 bg-gray-700 transform -translate-x-1/2 border-x-4 border-gray-600">
                 <div className="h-full w-0 border-r-2 border-dashed border-white/50 mx-auto"></div>
            </div>

            {/* Scenery / Trees */}
            <div className="absolute bottom-20 left-10 text-green-600 hover:text-green-500 transition-colors duration-500 hover:scale-110 transform origin-bottom">
                <Trees size={64} fill="#10B981" />
            </div>
            <div className="absolute bottom-40 right-10 text-green-700 hover:text-green-600 transition-colors duration-500 hover:scale-110 transform origin-bottom z-0">
                <Trees size={80} fill="#15803d" />
            </div>
             <div className="absolute bottom-10 right-32 text-green-500 hover:text-green-400 transition-colors duration-500 hover:scale-110 transform origin-bottom z-0">
                <Trees size={48} fill="#22c55e" />
            </div>

            {/* School Building (Central Focus) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group/building cursor-pointer">
                 {/* Bounce Animation Wrapper */}
                 <div className="animate-bounce" style={{ animationDuration: '2s' }}>
                     {/* Label */}
                     <div className="bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-mc-blue mb-2 whitespace-nowrap border border-blue-100 opacity-0 group-hover/building:opacity-100 transition-opacity">
                        SD Tunas Harapan
                     </div>
                     {/* Icon */}
                     <div className="relative">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-mc-orange z-20 relative">
                             <School size={40} className="text-mc-blue" />
                        </div>
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 bg-mc-orange rounded-full animate-ping opacity-20"></div>
                     </div>
                 </div>
                 {/* Shadow */}
                 <div className="w-16 h-4 bg-black/20 rounded-full blur-md mt-[-10px]"></div>
            </div>

            {/* --- UI Overlay Layer --- */}
            
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6">
                
                {/* Top Badge: Open Hours */}
                <div className="self-start pointer-events-auto bg-white/90 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full shadow-lg border border-white/50 flex items-center gap-2 animate-fade-in-down">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Clock size={14} className="text-mc-blue" />
                    <span className="text-xs font-bold">Buka: Senin - Jumat (07.00 - 15.00)</span>
                </div>

                {/* Bottom Card: Info & Actions */}
                <div className="mt-auto pointer-events-auto bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/50 flex flex-col gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div>
                        <h4 className="font-display font-bold text-lg text-gray-900 flex items-center gap-2">
                           <Map className="text-mc-orange" size={18} />
                           Lokasi Sekolah
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">Jl. Pendidikan No. 123, Kota Harapan</p>
                    </div>
                    
                    <div className="flex gap-2">
                        <button 
                            onClick={handleCopyAddress}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold py-2.5 rounded-xl transition-colors active:scale-95"
                        >
                            {copied ? <Check size={16} className="text-green-600"/> : <Copy size={16} />}
                            {copied ? "Tersalin!" : "Salin Alamat"}
                        </button>
                        <button 
                            onClick={() => window.open("https://maps.google.com/?q=SD+Tunas+Harapan", "_blank")}
                            className="flex-1 flex items-center justify-center gap-2 bg-mc-blue hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors shadow-lg shadow-blue-200 active:scale-95"
                        >
                            <ExternalLink size={16} />
                            Rute Google Maps
                        </button>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-sm transform rotate-3">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900">
                  Kirim Pesan
                </h3>
                <p className="text-sm text-gray-500">Kami siap membantu menjawab pertanyaan Anda.</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-mc-blue focus:ring-4 focus:ring-blue-100/50 outline-none transition-all bg-gray-50/50 focus:bg-white"
                  placeholder="Contoh: Budi Santoso"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Saya adalah</label>
                <div className="relative">
                    <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-mc-blue focus:ring-4 focus:ring-blue-100/50 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none cursor-pointer"
                    >
                    <option>Orang Tua Siswa</option>
                    <option>Calon Wali Murid</option>
                    <option>Alumni</option>
                    <option>Lainnya</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pesan / Pertanyaan</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-mc-blue focus:ring-4 focus:ring-blue-100/50 outline-none transition-all bg-gray-50/50 focus:bg-white resize-none"
                  placeholder="Tuliskan pertanyaan Anda di sini..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-mc-green hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transform transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:rotate-12 transition-transform" />
                Kirim ke WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;