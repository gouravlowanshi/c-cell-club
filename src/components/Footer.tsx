import { FiZap } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
      <footer className="bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
                  <FiZap className="text-white text-lg" />
                </div>
                <span className="text-2xl font-bold tracking-tight">C-Cell</span>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left max-w-xs leading-relaxed">
                Empowering Students of UIT RGPV Bhopal through technology, creativity, and leadership.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Quick Links</h4>
              {['Home', 'About', 'Teams', 'Register'].map((link) => (
                  <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                          className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </button>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Follow Us</h4>
              <a href="https://instagram.com/ccell_uitrgpv" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
                  <FaInstagram size={16} />
                </div>
                <span className="text-sm">@ccell_uitrgpv</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
                  <FaLinkedinIn size={16} />
                </div>
                <span className="text-sm">C-Cell UIT RGPV</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-sm">© 2025 C-Cell, UIT RGPV Bhopal</p>
            <p className="text-gray-400 text-sm">Made with ❤️ by C-Cell Tech Team</p>
          </div>
        </div>
      </footer>
  );
}