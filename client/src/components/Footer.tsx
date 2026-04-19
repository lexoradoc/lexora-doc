/*
 * Footer — Lexora Doc
 * كحلي + ذهبي، ASYCUDA محورياً، واتساب بارز
 * شريط ثقة: البنك المركزي العراقي + ASYCUDA + الهيئة العامة للجمارك
 * قسم المراسلات الرسمية: الإدارة العامة
 */
import { Link } from "wouter";
import { MessageCircle, Mail, Phone, Landmark, Shield, CheckCircle, Linkedin, Instagram, ShieldCheck, Send } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/9647844342200";
const MGMT_EMAIL = "management@lexoradoc.com";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const subscribe = trpc.newsletter.subscribe.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("يرجى إدخال بريدك الإلكتروني");
      return;
    }

    setIsLoading(true);
    try {
      const result = await subscribe.mutateAsync({ email });
      if (result.success) {
        toast.success(result.isNew ? "تم الاشتراك بنجاح!" : "أنت مشترك بالفعل");
        setEmail("");
      }
    } catch (error: any) {
      toast.error(error?.message || "حدث خطأ أثناء الاشتراك");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="بريدك الإلكتروني"
        className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#B8972A]/50 transition-colors"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-5 py-2.5 rounded-lg bg-[#B8972A] text-white font-semibold text-sm hover:bg-[#a87d1f] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Send className="w-4 h-4" />
        {isLoading ? "جاري..." : "اشترك"}
      </button>
    </form>
  );
}

const footerLinks = {
  الخدمات: [
    { href: "/services", label: "جميع الخدمات" },
    { href: "/pricing", label: "الأسعار والباقات" },
  ],
  الشركة: [
    { href: "/about", label: "من نحن" },
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/terms", label: "الشروط والأحكام" },
    { href: "/privacy", label: "سياسة الخصوصية" },
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

      {/* Official Logo Seal */}
      <div className="py-10 flex flex-col items-center justify-center border-b border-white/5">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-doc-logo-new_633afbb0.jpg"
            alt="Lexora Doc"
            className="h-16 md:h-20 w-auto object-contain"
            style={{ imageRendering: 'auto' }}
          />
        </div>
        <p className="text-white/30 text-xs mt-4 tracking-wider font-medium">إدارة ملفات الاستيراد والامتثال التجاري</p>
      </div>

      <div className="container py-14">
        {/* Newsletter Section */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-l from-[#B8972A]/8 to-transparent border border-[#B8972A]/20">
          <h4 className="text-white font-bold text-sm mb-2">اشترك في النشرة البريدية</h4>
          <p className="text-white/50 text-xs mb-4">احصل على آخر الأخبار والعروض الخاصة مباشرة في بريدك</p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
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

        {/* ===== المراسلات الرسمية — الإدارة العامة ===== */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            <div className="relative p-6 rounded-2xl bg-gradient-to-l from-[#B8972A]/8 to-transparent border border-[#B8972A]/20">
              {/* Decorative line */}
              <div className="absolute top-0 right-6 w-12 h-0.5 bg-[#B8972A]/40 rounded-full" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#B8972A]/15 border border-[#B8972A]/25 flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-6 h-6 text-[#B8972A]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm mb-1">المراسلات الرسمية</h4>
                  <p className="text-white/40 text-xs mb-2">الإدارة العامة | General Management</p>
                </div>

                {/* Email link */}
                <a
                  href={`mailto:${MGMT_EMAIL}?subject=${encodeURIComponent("مراسلة رسمية — Lexora Doc")}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B8972A]/15 border border-[#B8972A]/30 text-[#B8972A] font-bold text-sm hover:bg-[#B8972A]/25 transition-all no-underline flex-shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  {MGMT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Quick */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-5 text-sm text-white/50">
            <a href="mailto:info@lexoradoc.com" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Mail className="w-3.5 h-3.5" />
              info@lexoradoc.com
            </a>
            <a href="tel:07844342200" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Phone className="w-3.5 h-3.5" />
              07844342200
            </a>
            <a href="https://linkedin.com/lexoradoc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/lexoradoc?igsh=bThvbHFjNjF3aDBp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1Aywk7SYHX/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#B8972A] transition-colors no-underline">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
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
