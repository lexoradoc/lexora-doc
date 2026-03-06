/*
 * Design: Clean Tech Platform
 * Dark navy footer with organized links
 */
import { Link } from "wouter";

const footerLinks = {
  المنصة: [
    { href: "/services", label: "الخدمات" },
    { href: "/templates", label: "القوالب" },
    { href: "/ccg", label: "دليل الامتثال التجاري" },
  ],
  الشركة: [
    { href: "/about", label: "من نحن" },
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Lexora
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed max-w-md">
              منصة رقمية متخصصة في إعداد الوثائق والمراسلات الرسمية للأعمال، مع
              قسم متخصص في الامتثال التجاري لمراجعة وتنظيم ملفات الاستيراد
              والمعاملات المصرفية.
            </p>
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
                      className="text-navy-400 hover:text-white text-sm transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-500 text-xs">
              &copy; {new Date().getFullYear()} Lexora. جميع الحقوق محفوظة.
            </p>
            <p className="text-navy-600 text-xs max-w-lg text-center md:text-start">
              منصة Lexora تقدم خدمات إعداد وتنظيم ومراجعة الوثائق والمستندات
              التجارية فقط. المنصة لا تمثل جهة حكومية ولا تقدم خدمات اعتماد
              رسمي.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
