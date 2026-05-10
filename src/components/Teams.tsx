import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayers, FiEdit3, FiSettings, FiGlobe, FiAward } from 'react-icons/fi';

const teams = [
  { icon: <FiCode size={26} />, name: 'Tech Team', description: 'Building the digital future' },
  { icon: <FiLayers size={26} />, name: 'Graphic Designing', description: 'Crafting visual stories' },
  { icon: <FiEdit3 size={26} />, name: 'Media & Content Writing', description: 'Telling stories that matter' },
  { icon: <FiSettings size={26} />, name: 'Operations & Management', description: 'Keeping everything running smoothly' },
  { icon: <FiGlobe size={26} />, name: 'PR & Outreach', description: 'Connecting with the world' },
  { icon: <FiAward size={26} />, name: 'Personality Development', description: 'Shaping future leaders' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Teams() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
      <section id="teams" className="py-24 bg-[#F5F5F5]" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex justify-center mb-4">
          <span className="text-[#0A0A0A] text-sm font-semibold uppercase tracking-widest bg-gray-200 px-4 py-1.5 rounded-full">
            Our Teams
          </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
                     className="text-4xl sm:text-5xl font-bold text-[#0F172A] text-center mb-4 tracking-tight">
            Meet the Teams
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#64748B] text-center text-lg mb-14 max-w-2xl mx-auto">
            Six specialized teams working in harmony to deliver excellence across every domain.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, i) => (
                <motion.div key={team.name} custom={i} variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            className="group bg-white rounded-2xl border border-[#E2E8F0] p-7 relative overflow-hidden cursor-default hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-[#0A0A0A] mb-5 group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors duration-300">
                    {team.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug">{team.name}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{team.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}