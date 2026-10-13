import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">PT. TEKNOLOGI NYAMAN SENTOSA</p>
            <p className="text-slate-500 text-[11px]">Make Your Dream Comfort</p>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-6 text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#vision-mission" className="hover:text-cyan-400 transition-colors">Vision & Mission</a>
          <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-slate-500">
          Copyright © 2077 PT. Teknologi Nyaman Sentosa. All rights reserved.
        </p>

      </div>
    </footer>
  );
}