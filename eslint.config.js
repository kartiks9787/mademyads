import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/20">
              <Rocket className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              MadeMy<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ads</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                Book Free Call
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-white/10 bg-black/95 px-4 pb-6 pt-2"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-semibold text-white">
              Book Free Call
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
