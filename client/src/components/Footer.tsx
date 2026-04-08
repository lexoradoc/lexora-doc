/*
 * Footer — Lexora Doc
 * كحلي + ذهبي، ASYCUDA محورياً، واتساب بارز
 * شريط ثقة: البنك المركزي العراقي + ASYCUDA + الهيئة العامة للجمارك
 */
import { Link } from "wouter";
import { MessageCircle, Mail, Phone, Landmark, Shield, CheckCircle, Linkedin, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const footerLinks = {
  الخدمات: [
    { href: "/services", label: "جميع الخدمات" },
    { href: "/pricing", label: "الأسعار والباقات" },
  ],
  الشركة: [
    { href: "/about", label: "من نحن" },
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1c5e] text-white/70" dir="rtl">
      {/* CBI Trust Bar */}
      <div className="bg-[#141650] border-b border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <Landmark className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">وفق تعليمات البنك المركزي العراقي</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <Shield className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">امتثال ASYCUDA World</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <CheckCircle className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">الهيئة العامة للجمارك</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-doc-logo-new_633afbb0.jpg"
                alt="Lexora Doc"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Lexora Doc منصة متخصصة في إدارة ملفات الاستيراد والامتثال التجاري
              وفق تعليمات البنك المركزي العراقي، مع خدمات ASYCUDA ومراجعة الوثائق
              التجارية وتجهيز البيان الكمركي المسبق والنهائي.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل عبر واتساب
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#B8972A] text-sm transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Quick */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-5 text-sm text-white/50">
            <a href="mailto:info@lexoradoc.com" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Mail className="w-3.5 h-3.5" />
              info@lexoradoc.com
            </a>
            <a href="tel:07807437788" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Phone className="w-3.5 h-3.5" />
              07807437788
            </a>
            <a href="https://linkedin.com/lexoradoc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/lexoradoc?igsh=bThvbHFjNjF3aDBp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
          </div>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Lexora Doc. جميع الحقوق محفوظة. المنصة لا تمثل جهة حكومية.
          </p>
        </div>
      </div>
    </footer>
  );
}
