/*
 * Design: Clean Tech Platform — IBM Plex Sans Arabic
 * Navy (#0F172A) primary, white bg, blue accents
 * Glassmorphism nav on scroll, clean minimal style
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Pages with dark hero backgrounds where nav text should be white
const darkHeroPages = ["/", "/ccg"];

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/ccg", label: "CCG" },
  { href: "/services", label: "الخدمات" },
  { href: "/templates", label: "القوالب" },
  { href: "/blog", label: "المدونة" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDarkHero = darkHeroPages.includes(location);
  const showLight = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-navy-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${showLight ? 'bg-white/20 backdrop-blur-sm' : 'bg-navy-900'}`}>
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${showLight ? 'text-white' : 'text-navy-900'}`}>
              Lexora
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location === link.href
                    ? showLight ? "text-white bg-white/15" : "text-navy-900 bg-navy-50"
                    : showLight ? "text-white/70 hover:text-white hover:bg-white/10" : "text-navy-500 hover:text-navy-900 hover:bg-navy-50/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className={`text-sm transition-colors ${showLight ? 'border-white/30 text-white hover:bg-white/10 bg-transparent' : 'border-navy-200 text-navy-700 hover:bg-navy-50'}`}
              onClick={() => window.location.href = '/ccg'}
            >
              تعرف على CCG
            </Button>
            <Button
              className={`text-sm ${showLight ? 'bg-white text-navy-900 hover:bg-white/90' : 'bg-navy-900 hover:bg-navy-800 text-white'}`}
              onClick={() => window.location.href = '/contact'}
            >
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${showLight ? 'hover:bg-white/10' : 'hover:bg-navy-50'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${showLight ? 'text-white' : 'text-navy-900'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${showLight ? 'text-white' : 'text-navy-900'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-navy-100"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                    location === link.href
                      ? "text-navy-900 bg-navy-50"
                      : "text-navy-500 hover:text-navy-900 hover:bg-navy-50/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2 px-4">
                <Button
                  variant="outline"
                  className="w-full border-navy-200 text-navy-700"
                  onClick={() => window.location.href = '/ccg'}
                >
                  تعرف على CCG
                </Button>
                <Button
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
