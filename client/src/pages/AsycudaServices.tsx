/*
 * ASYCUDA Services Page
 * Premium enterprise-grade design inspired by Stripe, Notion, and modern SaaS platforms
 * Dark navy + blue + purple gradient, professional typography, premium spacing
 */

import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Lock,
  Briefcase,
  FileCheck,
  Code2,
  Database,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import AsycudaRequestForm from "@/components/AsycudaRequestForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  {
    icon: FileText,
    title: "إعداد البيان الكمركي المسبق",
    description: "تحضير وصياغة البيان المسبق بدقة عالية وفقاً لمتطلبات نظام ASYCUDA",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50/50",
    borderColor: "border-blue-200/50",
  },
  {
    icon: FileCheck,
    title: "إعداد البيان الكمركي النهائي",
    description: "صياغة البيان النهائي مع مراجعة شاملة لجميع البيانات والمستندات",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50/50",
    borderColor: "border-purple-200/50",
  },
  {
    icon: CheckCircle2,
    title: "مراجعة الوثائق التجارية",
    description: "فحص دقيق للفواتير والشحنات والمستندات المرفقة للتأكد من الاكتمال",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50/50",
    borderColor: "border-emerald-200/50",
  },
  {
    icon: Code2,
    title: "تدقيق HS Code",
    description: "تصنيف دقيق للبضائع وتحديد الرموز الجمركية الصحيحة (HS Code)",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50/50",
    borderColor: "border-amber-200/50",
  },
  {
    icon: Database,
    title: "فحص جاهزية البيانات",
    description: "التحقق الشامل من صحة البيانات قبل إدخالها في نظام ASYCUDA",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50/50",
    borderColor: "border-rose-200/50",
  },
  {
    icon: Gauge,
    title: "المتابعة والدعم",
    description: "متابعة مستمرة للطلب وتقديم الدعم الفني طوال العملية",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50/50",
    borderColor: "border-indigo-200/50",
  },
];

const whyLexora = [
  {
    icon: Shield,
    title: "خبرة عملية في ASYCUDA",
    description: "فريق متخصص بخبرة سنوات في التعامل مع نظام ASYCUDA",
    stat: "٥+ سنوات",
  },
  {
    icon: Zap,
    title: "دقة في إدخال البيانات",
    description: "معايير عالية جداً في إدخال البيانات لتقليل الأخطاء",
    stat: "٩٩.٨%",
  },
  {
    icon: Clock,
    title: "مراجعة الوثائق قبل الإرسال",
    description: "فحص شامل للمستندات قبل إرسالها للجهات المعنية",
    stat: "١٠٠%",
  },
  {
    icon: TrendingUp,
    title: "تقليل الأخطاء والتأخيرات",
    description: "تقليل معدل الأخطاء والتأخيرات في المعاملات بنسبة كبيرة",
    stat: "٨٠%",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "استلام الطلب",
    description: "استقبال طلبك مع جميع المستندات والبيانات المطلوبة",
  },
  {
    number: "02",
    title: "مراجعة الوثائق",
    description: "فحص دقيق لجميع المستندات والمرفقات",
  },
  {
    number: "03",
    title: "تدقيق البيانات",
    description: "تحقق شامل من صحة البيانات وتصنيف HS Code",
  },
  {
    number: "04",
    title: "تجهيز البيانات",
    description: "صياغة البيان بالصيغة الصحيحة وفقاً لمتطلبات ASYCUDA",
  },
  {
    number: "05",
    title: "المتابعة",
    description: "متابعة مستمرة حتى جاهزية الملف للإرسال",
  },
];

