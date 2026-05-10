import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section
          id="home"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#0A0A0A' }}
      >
        <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
              backgroundSize: '60px 60px',
            }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Official Student Club — UIT RGPV Bhopal
          </motion.div>

          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Welcome to{' '}
            <span className="relative">
            <span className="text-gray-300">C-Cell</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 8" fill="none">
              <path d="M2 6C50 2 120 2 218 6" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering Students of UIT RGPV Bhopal through technology, creativity, leadership, and innovation.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
                onClick={() => scrollTo('register')}
                className="bg-white text-black font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base"
            >
              Register Now
            </button>
            <button
                onClick={() => scrollTo('about')}
                className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
            >
              Explore Club
            </button>
          </motion.div>
        </div>

        <motion.button
            onClick={() => scrollTo('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={32} strokeWidth={1.5} />
        </motion.button>
      </section>
  );
}
