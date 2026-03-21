/*
 * Navbar — LEXORA DOC
 * كحلي (#2D2F8F) + ذهبي (#B8972A)
 * بدون CCG، بدون القوالب، ASYCUDA محورياً
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";

const darkHeroPages = ["/", "/asycuda-services"];

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/asycuda-services", label: "ASYCUDA" },
  { href: "/services", label: "الخدمات" },
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
          ? "bg-white/95 backdrop-blur-xl border-b border-[#2D2F8F]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-doc-logo-new_633afbb0.jpg"
              alt="Lexora DOC"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location === link.href
                    ? showLight
                      ? "text-white bg-white/15"
                      : "text-[#2D2F8F] bg-[#2D2F8F]/8 font-semibold"
                    : showLight
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-[#2D2F8F] hover:bg-[#2D2F8F]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
            <Button
              className="text-sm font-semibold bg-[#2D2F8F] hover:bg-[#232570] text-white"
              onClick={() => (window.location.href = "/asycuda-services")}
            >
              ابدأ طلبك
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showLight ? "hover:bg-white/10" : "hover:bg-[#2D2F8F]/5"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${showLight ? "text-white" : "text-[#2D2F8F]"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${showLight ? "text-white" : "text-[#2D2F8F]"}`} />
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#2D2F8F]/10"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                    location === link.href
                      ? "text-[#2D2F8F] bg-[#2D2F8F]/8 font-semibold"
                      : "text-gray-600 hover:text-[#2D2F8F] hover:bg-[#2D2F8F]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2 px-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold no-underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  تواصل عبر واتساب
                </a>
                <Button
                  className="w-full bg-[#2D2F8F] hover:bg-[#232570] text-white font-semibold"
                  onClick={() => (window.location.href = "/asycuda-services")}
                >
                  ابدأ طلبك الآن
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
