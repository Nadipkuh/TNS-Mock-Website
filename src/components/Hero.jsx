import React from 'react';
import { motion } from 'react-scroll-motion'; // or standard framer-motion
import { motion as m } from 'framer-motion';
import { Sparkles, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Animated Circuits & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column Text Content */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Next-Gen Lifestyle Innovation
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Technology That Makes Living <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Lighter.</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            Di PT. Teknologi Nyaman Sentosa, kami menghadirkan inovasi teknologi masa depan yang menyatu sempurna dengan dinamika sehari-hari tanpa membebani rutinitas Anda.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#products"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explore Products
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Smart Efficiency</p>
                <p className="text-slate-400 text-xs">Seamless integration</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Ergonomic Comfort</p>
                <p className="text-slate-400 text-xs">Designed for daily life</p>
              </div>
            </div>
          </div>
        </m.div>

        {/* Right Column Interactive Circuit Visual */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-slate-900/60 border border-cyan-500/30 p-8 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 flex flex-col justify-between overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
            
            {/* Animated Nodes Graphic */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-400">SYSTEM ONLINE</span>
              </div>
              <span className="text-xs font-mono text-slate-500">TNS_V2077</span>
            </div>

            <div className="relative z-10 my-auto text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-xl shadow-cyan-500/30 animate-pulse">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Integrated Comfort System</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Memadukan teknologi canggih dengan estetika modern untuk pengalaman hidup yang lebih ringan dan efektif.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-800">
              <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                <p className="text-cyan-400 font-bold text-sm">4°C</p>
                <p className="text-[10px] text-slate-400">Cooling Tech</p>
              </div>
              <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                <p className="text-cyan-400 font-bold text-sm">MagLev</p>
                <p className="text-[10px] text-slate-400">Anti-Gravity</p>
              </div>
              <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                <p className="text-cyan-400 font-bold text-sm">Solar</p>
                <p className="text-[10px] text-slate-400">Dual Charge</p>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}