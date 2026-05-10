import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTarget, FiMapPin, FiUsers } from 'react-icons/fi';

const stats = [
  { icon: <FiTarget size={28} />, value: '6 Teams', label: 'Specialized Teams' },
  { icon: <FiMapPin size={28} />, value: 'UIT RGPV', label: 'Based in Bhopal' },
  { icon: <FiUsers size={28} />, value: 'Student Driven', label: 'By Students, For Students' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
      <section id="about" className="py-24 bg-white" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex justify-center mb-4">
          <span className="text-[#0A0A0A] text-sm font-semibold uppercase tracking-widest bg-gray-100 px-4 py-1.5 rounded-full">
            About Us
          </span>
          </motion.div>

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                     className="text-4xl sm:text-5xl font-bold text-[#0F172A] text-center mb-6 tracking-tight">
            Who We Are
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="text-lg text-[#64748B] text-center max-w-3xl mx-auto leading-relaxed mb-16">
            C-Cell is the official student-driven club of UIT RGPV Bhopal, dedicated to fostering
            technology, creativity, leadership, and personality development among students. We
            provide a platform where ambition meets opportunity.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
                <motion.div key={stat.value} custom={i + 3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            className="bg-white rounded-2xl border border-[#E2E8F0] p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-[#0A0A0A] mb-5">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}