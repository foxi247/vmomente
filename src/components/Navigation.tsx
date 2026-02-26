import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Меню', href: '/menu' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Отзывы', href: '/reviews' },
  { label: 'Контакты', href: '/contacts' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-blur py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#c9a962]/30 flex items-center justify-center group-hover:border-[#c9a962] transition-colors duration-300">
              <span className="text-sm font-light text-[#f5f0e8] tracking-wider">ВМ</span>
            </div>
            <span className="hidden sm:block text-lg font-extralight text-[#f5f0e8] tracking-wider">
              В Моменте
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-[#c9a962]'
                    : 'text-[#f5f0e8]/70 hover:text-[#f5f0e8]'
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#c9a962]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+79051117137"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] text-sm tracking-wide hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#f5f0e8]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0a0a0a] border-l border-[#c9a962]/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-extralight tracking-wide ${
                        location.pathname === item.href ? 'text-[#c9a962]' : 'text-[#f5f0e8]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  href="tel:+79051117137"
                  className="mt-8 flex items-center gap-3 text-[#c9a962]"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">+7 (905) 111-71-37</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
