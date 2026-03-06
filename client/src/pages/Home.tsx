/*
 * Design: Clean Tech Platform — Lexora Home Page
 * Navy primary, white bg, blue accents, gold for CCG
 * Sections: Hero, Features, CCG Highlight, Workflow, Why Lexora, FAQ
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  LayoutTemplate,
  ShieldCheck,
  Send,
  Search,
  FolderOpen,
  ClipboardList,
  CheckCircle2,
  ChevronDown,
  ArrowLeft,
  Sparkles,
  Building2,
  Users,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/hero-bg-mCVedue9GUhHgV9aPreJro.webp";
const CCG_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/ccg-section-TVjQLfxercE29fCCbHyTg4.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const features = [
  {
    icon: FileText,
    title: "إعداد الوثائق الرسمية",
    description:
      "إعداد وصياغة الوثائق والمراسلات الرسمية بطريقة احترافية ومنظمة تتوافق مع المعايير المعتمدة.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: LayoutTemplate,
    title: "القوالب الجاهزة",
    description:
      "مكتبة متكاملة من القوالب الجاهزة للكتب الرسمية والتقارير والعقود ونماذج الموارد البشرية.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "الامتثال التجاري (CCG)",
    description:
      "مراجعة وتنظيم ملفات الاستيراد والمعاملات المصرفية وفقاً لتعليمات البنك المركزي العراقي.",
    color: "bg-amber-50 text-amber-600",
  },
];

const workflowSteps = [
  { icon: Send, label: "إرسال المستندات", step: "01" },
  { icon: Search, label: "مراجعة الملفات", step: "02" },
  { icon: FolderOpen, label: "تنظيم الوثائق", step: "03" },
  { icon: ClipboardList, label: "إعداد الملاحظات", step: "04" },
  { icon: CheckCircle2, label: "تسليم الملف", step: "05" },
];

const whyLexora = [
  {
    icon: Scale,
    title: "منهجية واضحة",
    description: "منهجية واضحة في تنظيم الوثائق ومراجعتها",
  },
  {
    icon: Sparkles,
    title: "صياغة احترافية",
    description: "صياغة احترافية للمراسلات الرسمية",
  },
  {
    icon: ShieldCheck,
    title: "التركيز على الامتثال",
    description: "التركيز على الامتثال التجاري والمتطلبات التنظيمية",
  },
  {
    icon: Users,
    title: "دعم شامل",
    description: "دعم الشركات والأفراد في إدارة المستندات",
  },
];

const faqItems = [
  {
    question: "ما هو CCG؟",
    answer:
      "CCG هو دليل الامتثال التجاري، وهو قسم متخصص في مراجعة وتنظيم ملفات الاستيراد والمعاملات المرتبطة بالتحويلات المصرفية.",
  },
  {
    question: "هل تعتمد الخدمة على تعليمات البنك المركزي العراقي؟",
    answer:
      "نعم، تعتمد عملية تنظيم الملفات على مراجعة المستندات بما يتوافق مع تعليمات البنك المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.",
  },
  {
    question: "هل تقدم المنصة اعتماداً رسمياً؟",
    answer:
      "لا، تقدم المنصة خدمات مراجعة وتنظيم الوثائق فقط. المنصة لا تمثل جهة حكومية ولا تقدم خدمات اعتماد رسمي.",
  },
  {
    question: "ما هي الخدمات التي تقدمها Lexora؟",
    answer:
      "تقدم Lexora ثلاث خدمات رئيسية: إعداد الوثائق والمراسلات الرسمية، القوالب الجاهزة للوثائق، ودليل الامتثال التجاري (CCG) لمراجعة وتنظيم ملفات الاستيراد.",
  },
  {
    question: "هل يمكن للأفراد الاستفادة من خدمات المنصة؟",
    answer:
      "نعم، تهدف المنصة إلى مساعدة كل من الأفراد والشركات على إعداد الوثائق الرسمية وتنظيم المستندات ومراجعة ملفات الاستيراد.",
  },
];

function FAQItem({ item }: { item: (typeof faqItems)[0] }) {
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

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-950/85 to-navy-950/70" />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-navy-200 text-xs font-medium">
                منصة الوثائق والامتثال التجاري
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              <span className="text-blue-400">Lexora</span>
              <br />
              الوثائق والأعمال
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-300 leading-relaxed mb-8 max-w-2xl"
            >
              منصة متخصصة في إعداد الوثائق والمراسلات الرسمية، مع قسم متخصص في
              الامتثال التجاري (CCG) لمراجعة وتنظيم ملفات الاستيراد والمعاملات
              المرتبطة بالتحويلات المصرفية.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-white text-navy-900 hover:bg-navy-50 font-semibold px-6 h-12 text-sm"
                onClick={() => window.location.href = '/ccg'}
              >
                تعرف على CCG
                <ArrowLeft className="w-4 h-4 ms-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-6 h-12 text-sm bg-transparent"
                onClick={() => window.location.href = '/contact'}
              >
                ابدأ الآن
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block">
              خدماتنا
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              حلول متكاملة للوثائق والأعمال
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              نقدم مجموعة من الخدمات المتخصصة لمساعدتك في إعداد وتنظيم الوثائق
              الرسمية والتجارية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="group relative bg-white rounded-2xl border border-navy-100 p-8 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/8 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl ${feature.title.includes('CCG') ? 'bg-gradient-to-l from-gold-500 to-gold-400' : feature.title.includes('قوالب') ? 'bg-gradient-to-l from-emerald-500 to-emerald-400' : 'bg-gradient-to-l from-blue-500 to-blue-400'}`} />
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div>
                  <Link
                    href={feature.title.includes("CCG") ? "/ccg" : "/services"}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 no-underline group-hover:gap-2.5 transition-all"
                  >
                    اعرف المزيد
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CCG HIGHLIGHT SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CCG_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-gold-400 text-xs font-semibold">
                    الخدمة الرئيسية
                  </span>
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
              >
                CCG — دليل الامتثال التجاري
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-navy-300 text-lg leading-relaxed mb-8"
              >
                يساعد هذا القسم في مراجعة وتنظيم ملفات الاستيراد والمعاملات
                المرتبطة بالتحويلات المصرفية، وفقاً لتعليمات البنك المركزي
                العراقي والمتطلبات التنظيمية ذات العلاقة.
              </motion.p>

              <motion.div variants={fadeUp} custom={3}>
                <Button
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-6 h-12 text-sm"
                  onClick={() => window.location.href = '/ccg'}
                >
                  استكشف CCG
                  <ArrowLeft className="w-4 h-4 ms-2" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {[
                "مراجعة ملفات الاستيراد",
                "تدقيق الفواتير التجارية",
                "مطابقة المستندات الأساسية",
                "مراجعة بيانات التحويلات المصرفية",
                "تنظيم الملفات قبل التقديم",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW SECTION ===== */}
      <section className="py-24 bg-navy-50/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block">
              آلية العمل
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              كيف نعمل
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              خمس خطوات بسيطة لتنظيم ومراجعة وثائقك بشكل احترافي
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="relative text-center group"
              >
                {/* Connector line */}
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-px bg-navy-200" />
                )}
                <div className="bg-white rounded-2xl border border-navy-100 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-blue-500 mb-3 block tracking-wider">
                    {step.step}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/70 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 text-sm">
                    {step.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY LEXORA SECTION ===== */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block"
              >
                لماذا Lexora
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6"
              >
                منصة موثوقة لإدارة الوثائق والامتثال
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-navy-500 leading-relaxed mb-8"
              >
                تعد Lexora منصة رقمية تهدف إلى مساعدة الأفراد والشركات على إعداد
                الوثائق الرسمية والمراسلات الإدارية بطريقة منظمة واحترافية.
              </motion.p>

              {/* Stats row */}
              <motion.div variants={fadeUp} custom={2.5} className="flex gap-8 mb-8">
                {[
                  { value: "٥٠٠+", label: "شركة مستفيدة" },
                  { value: "١٠,٠٠٠+", label: "وثيقة تمت مراجعتها" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                    <div className="text-xs text-navy-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={3}>
                <Button
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 h-11 text-sm"
                  onClick={() => window.location.href = '/about'}
                >
                  اعرف المزيد عنا
                  <ArrowLeft className="w-4 h-4 ms-2" />
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyLexora.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-navy-50/70 rounded-2xl p-6 hover:bg-navy-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="w-5 h-5 text-navy-700" />
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-navy-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24 bg-navy-50/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              أسئلة متكررة
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول منصة Lexora وخدمات CCG
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i + 1}
              >
                <FAQItem item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="relative bg-navy-900 rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(196,163,90,0.1),transparent_50%)]" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ابدأ بتنظيم وثائقك اليوم
              </h2>
              <p className="text-navy-300 max-w-lg mx-auto mb-8">
                تواصل معنا للحصول على خدمات إعداد الوثائق ومراجعة ملفات الامتثال
                التجاري
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-navy-50 font-semibold px-8 h-12 text-sm"
                  onClick={() => window.location.href = '/contact'}
                >
                  تواصل معنا
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 h-12 text-sm bg-transparent"
                  onClick={() => window.location.href = '/services'}
                >
                  استعرض الخدمات
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
