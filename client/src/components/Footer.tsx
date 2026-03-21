/*
 * Footer — LEXORA DOC
 * كحلي + ذهبي، ASYCUDA محورياً، واتساب بارز
 */
import { Link } from "wouter";
import { MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";

const footerLinks = {
  الخدمات: [
    { href: "/asycuda-services", label: "خدمات ASYCUDA" },
    { href: "/services", label: "جميع الخدمات" },
  ],
  الشركة: [
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1c5e] text-white/70" dir="rtl">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-doc-logo-new_633afbb0.jpg"
                alt="Lexora DOC"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              منصة متخصصة في إعداد البيانات الكمركية المسبقة ومراجعة ملفات الاستيراد
              وفق متطلبات نظام ASYCUDA وتعليمات البنك المركزي العراقي.
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
          </div>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Lexora DOC. جميع الحقوق محفوظة. المنصة لا تمثل جهة حكومية.
          </p>
        </div>
      </div>
    </footer>
  );
}
