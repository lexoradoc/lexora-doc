/*
 * Design: Clean Tech Platform — About Page
 */
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Shield,
  ArrowLeft,
  Building2,
  Users,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/about-section-AjgxPYbVJGAy8Ewq9V7Uha.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { icon: Building2, value: "٥٠٠+", label: "شركة مستفيدة" },
  { icon: FileCheck, value: "١٠,٠٠٠+", label: "وثيقة تمت مراجعتها" },
  { icon: Users, value: "٢,٠٠٠+", label: "عميل نشط" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>

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
              من نحن
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            >
              نبني مستقبل إدارة الوثائق
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-500 leading-relaxed"
            >
              Lexora منصة رقمية تهدف إلى تنظيم الوثائق والمراسلات الرسمية
              للأعمال، وتقديم خدمات مراجعة وتنظيم الملفات التجارية عبر قسم دليل
              الامتثال التجاري (CCG).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-navy-600 leading-loose text-lg"
              >
                تعد Lexora منصة رقمية تهدف إلى مساعدة الأفراد والشركات على إعداد
                الوثائق الرسمية والمراسلات الإدارية بطريقة منظمة واحترافية.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-navy-600 leading-loose text-lg mt-6"
              >
                توفر المنصة قوالب جاهزة للمستندات الرسمية بالإضافة إلى خدمات
                إعداد الوثائق، إلى جانب قسم متخصص في مراجعة وتنظيم الملفات
                التجارية عبر دليل الامتثال التجاري (CCG).
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-navy-600 leading-loose text-lg mt-6"
              >
                تعتمد هذه الخدمة على تنظيم المستندات بما يتوافق مع تعليمات البنك
                المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.
              </motion.p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "رسالتنا",
                  text: "تمكين الشركات والأفراد من إدارة وثائقهم بكفاءة واحترافية عالية.",
                },
                {
                  icon: Eye,
                  title: "رؤيتنا",
                  text: "أن نكون المنصة الرائدة في إدارة الوثائق والامتثال التجاري في المنطقة.",
                },
                {
                  icon: Shield,
                  title: "قيمنا",
                  text: "الدقة والاحترافية والشفافية في جميع خدماتنا ومعاملاتنا.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-navy-50/70 rounded-2xl p-6 hover:bg-navy-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <item.icon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-navy-500 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-navy-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-navy-500 max-w-lg mx-auto mb-8">
              تواصل معنا اليوم واكتشف كيف يمكن لـ Lexora مساعدتك في إدارة وثائقك
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
