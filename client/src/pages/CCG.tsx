/*
 * Design: Clean Tech Platform — CCG Page
 * Gold accents on dark navy, compliance/banking theme
 */
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  CheckCircle2,
  FileSearch,
  Receipt,
  FileCheck,
  Landmark,
  FolderOpen,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const CCG_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/ccg-section-TVjQLfxercE29fCCbHyTg4.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ccgServices = [
  {
    icon: FileSearch,
    title: "مراجعة ملفات الاستيراد",
    description: "فحص شامل لجميع مستندات الاستيراد والتأكد من اكتمالها وصحتها.",
  },
  {
    icon: Receipt,
    title: "تدقيق الفواتير التجارية",
    description: "مراجعة الفواتير التجارية والتحقق من مطابقتها للمتطلبات.",
  },
  {
    icon: FileCheck,
    title: "مطابقة المستندات الأساسية",
    description: "التأكد من تطابق جميع المستندات مع بعضها البعض ومع المتطلبات التنظيمية.",
  },
  {
    icon: Landmark,
    title: "مراجعة بيانات التحويلات المصرفية",
    description: "فحص بيانات التحويلات المصرفية والتأكد من توافقها مع تعليمات البنك المركزي.",
  },
  {
    icon: FolderOpen,
    title: "تنظيم الملفات قبل التقديم",
    description: "ترتيب وتنظيم جميع الملفات بشكل منهجي قبل تقديمها للجهات المعنية.",
  },
];

export default function CCG() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={CCG_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>

        <div className="container relative z-10 pt-28 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-gold-400 text-xs font-semibold">
                  دليل الامتثال التجاري
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            >
              CCG — دليل الامتثال التجاري
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-300 leading-relaxed max-w-2xl"
            >
              قسم متخصص في مراجعة وتنظيم ملفات الاستيراد والمعاملات المرتبطة
              بالتحويلات المصرفية. يساعد هذا القسم الشركات والأفراد على تنظيم
              ملفاتهم التجارية ومراجعة المستندات قبل تقديمها.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold text-navy-900 mb-6"
              >
                ما هو دليل الامتثال التجاري؟
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-navy-500 text-lg leading-relaxed"
              >
                تعتمد عملية تنظيم الملفات على مراجعة الوثائق بما يتوافق مع
                تعليمات البنك المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.
                يهدف هذا القسم إلى مساعدة الشركات والأفراد في تنظيم ملفاتهم
                التجارية بشكل احترافي ومنهجي.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              خدمات CCG
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              مجموعة متكاملة من الخدمات لمراجعة وتنظيم ملفاتك التجارية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ccgServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-white rounded-2xl border border-navy-100 p-8 hover:border-gold-400/30 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Import File Review Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right side - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                  <FileSearch className="w-3.5 h-3.5 text-gold-500" />
                  <span className="text-gold-600 text-xs font-semibold">فحص مسبق</span>
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-navy-900 mb-5 leading-tight"
              >
                فحص ملف الاستيراد قبل التقديم
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-navy-500 text-base leading-relaxed mb-8"
              >
                يساعدك دليل الامتثال التجاري (CCG) على مراجعة وتنظيم مستندات ملف
                الاستيراد قبل بدء الإجراءات، بهدف تحسين وضوح الوثائق وتقليل الأخطاء
                في البيانات المرتبطة بالمعاملات التجارية.
              </motion.p>

              <motion.div variants={fadeUp} custom={3}>
                <Button
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-8 h-12 text-sm"
                  onClick={() => window.location.href = '/contact'}
                >
                  طلب مراجعة الملف
                  <ArrowLeft className="w-4 h-4 ms-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Left side - Checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={fadeUp}
                custom={1}
                className="bg-navy-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(196,163,90,0.1),transparent_60%)]" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    قبل التقديم، تأكد من:
                  </h3>
                  <p className="text-navy-400 text-sm mb-6">
                    قائمة المراجعة الأساسية لملف الاستيراد
                  </p>
                  <div className="space-y-4">
                    {[
                      "وضوح الفاتورة التجارية ومطابقتها للبيانات",
                      "إرفاق مستندات الشحن",
                      "صحة البيانات المرتبطة بالمعاملة",
                      "تنظيم المستندات داخل الملف",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5"
                      >
                        <div className="w-6 h-6 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                        </div>
                        <span className="text-navy-200 text-sm font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-navy-400 text-xs leading-relaxed">
                      يساهم تنظيم المستندات ومراجعتها مسبقاً في إعداد ملف واضح ومنظم
                      قبل تقديمه إلى الجهات المعنية.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="bg-navy-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,163,90,0.15),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                هل تحتاج إلى مراجعة ملفاتك التجارية؟
              </h2>
              <p className="text-navy-300 max-w-lg mx-auto mb-8">
                تواصل معنا للحصول على خدمات مراجعة وتنظيم ملفات الاستيراد والامتثال التجاري
              </p>
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-8 h-12 text-sm"
                onClick={() => window.location.href = '/contact'}
              >
                تواصل معنا الآن
                <ArrowLeft className="w-4 h-4 ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
