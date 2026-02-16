import React from 'react';
import Link from 'next/link';

const footerLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-900/[0.06] bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-900">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <span className="font-display text-base font-bold text-brand-900">
            burnwe
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-brand-800/50">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-brand-800/30">
          © {new Date().getFullYear()} Burnwe
        </p>
      </div>
    </footer>
  );
};
