/*
 * Design: Clean Tech Platform — Services Page
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  LayoutTemplate,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/services-hero-QczSxwPKCmwQWzcBDhHoER.webp";

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
  },
  {
    icon: LayoutTemplate,
    title: "القوالب الجاهزة للوثائق",
    description:
      "مكتبة متكاملة من القوالب الجاهزة التي تغطي مختلف أنواع الوثائق الرسمية. قوالب مصممة بعناية وجاهزة للاستخدام الفوري مع إمكانية التخصيص.",
    features: [
      "نماذج الكتب الرسمية",
      "نماذج التقارير",
      "نماذج العقود",
      "نماذج الموارد البشرية",
    ],
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "hover:border-emerald-200",
  },
  {
    icon: ShieldCheck,
    title: "الامتثال التجاري (CCG)",
    description:
      "قسم متخصص في مراجعة وتنظيم ملفات الاستيراد والمعاملات المرتبطة بالتحويلات المصرفية وفقاً لتعليمات البنك المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.",
    features: [
      "مراجعة ملفات الاستيراد",
      "تدقيق الفواتير التجارية",
      "مطابقة المستندات",
      "تنظيم الملفات قبل التقديم",
    ],
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-200",
    href: "/ccg",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-navy-50/50">
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
                className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block"
              >
                خدماتنا
              </motion.span>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight"
              >
                خدمات متخصصة للوثائق والأعمال
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-navy-500 leading-relaxed"
              >
                نقدم مجموعة متكاملة من الخدمات المتخصصة في إعداد الوثائق
                والمراسلات الرسمية وتنظيم الملفات التجارية.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} custom={3}>
              <img
                src={SERVICES_BG}
                alt="خدمات Lexora"
                className="rounded-2xl shadow-xl shadow-navy-900/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              className={`bg-white rounded-2xl border border-navy-100 p-8 lg:p-10 ${service.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-navy-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    className="bg-navy-900 hover:bg-navy-800 text-white text-sm"
                    onClick={() => window.location.href = service.href || '/contact'}
                  >
                    {service.href ? "استكشف CCG" : "اطلب الخدمة"}
                    <ArrowLeft className="w-4 h-4 ms-2" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-navy-50/70 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-navy-700 text-sm font-medium">
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
    </div>
  );
}
