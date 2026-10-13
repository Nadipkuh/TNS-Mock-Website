import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass } from 'lucide-react';

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section id="vision-mission" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            Our Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Vision & Mission</h2>
          <p className="text-slate-300 italic text-base sm:text-lg leading-relaxed pt-2">
            "In a world that never slows down, technology should ease your pace, not add to it. We bring accessible innovation into everyday life, blending seamlessly into your dynamic routine to deliver effortless comfort right when you need it. True technology doesn't just advance it makes living lighter."
          </p>
        </motion.div>

        {/* Interactive Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full bg-slate-900 border border-slate-800 flex gap-2">
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'vision'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              Vision
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'mission'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              Mission
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'vision' ? (
            <motion.div
              key="vision"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-2xl text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Integrating Technology with Comfort
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-base">
                Menjadi pelopor utama dalam mengintegrasikan kemajuan teknologi mutakhir dengan tingkat kenyamanan maksimal dalam kehidupan sehari-hari penggunanya.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="mission"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-2xl text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Introducing Technology to Everyone and Bringing Comfort in Rush
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-base">
                Memperkenalkan teknologi yang ramah pengguna kepada seluruh lapisan masyarakat serta menghadirkan kenyamanan nyata di tengah kepenatan aktivitas yang serba cepat.
              </p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}