/*
 * LEXORA DOC — صفحة من نحن
 * ASYCUDA محورياً، بدون CCG وقوالب
 * ألوان كحلي (#2D2F8F) وذهبي (#B8972A)
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
  MessageCircle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/about-section-AjgxPYbVJGAy8Ewq9V7Uha.webp";
const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";

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
  { icon: FileCheck, value: "١٠,٠٠٠+", label: "ملف جمركي تمت مراجعته" },
  { icon: Users, value: "٢,٠٠٠+", label: "عميل نشط" },
];

const values = [
  {
    icon: Shield,
    title: "الدقة والامتثال",
    text: "نلتزم بأعلى معايير الدقة في مراجعة الملفات الجمركية والتأكد من استيفاء جميع متطلبات نظام ASYCUDA والبنك المركزي العراقي.",
  },
  {
    icon: Award,
    title: "الاحترافية",
    text: "فريق متخصص من الخبراء في مجال الجمارك والوثائق الرسمية، يعمل على تقديم أعلى مستويات الخدمة لعملائنا.",
  },
  {
    icon: CheckCircle2,
    title: "الشفافية",
    text: "نؤمن بالشفافية الكاملة في تعاملاتنا، من تقييم الملف إلى التسليم النهائي، مع إبلاغك بكل خطوة.",
  },
];

export default function About() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-25" />
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
              className="text-xs font-semibold text-[#2D2F8F] tracking-wider uppercase mb-3 block"
            >
              من نحن
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              متخصصون في خدمات{" "}
              <span className="text-[#2D2F8F]">ASYCUDA</span>{" "}
              والوثائق الجمركية
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Lexora Doc منصة متخصصة في إعداد الوثائق الجمركية ومراجعة ملفات
              الاستيراد وفق متطلبات نظام ASYCUDA World والبنك المركزي العراقي.
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
                className="text-gray-600 leading-loose text-lg"
              >
                تأسست Lexora Doc بهدف تقديم خدمات متخصصة في مجال الوثائق الجمركية
                وإعداد ملفات الاستيراد. نركز على مساعدة الشركات والمستوردين في
                العراق على الامتثال لمتطلبات نظام ASYCUDA World.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-gray-600 leading-loose text-lg mt-6"
              >
                تعتمد خدماتنا على فريق من الخبراء المتخصصين في إعداد البيانات
                الجمركية المسبقة، مراجعة ملفات الاستيراد، والتأكد من مطابقتها
                لتعليمات البنك المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-gray-600 leading-loose text-lg mt-6"
              >
                نؤمن بأن الملف الجمركي المُعدّ بشكل صحيح يوفر الوقت والجهد،
                ويحمي الشركات من التأخيرات والرفض في إجراءات التخليص الجمركي.
              </motion.p>
            </motion.div>
            <div className="space-y-6">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#2D2F8F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "رسالتنا",
                text: "تمكين الشركات والمستوردين من إدارة ملفاتهم الجمركية بكفاءة واحترافية عالية عبر نظام ASYCUDA.",
                color: "text-[#2D2F8F]",
                bg: "bg-[#2D2F8F]/10",
              },
              {
                icon: Eye,
                title: "رؤيتنا",
                text: "أن نكون المرجع الأول في إعداد الوثائق الجمركية والامتثال لمتطلبات ASYCUDA في العراق.",
                color: "text-[#B8972A]",
                bg: "bg-[#B8972A]/10",
              },
              {
                icon: Shield,
                title: "قيمنا",
                text: "الدقة والاحترافية والشفافية في جميع خدماتنا، مع الالتزام بأعلى معايير الجودة.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
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
                  <stat.icon className="w-6 h-6 text-[#B8972A]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">
              تواصل معنا اليوم واكتشف كيف يمكن لـ Lexora Doc مساعدتك في إعداد ملفاتك الجمركية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2D2F8F]/30 text-[#2D2F8F] hover:bg-[#2D2F8F]/5 font-semibold px-8 h-12 text-sm"
                onClick={() => window.location.href = '/contact'}
              >
                صفحة التواصل
                <ArrowLeft className="w-4 h-4 ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
