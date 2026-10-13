import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Sun, BatteryCharging, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Products() {
  // Breeze Hydration Widget State
  const [currentTemp, setCurrentTemp] = useState(4);
  const [solarCharging, setSolarCharging] = useState(true);

  // Breeze Bag Widget State
  const [magLevActive, setMagLevActive] = useState(true);
  const [actualWeight, setActualWeight] = useState(8); // in kg

  // Calculated perceived weight
  const perceivedWeight = magLevActive ? (actualWeight * 0.15).toFixed(1) : actualWeight.toFixed(1);

  return (
    <section id="products" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">Our Innovations</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Value-Focused Flagship Products
          </p>
          <p className="text-slate-400 mt-3 text-sm">
            Produk canggih dengan orientasi manfaat nyata bagi kenyamanan dan efisiensi hidup Anda.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* PRODUCT 1: Breeze Hydration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-950 border border-slate-800 p-8 lg:p-12 shadow-2xl"
          >
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Smart Water Bottle
              </div>

              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-extrabold text-white">Breeze Hydration</h3>
                {/* Subtle Indonesian Flag Accent */}
                <span className="text-xs px-2 py-0.5 rounded bg-red-600/30 text-red-200 border border-red-500/30 font-bold">
                  🇮🇩 ID Accent
                </span>
              </div>

              <p className="text-cyan-300 font-medium text-base">
                Menjaga minuman Anda tetap dingin sempurna di suhu ideal 4°C meskipun berada di cuaca panas ekstrem.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Dilengkapi dengan tampilan digital real-time, pegangan ergonomis anti-slip, serta pengisian daya ganda melalui pengisian nirkabel dan panel surya fleksibel.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Real-time digital temperature & battery status display
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Dual wireless & flexible solar panel charging
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Ergonomic anti-slip body structure
                </li>
              </ul>
            </div>

            {/* Right Interactive Widget */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-inner space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-cyan-400">BREEZE HUD CONTROL</span>
                  <span className="text-[10px] text-slate-500 font-mono">MODEL: HYDRA-1</span>
                </div>

                {/* Display Screen Simulation */}
                <div className="p-5 rounded-xl bg-slate-950 border border-cyan-500/20 text-center space-y-2 relative overflow-hidden">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Current Temperature</p>
                  <div className="text-4xl font-extrabold text-cyan-400 font-mono tracking-tight flex items-center justify-center gap-1">
                    {currentTemp}°C
                  </div>
                  <p className="text-xs text-slate-400">Target: <span className="text-cyan-300 font-bold">4°C</span></p>

                  <div className="flex justify-between items-center pt-3 text-xs border-t border-slate-800/80 text-slate-400">
                    <span className="flex items-center gap-1">
                      <BatteryCharging className="w-3.5 h-3.5 text-cyan-400" /> Battery: 68%
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className={`w-3.5 h-3.5 ${solarCharging ? 'text-amber-400 animate-spin' : 'text-slate-600'}`} /> 
                      Solar: {solarCharging ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-2">Simulasikan Temperatur Air:</label>
                    <div className="flex gap-2">
                      {[2, 4, 8, 15].map((temp) => (
                        <button
                          key={temp}
                          onClick={() => setCurrentTemp(temp)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            currentTemp === temp
                              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {temp}°C
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSolarCharging(!solarCharging)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                    Toggle Solar Charging Panel
                  </button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* PRODUCT 2: Breeze Bag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-950 border border-slate-800 p-8 lg:p-12 shadow-2xl"
          >
            {/* Left Interactive Widget */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-inner space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-cyan-400">MAGLEV SIMULATOR</span>
                  <span className="text-[10px] text-slate-500 font-mono">STATUS: ACTIVE</span>
                </div>

                {/* Weight Visual Indicator */}
                <div className="p-5 rounded-xl bg-slate-950 border border-cyan-500/20 text-center space-y-3">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Perceived Laptop Load</p>
                  <div className="text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
                    {perceivedWeight} <span className="text-lg text-slate-400 font-sans">kg</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Beban Asli: <span className="text-slate-200 font-bold">{actualWeight} kg</span>
                  </p>

                  <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300">
                    {magLevActive
                      ? '⚡ Levitasi Magnetik Aktif: Beban terasa 85% lebih ringan!'
                      : '⚠️ Levitasi Magnetik Nonaktif: Beban penuh terasa.'}
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">Levitasi Magnetik</span>
                    <button
                      onClick={() => setMagLevActive(!magLevActive)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${
                        magLevActive ? 'bg-cyan-500' : 'bg-slate-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          magLevActive ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Beban Laptop / Items:</span>
                      <span className="font-bold text-cyan-400">{actualWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="15"
                      value={actualWeight}
                      onChange={(e) => setActualWeight(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Description */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
                <Zap className="w-3.5 h-3.5" />
                Anti-Gravity Backpack
              </div>

              <h3 className="text-3xl font-extrabold text-white">Breeze Bag</h3>

              <p className="text-cyan-300 font-medium text-base">
                Menghilangkan beban berat hingga beberapa laptop terasa tanpa bobot (weightless).
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Menggunakan teknologi levitasi magnetik mutakhir untuk meredam bobot bawaan, dilengkapi panel kontrol digital interaktif serta kompartemen berbusa tebal untuk perlindungan maksimal.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Advanced magnetic levitation system
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Interactive digital HUD control panel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Multi-laptop shockproof padded compartments
                </li>
              </ul>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}