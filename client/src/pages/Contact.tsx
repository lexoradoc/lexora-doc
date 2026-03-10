/*
 * Design: Clean Tech Platform — Contact Page
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@lexoradoc.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: "07807437788",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "بغداد، العراق",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح", {
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
              تواصل معنا
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            >
              نحن هنا لمساعدتك
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-navy-500 leading-relaxed"
            >
              تواصل معنا للحصول على خدمات إعداد الوثائق ومراجعة الملفات
              التجارية أو لأي استفسار آخر.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="bg-white rounded-2xl border border-navy-100 p-8 lg:p-10"
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  أرسل لنا رسالة
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy-700 font-medium text-sm">
                        الاسم
                      </Label>
                      <Input
                        id="name"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-11 bg-navy-50/50 border-navy-100 focus:border-blue-300 text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy-700 font-medium text-sm">
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-11 bg-navy-50/50 border-navy-100 focus:border-blue-300 text-sm"
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy-700 font-medium text-sm">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-[160px] bg-navy-50/50 border-navy-100 focus:border-blue-300 text-sm resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 h-12 text-sm"
                  >
                    <Send className="w-4 h-4 me-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-white rounded-2xl border border-navy-100 p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm mb-1">
                    {info.title}
                  </h3>
                  <p className="text-navy-500 text-sm" dir={info.title === "الهاتف" || info.title === "البريد الإلكتروني" ? "ltr" : "rtl"} style={{direction: 'ltr'}}>
                    {info.value}
                  </p>
                </motion.div>
              ))}

              {/* Legal Notice */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="bg-amber-50/50 rounded-2xl border border-amber-100 p-6"
              >
                <h3 className="font-bold text-navy-900 text-sm mb-2">
                  ملاحظة قانونية
                </h3>
                <p className="text-navy-500 text-xs leading-relaxed">
                  منصة Lexora تقدم خدمات إعداد وتنظيم ومراجعة الوثائق والمستندات
                  التجارية فقط. المنصة لا تمثل جهة حكومية ولا تقدم خدمات اعتماد
                  رسمي.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
