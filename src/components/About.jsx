import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, HeartHandshake, Rocket, Quote, UserCheck } from 'lucide-react';

export default function About() {
  const teamMembers = [
    { name: 'Daffa Adli', role: 'PR Manager' },
    { name: 'Yuliandri', role: 'Researcher' },
    { name: 'Amri Ihsan Yasa', role: 'Researcher' },
    { name: 'Maulana Nadhif Alwahas', role: 'Marketing' },
  ];

  const coreValues = [
    {
      title: 'Creativity',
      desc: 'Encouraging new ideas and solutions.',
      icon: Lightbulb,
    },
    {
      title: 'Technology',
      desc: 'Continuous development and growth opportunities.',
      icon: Cpu,
    },
    {
      title: 'Comfort',
      desc: 'Make your life easier.',
      icon: HeartHandshake,
    },
    {
      title: 'Innovation',
      desc: 'Creating future-driven solutions.',
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">About Us</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Penggabungan Kenyamanan & Teknologi Masa Depan
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            PT. Teknologi Nyaman Sentosa didirikan dengan tekad untuk menyajikan inovasi bermakna yang secara aktif meringankan kehidupan masyarakat modern.
          </p>
        </div>

        {/* Chairman Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-xl">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                    {/* Placeholder atau Representasi Foto Chairman */}
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <UserCheck className="w-16 h-16 text-cyan-400 mb-2" />
                      <span className="text-white font-bold text-sm">Alif Fatih Hidayat</span>
                      <span className="text-xs text-slate-400">Chairman TNS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase">
                <Quote className="w-4 h-4" />
                Chairman Spotlight
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Alif Fatih Hidayat</h3>
              <p className="text-slate-400 text-sm">Leader & Visionary of PT. Teknologi Nyaman Sentosa</p>
              
              <blockquote className="p-6 rounded-2xl bg-slate-950/80 border-l-4 border-cyan-400 italic text-cyan-200 text-lg sm:text-xl font-medium shadow-inner">
                "Semangat Berjuang. SUKSES."
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Meet Our Team Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Meet Our Team</h3>
            <p className="text-slate-400 text-sm mt-1">Para profesional di balik inovasi berkelanjutan TNS</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-cyan-400 font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Core Values</h3>
            <p className="text-slate-400 text-sm mt-1">Prinsip dasar yang mengarahkan setiap langkah karya kami</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-950 transition-all duration-300 shadow-md group text-left"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}