/*
 * Design: Clean Tech Platform — Blog Page
 */
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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

const blogPosts = [
  {
    title: "كيفية كتابة كتاب رسمي",
    excerpt:
      "دليل شامل لكتابة الكتب الرسمية بطريقة احترافية تتوافق مع المعايير المعتمدة في المؤسسات والجهات الحكومية.",
    category: "الوثائق الرسمية",
    date: "15 فبراير 2026",
    readTime: "5 دقائق",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "تنظيم الملفات التجارية",
    excerpt:
      "أفضل الممارسات لتنظيم وإدارة الملفات التجارية بما يتوافق مع المتطلبات التنظيمية والرقابية.",
    category: "الامتثال التجاري",
    date: "10 فبراير 2026",
    readTime: "7 دقائق",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "الأخطاء الشائعة في الوثائق الرسمية",
    excerpt:
      "تعرف على أكثر الأخطاء شيوعاً في إعداد الوثائق الرسمية وكيفية تجنبها لضمان قبول مستنداتك.",
    category: "نصائح مهنية",
    date: "5 فبراير 2026",
    readTime: "4 دقائق",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "إدارة المستندات في الأعمال",
    excerpt:
      "كيف تبني نظاماً فعالاً لإدارة المستندات في مؤسستك يضمن سهولة الوصول والتنظيم والأمان.",
    category: "إدارة الأعمال",
    date: "1 فبراير 2026",
    readTime: "6 دقائق",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function Blog() {
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
              المدونة
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            >
              مقالات ونصائح مهنية
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-500 leading-relaxed"
            >
              مقالات تعليمية ونصائح عملية حول إعداد الوثائق وتنظيم الملفات
              التجارية والامتثال التنظيمي.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300 group cursor-pointer"
                onClick={() => toast("هذه الميزة قيد التطوير", { description: "سيتم إتاحة المقالات الكاملة قريباً" })}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.color}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-navy-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
