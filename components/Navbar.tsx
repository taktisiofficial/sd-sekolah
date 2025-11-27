import React, { useState } from 'react';
import { Menu, X, School } from 'lucide-react';
import { SCHOOL_NAME, WA_LINK_REG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'PPDB', href: '#ppdb' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-mc-blue rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                <School size={24} />
            </div>
            <span className="font-display font-bold text-xl text-gray-800 tracking-tight group-hover:text-mc-blue transition-colors">
              {SCHOOL_NAME}
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-gray-600 hover:text-mc-blue font-semibold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
                href={WA_LINK_REG}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mc-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-md flex items-center gap-2"
            >
                Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-mc-blue hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a 
                href={WA_LINK_REG}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center mt-4 bg-mc-orange active:bg-orange-700 text-white px-5 py-3 rounded-xl font-bold shadow-sm"
            >
                Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;