'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-900 to-brand-700 shadow-lg shadow-brand-900/20 transition-shadow group-hover:shadow-brand-900/40">
            <div className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-brand-900">
            AnonymousAnuraG
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-brand-800/70 transition-colors hover:bg-brand-900/5 hover:text-brand-900"
            >
              {item.label}
            </Link>
          ))}

          <button className="ml-4 rounded-full bg-brand-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/25 transition-all hover:-translate-y-px hover:bg-brand-800 hover:shadow-brand-900/40 active:translate-y-0">
            Book a Call
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-brand-900/5 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-900 transition-all duration-300 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-900 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-900 transition-all duration-300 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="stagger-children flex h-full flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-display font-semibold text-brand-900 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}

          <button className="mt-4 rounded-full bg-brand-900 px-10 py-4 text-lg font-semibold text-white shadow-xl">
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  );
};