const faqItems = [
  {
    question: "ما هو البيان الكمركي المسبق؟",
    answer:
      "البيان الكمركي المسبق هو إشعار أولي يتم تقديمه قبل وصول البضائع، يحتوي على بيانات أساسية عن الشحنة والمستندات المرفقة.",
  },
  {
    question: "ما هو البيان الكمركي النهائي؟",
    answer:
      "البيان النهائي هو البيان الرسمي الذي يتم تقديمه بعد وصول البضائع، ويحتوي على بيانات كاملة وشاملة للشحنة والفواتير والمستندات.",
  },
  {
    question: "ما هي الوثائق المطلوبة؟",
    answer:
      "الوثائق المطلوبة تشمل: الفاتورة التجارية، بوليصة الشحن، قائمة التعبئة، شهادات المنشأ (إن وجدت)، والمستندات الإضافية حسب نوع البضاعة.",
  },
  {
    question: "هل يمكن رفع الملفات عبر الموقع؟",
    answer:
      "نعم، يمكنك رفع جميع المستندات بصيغ متعددة (PDF, Word, Excel) مباشرة عبر نموذج الطلب الآمن.",
  },
  {
    question: "هل تتم مراجعة الطلب قبل الإرسال؟",
    answer:
      "نعم، نقوم بمراجعة شاملة لجميع البيانات والمستندات قبل الإرسال، ونخطرك بأي ملاحظات أو تعديلات مطلوبة.",
  },
  {
    question: "كم يستغرق إعداد البيان؟",
    answer:
      "عادة ما يستغرق إعداد البيان من 24 إلى 48 ساعة، حسب تعقيد الطلب وكمية المستندات المرفقة.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      custom={index}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-blue-300 bg-gradient-to-br from-blue-50/50 to-purple-50/50 shadow-lg shadow-blue-500/10"
          : "border-navy-200 hover:border-navy-300 bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-start bg-transparent transition-colors hover:bg-navy-50/30"
      >
        <span className={`font-semibold text-base transition-colors ${open ? "text-blue-700" : "text-navy-900"}`}>
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ms-4 ${
            open ? "rotate-180 text-blue-500" : "text-navy-400"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-6 text-navy-600 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </motion.div>
  );
}

export default function AsycudaServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-850">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-32 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-400/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">حلول ASYCUDA الاحترافية</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8"
            >
              حلول ASYCUDA
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                باحتراف للتجار والشركات
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-xl text-navy-300 leading-relaxed mb-10 max-w-3xl"
            >
              منصة Lexora متخصصة في إعداد البيان الكمركي المسبق والنهائي، ومراجعة الوثائق التجارية، وتدقيق البيانات قبل الإرسال لتقليل الأخطاء وتسريع الإجراءات.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link href="/asycuda-services#request-form">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 h-14 text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                >
                  اطلب الخدمة الآن
                  <ArrowRight className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400/50 text-white hover:bg-blue-500/10 font-semibold px-8 h-14 text-base bg-transparent"
              >
                تواصل معنا
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-8 text-sm text-navy-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>متخصصون في ASYCUDA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>دقة ٩٩.٨%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>دعم ٢٤/٧</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-32 relative">
        <div className="container">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4 block">الخدمات</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              خدمات ASYCUDA المتكاملة
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات المتخصصة لضمان نجاح معاملاتك الكمركية
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                custom={i}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>اعرف المزيد</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY LEXORA SECTION ===== */}
      <section className="py-32 relative bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-4 block">لماذا Lexora</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              الخيار الموثوق للشركات والتجار
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLexora.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 mb-6 shadow-lg">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW SECTION ===== */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4 block">كيف نعمل</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              عملية العمل المتقنة
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              خمس خطوات واضحة لضمان نجاح معاملتك الكمركية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="relative group"
              >
                {/* Connector line */}
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                )}

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-32 relative bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4 block">الأسئلة الشائعة</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              أسئلة متكررة
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات ASYCUDA
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <FAQItem key={item.question} item={item} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUEST FORM SECTION ===== */}
      <section id="request-form" className="py-32 relative">
        <div className="container">
          <AsycudaRequestForm />
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl border border-blue-400/30 backdrop-blur-xl p-16 lg:p-20 text-center overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                ابدأ بخدمات ASYCUDA الآن
              </h2>
              <p className="text-lg text-navy-300 max-w-2xl mx-auto mb-10">
                اطلب خدمتنا اليوم واستمتع بتجربة احترافية في إعداد البيانات الكمركية
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/asycuda-services#request-form">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-navy-50 font-bold px-8 h-14 text-base shadow-lg"
                  >
                    اطلب الخدمة الآن
                    <ArrowRight className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base bg-transparent"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
