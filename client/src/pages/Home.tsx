/*
 * LEXORA DOC — الصفحة الرئيسية
 * ASYCUDA محورياً، بدون CCG وقوالب
 * كحلي (#2D2F8F) + ذهبي (#B8972A)
 * موجّه للبيع والتحويل عبر واتساب
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Shield,
  Clock,
  Users,
  Star,
  ChevronDown,
  Zap,
  Award,
  Phone,
  ClipboardList,
  Search,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-hero-Psp8nLL4ffUZTZtJe2cSMB.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const asycudaServices = [
  {
    icon: FileText,
    title: "إعداد البيان الجمركي المسبق",
    description: "تحضير وصياغة البيان المسبق بدقة عالية وفقاً لمتطلبات نظام ASYCUDA World.",
  },
  {
    icon: ClipboardList,
    title: "إعداد البيان الجمركي النهائي",
    description: "إعداد البيان النهائي الكامل بعد وصول البضاعة وفق اشتراطات هيئة الجمارك العراقية.",
  },
  {
    icon: Shield,
    title: "مراجعة الوثائق التجارية",
    description: "فحص شامل لجميع مستندات الاستيراد والتأكد من مطابقتها لتعليمات البنك المركزي العراقي.",
  },
  {
    icon: Search,
    title: "تدقيق HS Code",
    description: "تصنيف البضاعة بدقة وفق نظام المنسق الدولي (HS Code) لتجنب أخطاء التعريفة الجمركية.",
  },
  {
    icon: CheckCircle2,
    title: "تدقيق الفواتير والمستندات",
    description: "مراجعة الفواتير التجارية والتحقق من تطابقها مع المتطلبات التنظيمية لنظام ASYCUDA.",
  },
  {
    icon: Award,
    title: "الامتثال لمتطلبات البنك المركزي",
    description: "ضمان توافق جميع المستندات مع تعليمات البنك المركزي العراقي ومتطلبات التحويل المصرفي.",
  },
];

const stats = [
  { value: "+500", label: "ملف معالج" },
  { value: "+200", label: "عميل راضٍ" },
  { value: "98%", label: "نسبة النجاح" },
  { value: "24h", label: "وقت الاستجابة" },
];

const faqs = [
  {
    question: "ما هو نظام ASYCUDA؟",
    answer: "ASYCUDA (Automated System for Customs Data) هو نظام آلي لبيانات الجمارك تستخدمه هيئة الجمارك العراقية لمعالجة البيانات الجمركية وتسهيل التجارة الدولية.",
  },
  {
    question: "كيف يمكنني البدء بطلب الخدمة؟",
    answer: "يمكنك التواصل معنا مباشرة عبر واتساب أو ملء نموذج الطلب في صفحة ASYCUDA. سيتواصل معك فريقنا خلال 24 ساعة.",
  },
  {
    question: "ما هي المستندات المطلوبة؟",
    answer: "تشمل المستندات الأساسية: الفاتورة التجارية، بوليصة الشحن، شهادة المنشأ، وأي مستندات خاصة بطبيعة البضاعة. سيرشدك فريقنا بحسب كل حالة.",
  },
  {
    question: "كم يستغرق إعداد الملف؟",
    answer: "يتراوح وقت الإعداد بين 24-48 ساعة حسب تعقيد الملف واكتمال المستندات المقدمة.",
  },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-[#2D2F8F]/30 shadow-sm" : "border-gray-200 hover:border-[#2D2F8F]/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-start bg-transparent"
      >
        <span className={`font-semibold text-sm transition-colors ${open ? "text-[#2D2F8F]" : "text-gray-800"}`}>{item.question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ms-3 ${open ? "rotate-180 text-[#2D2F8F]" : "text-gray-400"}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div dir="rtl">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1a1c5e]/95 via-[#2D2F8F]/85 to-[#1a1c5e]/70" />
        </div>

        <div className="container relative z-10 pt-28 pb-24">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/40 mb-6">
                <Award className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">الخبراء في نظام ASYCUDA العراق</span>
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#B8972A]">Lexora Doc</span>{" "}
              إدارة ملفات الاستيراد{" "}
              والامتثال التجاري
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
              نُعدّ ملفات الاستيراد والبيانات الجمركية بدقة احترافية وفق متطلبات نظام ASYCUDA وتعليمات البنك المركزي العراقي. سرعة وضمان وامتثال كامل.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب الآن
              </a>
              <Link
                href="/asycuda-services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-all no-underline"
              >
                تعرف على خدماتنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="container py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#B8972A]">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CBI TRUST BAR ===== */}
      <section className="py-6 bg-gradient-to-r from-[#f8f6f0] via-[#faf8f2] to-[#f8f6f0] border-y border-[#B8972A]/15">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4"
          >
            <div className="flex items-start gap-3 text-center md:text-start">
              <div className="w-10 h-10 rounded-full bg-[#B8972A]/15 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-[#B8972A]" />
              </div>
              <div>
                <p className="text-[#2D2F8F] font-bold text-sm">وفق تعليمات البنك المركزي العراقي</p>
                <p className="text-gray-500 text-xs">جميع الملفات تُعدّ وفق الضوابط والتعليمات الصادرة عن البنك المركزي العراقي</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-center md:text-start">
              <div className="w-10 h-10 rounded-full bg-[#2D2F8F]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#2D2F8F]" />
              </div>
              <div>
                <p className="text-[#2D2F8F] font-bold text-sm">امتثال كامل لنظام ASYCUDA World</p>
                <p className="text-gray-500 text-xs">إعداد البيانات الجمركية بما يتوافق مع متطلبات الهيئة العامة للجمارك</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-center md:text-start">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[#2D2F8F] font-bold text-sm">مراجعة دقيقة لكل مستند</p>
                <p className="text-gray-500 text-xs">فحص شامل للفاتورة وبوليصة الشحن وشهادة المنشأ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ASYCUDA SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2F8F]/8 border border-[#2D2F8F]/15 mb-4">
                <Zap className="w-3.5 h-3.5 text-[#2D2F8F]" />
                <span className="text-[#2D2F8F] text-xs font-semibold">خدماتنا المتخصصة</span>
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كل ما تحتاجه لملف{" "}
              <span className="text-[#2D2F8F]">ASYCUDA</span> مكتمل
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 max-w-2xl mx-auto">
              نقدم خدمة شاملة من إعداد البيانات الجمركية إلى مراجعة ملفات الاستيراد والامتثال للمعايير الدولية.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {asycudaServices.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2D2F8F]/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D2F8F]/8 flex items-center justify-center mb-4 group-hover:bg-[#2D2F8F]/15 transition-colors">
                  <service.icon className="w-6 h-6 text-[#2D2F8F]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/asycuda-services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2D2F8F] text-white font-semibold hover:bg-[#232570] transition-all no-underline"
            >
              عرض جميع الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VISUAL SECTION - SHIPPING ===== */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-shipping-o624vchnH2KUH3QzEKXhhM.webp"
          alt="ميناء تجاري دولي - إدارة ملفات الاستيراد والشحن"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c5e]/80 via-[#2D2F8F]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-10 justify-center">
          <div className="text-center text-white">
            <p className="text-lg md:text-2xl font-bold drop-shadow-lg">نُدير ملفات استيرادك من الميناء إلى الجمارك</p>
            <p className="text-white/80 text-sm mt-2">خبرة في التجارة الدولية والامتثال الجمركي العراقي</p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/30 mb-6">
                  <Phone className="w-3.5 h-3.5 text-[#B8972A]" />
                  <span className="text-[#B8972A] text-xs font-semibold">تواصل معنا الآن</span>
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل ملفك جاهز للتقديم؟
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-white/70 text-lg mb-8">
                أرسل مستنداتك الآن وسيتولى فريقنا إعداد ملف ASYCUDA الكامل خلال 24-48 ساعة.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
                >
                  <MessageCircle className="w-5 h-5" />
                  ابدأ عبر واتساب
                </a>
                <Link
                  href="/asycuda-services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all no-underline"
                >
                  عرض تفاصيل الخدمة
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/10 border border-[#B8972A]/20 mb-4">
                  <Star className="w-3.5 h-3.5 text-[#B8972A]" />
                  <span className="text-[#B8972A] text-xs font-semibold">لماذا Lexora Doc؟</span>
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                الخبرة والدقة في كل ملف
              </motion.h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "امتثال كامل", desc: "نضمن توافق كل مستند مع تعليمات البنك المركزي العراقي ومتطلبات ASYCUDA." },
                  { icon: Clock, title: "سرعة في التسليم", desc: "إعداد الملفات خلال 24-48 ساعة مع متابعة مستمرة حتى إتمام التخليص." },
                  { icon: Users, title: "فريق متخصص", desc: "خبراء متخصصون في الجمارك العراقية ونظام ASYCUDA World." },
                  { icon: CheckCircle2, title: "ضمان الجودة", desc: "مراجعة دقيقة متعددة المراحل لكل ملف قبل التسليم." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 2} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2D2F8F]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#2D2F8F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-compliance-8Rakh87p6KTuzDZjg3i8HQ.webp"
                alt="متخصص يحمل وثيقة امتثال تجاري معتمدة - Lexora Doc"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c5e]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white font-bold text-lg mb-1">امتثال كامل ومضمون</p>
                  <p className="text-white/80 text-sm">كل ملف يمر بمراجعة دقيقة قبل التسليم</p>
                </div>
              </div>
            </motion.div>
            {/* Hidden original card - replaced by image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">ابدأ طلبك الآن</h3>
              <p className="text-gray-500 text-sm mb-6">أرسل لنا تفاصيل ملفك عبر واتساب وسنتواصل معك فوراً</p>
              <div className="space-y-3 mb-6">
                {[
                  "إرسال المستندات عبر واتساب",
                  "مراجعة الملف من قبل الخبراء",
                  "إعداد البيان الجمركي الكامل",
                  "تسليم الملف جاهزاً للتقديم",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D2F8F] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-3">
              أسئلة شائعة
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات ASYCUDA
            </motion.p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <FAQItem item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">لديك سؤال آخر؟</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              اسألنا مباشرة
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
