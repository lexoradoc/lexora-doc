/*
 * LEXORA DOC — صفحة الأسعار والباقات
 * عرض الباقات المتاحة مع الأسعار والميزات
 */
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const packages = [
  {
    name: "مراجعة الملف",
    price: "150,000",
    currency: "د.ع",
    description: "مراجعة كاملة للملف وتحديد جميع الأخطاء والنواقص قبل التقديم",
    features: [
      "مراجعة جميع المستندات",
      "اكتشاف الأخطاء",
      "تحديد النواقص",
      "توضيح الملاحظات بشكل واضح",
    ],
    highlighted: false,
    cta: "اختر هذه الباقة",
  },
  {
    name: "مراجعة + تقديم",
    price: "250,000",
    currency: "د.ع",
    description: "مراجعة شاملة + تجهيز الملف وتقديمه بشكل صحيح وفق المتطلبات الرسمية",
    features: [
      "جميع ما في باقة المراجعة",
      "تجهيز الملف بشكل كامل",
      "تنظيم البيانات وتوحيدها",
      "تقديم الملف بشكل صحيح وجاهز للإجراء",
    ],
    highlighted: true,
    cta: "اختر هذه الباقة",
    badge: "الأكثر طلباً",
  },
];

const faqs = [
  {
    question: "هل تشمل الخدمة جميع مستندات الملف؟",
    answer:
      "نعم، نقوم بمراجعة الملف بالكامل بما يشمل جميع المستندات والتأكد من توافقها مع المتطلبات الرسمية.",
  },
  {
    question: "كم يستغرق وقت المراجعة؟",
    answer:
      "يتم الرد خلال وقت سريع بعد استلام الملف، ويعتمد ذلك على حجم وتعقيد الملف.",
  },
  {
    question: "هل يمكن تقديم الملف من قبلكم؟",
    answer:
      "نعم، في باقة (مراجعة + تقديم) نقوم بتجهيز الملف وتقديمه بشكل صحيح وجاهز للإجراء.",
  },
  {
    question: "كيف أرسل الملف؟",
    answer:
      "يمكنك إرسال الملف مباشرة عبر واتساب، وسيتم التعامل معه بشكل فوري.",
  },
  {
    question: "هل الخدمة مناسبة إذا تم رفض الملف سابقاً؟",
    answer:
      "نعم، هذه من أهم الحالات التي نعمل عليها، حيث نقوم بتحليل أسباب الرفض ومعالجتها بشكل كامل.",
  },
  {
    question: "هل تضمنون قبول الملف؟",
    answer:
      "نحن نضمن مراجعة دقيقة وتنظيم احترافي يقلل الأخطاء إلى الحد الأدنى، لكن القبول النهائي يعتمد على الجهة المختصة.",
  },
  {
    question: "هل بياناتي وملفي آمنة؟",
    answer:
      "نعم، يتم التعامل مع جميع الملفات بسرية تامة واحترافية عالية.",
  },
  {
    question: "هل يمكن معرفة السعر النهائي قبل البدء؟",
    answer:
      "نعم، يتم تحديد السعر النهائي بعد الاطلاع على الملف وتقييم حالته.",
  },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-navy-100 hover:border-navy-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-start bg-transparent transition-colors"
      >
        <span className={`font-semibold text-sm transition-colors ${open ? 'text-blue-700' : 'text-navy-900'}`}>{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ms-3 ${open ? 'rotate-180 text-blue-500' : 'text-navy-400'}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-5 pb-5 text-navy-500 text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold text-[#2D2F8F] tracking-wider uppercase mb-3 block"
            >
              الأسعار والباقات
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              باقات الخدمة
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              اختر الباقة المناسبة لك حسب حالة ملفك،
              <br />
              ونحن نساعدك على مراجعة وتجهيز ملفك لضمان تقديم صحيح بدون أخطاء أو تأخير
            </motion.p>
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
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-[#2D2F8F]/30 bg-gradient-to-br from-[#2D2F8F]/5 to-white shadow-lg scale-105 md:scale-100"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 bg-[#2D2F8F] text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#2D2F8F]">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">{pkg.currency}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all no-underline ${
                    pkg.highlighted
                      ? "bg-[#2D2F8F] text-white hover:bg-[#232570]"
                      : "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center max-w-2xl mx-auto"
          >
            <p className="text-amber-900 font-semibold mb-2">ملاحظة مهمة</p>
            <p className="text-amber-800 text-sm">
              يتم تحديد تفاصيل العمل النهائية بعد الاطلاع على الملف
            </p>
          </motion.div>

          {/* Warning */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl text-center max-w-2xl mx-auto"
          >
            <p className="text-red-900 text-sm leading-relaxed">
              كل خطأ أو نقص في الملف قد يسبب تأخير أو رفض،
              <br />
              ومراجعته قبل التقديم يوفر عليك وقت وجهد كبير
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-navy-50 to-white">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-navy-900 mb-4">
              ❓ الأسئلة الشائعة
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-navy-600">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={faqs.length}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-sm mb-4">إذا كان لديك أي استفسار إضافي، لا تتردد في التواصل معنا</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل معنا الآن
            </a>
          </motion.div>
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
              🟢 أرسل ملفك الآن عبر واتساب
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/70 max-w-lg mx-auto mb-8">
              لا تخاطر بتقديم ملف غير جاهز
              <br />
              ابدأ الآن وتجنب التأخير
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                ابدأ الآن
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
