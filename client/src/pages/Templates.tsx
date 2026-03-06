/*
 * Design: Clean Tech Platform — Templates Page
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  BarChart3,
  ScrollText,
  Users,
  ArrowLeft,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const templateCategories = [
  {
    icon: FileText,
    title: "نماذج الكتب الرسمية",
    description: "قوالب جاهزة للكتب الرسمية والمراسلات الإدارية بصيغ متعددة.",
    count: 12,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: BarChart3,
    title: "نماذج التقارير",
    description: "قوالب تقارير إدارية ومالية وتشغيلية جاهزة للتخصيص.",
    count: 8,
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: ScrollText,
    title: "نماذج العقود",
    description: "قوالب عقود تجارية ومهنية شاملة ومتوافقة مع المتطلبات القانونية.",
    count: 15,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Users,
    title: "نماذج الموارد البشرية",
    description: "قوالب لإدارة شؤون الموظفين من عقود عمل وتقييمات وإجازات.",
    count: 10,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

export default function Templates() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-navy-50/50">
        <div className="container relative z-10 pt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3 block"
            >
              القوالب
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            >
              قوالب جاهزة للوثائق الرسمية
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-500 leading-relaxed"
            >
              مكتبة متكاملة من القوالب الجاهزة المصممة بعناية لتغطية مختلف
              أنواع الوثائق والمراسلات الرسمية.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templateCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-navy-400 bg-navy-50 px-3 py-1 rounded-full">
                    {cat.count} قالب
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {cat.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <Button
                  variant="outline"
                  className="border-navy-200 text-navy-700 hover:bg-navy-50 text-sm"
                  onClick={() => toast("هذه الميزة قيد التطوير", { description: "سيتم إتاحة القوالب قريباً" })}
                >
                  <Download className="w-4 h-4 me-2" />
                  استعرض القوالب
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-50/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              لم تجد القالب المناسب؟
            </h2>
            <p className="text-navy-500 max-w-lg mx-auto mb-8">
              تواصل معنا وسنقوم بإعداد الوثيقة المطلوبة بشكل مخصص وفقاً لاحتياجاتك
            </p>
            <Button
              size="lg"
              className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 h-12 text-sm"
              onClick={() => window.location.href = '/contact'}
            >
              تواصل معنا
              <ArrowLeft className="w-4 h-4 ms-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
