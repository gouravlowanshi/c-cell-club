import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiUser, FiMail, FiPhone, FiHash } from 'react-icons/fi';

interface FormData {
  fullName: string; email: string; phone: string;
  rollNumber: string; branch: string; year: string;
}
interface FormErrors {
  fullName?: string; email?: string; phone?: string;
  rollNumber?: string; branch?: string; year?: string;
}

const branchOptions = ['CS', 'IT', 'EC', 'ME', 'CE', 'Other'];
const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.email.trim()) { errors.email = 'Email is required'; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { errors.email = 'Enter a valid email address'; }
  if (!data.phone.trim()) { errors.phone = 'Phone number is required'; }
  else if (!/^\d{10}$/.test(data.phone.trim())) { errors.phone = 'Phone must be exactly 10 digits'; }
  if (!data.rollNumber.trim()) errors.rollNumber = 'Roll number is required';
  if (!data.branch) errors.branch = 'Please select your branch';
  if (!data.year) errors.year = 'Please select your year';
  return errors;
}

const inputBase = 'w-full bg-white border rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all duration-200 focus:ring-2 focus:ring-black/10 focus:border-[#0A0A0A]';

export default function Register() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({ fullName: '', email: '', phone: '', rollNumber: '', branch: '', year: '' });

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    await fetch("https://c-cell-backend-production.up.railway.app/studentDetails/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setSubmitted(true);
  };

  return (
      <section id="register" className="py-24 bg-white" ref={ref}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex justify-center mb-4">
          <span className="text-[#0A0A0A] text-sm font-semibold uppercase tracking-widest bg-gray-100 px-4 py-1.5 rounded-full">
            Seminar Registration
          </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
                     className="text-4xl sm:text-5xl font-bold text-[#0F172A] text-center mb-3 tracking-tight">
            Register for Our Seminar
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#64748B] text-center text-base mb-10">
            Fill in your details and be part of something big
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.3 }}
                      className="bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-10" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                      <FiCheckCircle size={40} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Registration Successful!</h3>
                    <p className="text-[#64748B] text-base">See you at the Seminar 🎉</p>
                  </motion.div>
              ) : (
                  <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={16} />
                        <input type="text" value={form.fullName} onChange={set('fullName')} placeholder="Enter your full name"
                               className={`${inputBase} pl-10 ${errors.fullName ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={16} />
                        <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com"
                               className={`${inputBase} pl-10 ${errors.email ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={16} />
                        <input type="tel" value={form.phone} onChange={set('phone')} placeholder="10-digit mobile number"
                               className={`${inputBase} pl-10 ${errors.phone ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Roll Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FiHash className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={16} />
                        <input type="text" value={form.rollNumber} onChange={set('rollNumber')} placeholder="Your university roll number"
                               className={`${inputBase} pl-10 ${errors.rollNumber ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                      </div>
                      {errors.rollNumber && <p className="text-red-500 text-xs mt-1">{errors.rollNumber}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Branch <span className="text-red-500">*</span></label>
                        <select value={form.branch} onChange={set('branch')} className={`${inputBase} ${errors.branch ? 'border-red-400' : 'border-[#E2E8F0]'} appearance-none`}>
                          <option value="">Select branch</option>
                          {branchOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Year <span className="text-red-500">*</span></label>
                        <select value={form.year} onChange={set('year')} className={`${inputBase} ${errors.year ? 'border-red-400' : 'border-[#E2E8F0]'} appearance-none`}>
                          <option value="">Select year</option>
                          {yearOptions.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-[#0A0A0A] text-white font-semibold py-3.5 rounded-xl hover:bg-[#333333] active:scale-[0.98] transition-all duration-200 text-base mt-2">
                      Register Now
                    </button>
                  </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
  );
}