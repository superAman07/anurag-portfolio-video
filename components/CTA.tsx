'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

export const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:anuragpal63866@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setIsOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      className="relative overflow-hidden bg-brand-900 py-28 lg:py-36"
      id="contact"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent-light">
          Let&apos;s Work Together
        </p>

        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          I'm ready to elevate 
          <br />
          your videos.
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="rounded-full bg-accent px-10 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-all hover:-translate-y-px hover:bg-orange-600 active:translate-y-0"
          >
            Contact Me →
          </button>

          <Link href="https://www.youtube.com/@AnonymousAnuraG/videos" className="rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white">
            YouTube
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/30">
          Book a free 10-minute strategy call. No commitment — just a
          conversation about how video can transform your business.
        </p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-950/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 text-brand-800/40 transition-colors hover:text-brand-900"
              >
                <X size={24} />
              </button>
              <div className="p-8 sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-900">Message Prepared!</h3>
                    <p className="mt-2 text-brand-800/60 text-balance">
                      Your email client should have opened. If not, please send manually to anuragpal63866@gmail.com
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-display font-bold text-brand-900">Get in Touch</h3>
                    <p className="mt-2 text-brand-800/60">I'll get back to you as soon as possible.</p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-brand-900/10 bg-brand-900/[0.02] px-5 py-4 text-brand-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-2xl border border-brand-900/10 bg-brand-900/[0.02] px-5 py-4 text-brand-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5"
                      />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-2xl border border-brand-900/10 bg-brand-900/[0.02] px-5 py-4 text-brand-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5"
                      />
                      
                      <button 
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 py-4 font-bold text-white transition-all hover:bg-brand-950 active:scale-[0.98]"
                      >
                        <Send size={18} />
                        Send Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
