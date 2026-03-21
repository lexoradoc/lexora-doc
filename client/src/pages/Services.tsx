/*
 * LEXORA DOC — صفحة الخدمات
 * ASYCUDA محورياً، بدون CCG وقوالب
 * موجّه للبيع والتحويل عبر واتساب
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Landmark,
  Zap,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";
const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-hscode-CmFen8YZEZHZzkgg9yMicb.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  {
    icon: ShieldCheck,
    title: "خدمات ASYCUDA الجمركية",
    description:
      "الخدمة المحورية الأساسية في Lexora Doc. نتولى إعداد البيان الجمركي المسبق، مراجعة ملفات الاستيراد، والتأكد من الامتثال الكامل لمتطلبات نظام ASYCUDA World ومتطلبات البنك المركزي العراقي.",
    features: [
      "إعداد البيان الجمركي المسبق",
      "مراجعة ملفات الاستيراد",
      "الامتثال لمتطلبات البنك المركزي",
      "تسريع إجراءات التخليص",
    ],
    color: "bg-[#2D2F8F]/10 text-[#2D2F8F]",
    borderColor: "hover:border-[#2D2F8F]/20",
    badge: "الخدمة الرئيسية",
    badgeColor: "bg-[#2D2F8F]/10 text-[#2D2F8F]",
    href: "/asycuda-services",
    cta: "استكشف خدمات ASYCUDA",
    isMain: true,
  },
  {
    icon: FileText,
    title: "إعداد الوثائق والمراسلات الرسمية",
    description:
      "نقدم خدمات إعداد وصياغة الوثائق والمراسلات الرسمية بطريقة احترافية ومنظمة. نساعدك في إعداد الكتب الرسمية والتقارير والمذكرات وجميع أنواع المراسلات الإدارية.",
    features: [
      "صياغة الكتب الرسمية",
      "إعداد التقارير الإدارية",
      "كتابة المذكرات الداخلية",
      "إعداد المراسلات الخارجية",
    ],
    color: "bg-blue-50 text-blue-600",
    borderColor: "hover:border-blue-200",
    badge: null,
    badgeColor: "",
    href: null,
    cta: "اطلب الخدمة",
    isMain: false,
  },
  {
    icon: Landmark,
    title: "الامتثال لمتطلبات البنك المركزي",
    description:
      "تنظيم ملفات التحويل المصرفي والاستيراد وفق التعليمات الصادرة عن البنك المركزي العراقي. نضمن أن جميع مستنداتك مستوفية للمتطلبات التنظيمية الحديثة.",
    features: [
      "مراجعة متطلبات التحويل المصرفي",
      "تدقيق الفواتير التجارية",
      "مطابقة المستندات",
      "تنظيم الملفات قبل التقديم",
    ],
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-200",
    badge: null,
    badgeColor: "",
    href: null,
    cta: "اطلب الخدمة",
    isMain: false,
  },
  {
    icon: Building2,
    title: "خدمات الشركات والمستوردين",
    description:
      "حلول متكاملة للشركات الكبرى والمستوردين في إدارة ملفات الاستيراد والتصدير. نوفر دعماً مستمراً لضمان سير العمليات التجارية بكفاءة عالية.",
    features: [
      "إدارة ملفات الاستيراد المتعددة",
      "متابعة إجراءات التخليص",
      "تقارير دورية عن الملفات",
      "دعم مستمر على مدار الساعة",
    ],
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "hover:border-emerald-200",
    badge: null,
    badgeColor: "",
    href: null,
    cta: "اطلب الخدمة",
    isMain: false,
  },
  {
    icon: Zap,
    title: "خدمة الإنجاز السريع",
    description:
      "للحالات المستعجلة، نوفر خدمة الإنجاز السريع خلال 12-24 ساعة. نضمن إعداد ملفك الجمركي بأعلى مستويات الدقة والاحترافية في أقصر وقت ممكن.",
    features: [
      "إنجاز خلال 12-24 ساعة",
      "مراجعة فورية للمستندات",
      "تواصل مباشر مع المختص",
      "متابعة لحظية للتقدم",
    ],
    color: "bg-purple-50 text-purple-600",
    borderColor: "hover:border-purple-200",
    badge: "سريع",
    badgeColor: "bg-purple-100 text-purple-700",
    href: null,
    cta: "اطلب الخدمة السريعة",
    isMain: false,
  },
];

export default function Services() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10 pt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-xs font-semibold text-[#2D2F8F] tracking-wider uppercase mb-3 block"
              >
                خدماتنا
              </motion.span>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                خدمات متخصصة في{" "}
                <span className="text-[#2D2F8F]">ASYCUDA</span>{" "}
                والوثائق الرسمية
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-gray-500 leading-relaxed mb-8"
              >
                نقدم حلولاً شاملة لجميع احتياجاتك في إعداد الوثائق الجمركية،
                مراجعة ملفات الاستيراد، والامتثال لمتطلبات البنك المركزي العراقي.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md no-underline"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل معنا الآن
                </a>
                <Link href="/asycuda-services">
                  <Button variant="outline" className="border-[#2D2F8F]/30 text-[#2D2F8F] hover:bg-[#2D2F8F]/5">
                    خدمات ASYCUDA التفصيلية
                    <ArrowLeft className="w-4 h-4 ms-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} custom={3}>
              <img
                src={SERVICES_BG}
                alt="خدمات Lexora Doc"
                className="rounded-2xl shadow-xl shadow-gray-900/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CBI TRUST BAR */}
      <section className="py-5 bg-gradient-to-r from-[#f8f6f0] via-[#faf8f2] to-[#f8f6f0] border-y border-[#B8972A]/15">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#B8972A]" />
              <span className="text-[#2D2F8F] text-sm font-bold">وفق تعليمات البنك المركزي العراقي</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2D2F8F]" />
              <span className="text-[#2D2F8F] text-sm font-bold">امتثال ASYCUDA World</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-[#2D2F8F] text-sm font-bold">الهيئة العامة للجمارك</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              className={`bg-white rounded-2xl border ${service.isMain ? "border-[#2D2F8F]/20 shadow-md" : "border-gray-100"} p-8 lg:p-10 ${service.borderColor} hover:shadow-lg transition-all duration-300 relative`}
            >
              {service.badge && (
                <span className={`absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-semibold ${service.badgeColor}`}>
                  {service.badge}
                </span>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {service.href ? (
                      <Link href={service.href}>
                        <Button className="bg-[#2D2F8F] hover:bg-[#232570] text-white text-sm">
                          {service.cta}
                          <ArrowLeft className="w-4 h-4 ms-2" />
                        </Button>
                      </Link>
                    ) : (
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all no-underline"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {service.cta}
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-white mb-4">
              هل تحتاج إلى مساعدة في اختيار الخدمة المناسبة؟
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/70 max-w-lg mx-auto mb-8">
              تواصل معنا عبر واتساب وسيساعدك فريقنا في تحديد الخدمة الأنسب لاحتياجاتك
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
