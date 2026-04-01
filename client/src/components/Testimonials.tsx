import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "أحمد محمد",
    role: "مدير الاستيراد",
    company: "شركة النور للتجارة",
    content: "خدمة احترافية جداً، ساعدتنا على تجنب الأخطاء وتسريع عملية التخليص الجمركي. التعامل سريع والنتائج دقيقة.",
    rating: 5,
  },
  {
    name: "فاطمة علي",
    role: "صاحبة مشروع",
    company: "مستوردة مواد غذائية",
    content: "كنت قلقة من رفض ملفي، لكن فريق Lexora Doc راجع كل شيء بعناية وأرشدني للتصحيحات الصحيحة. شكراً لكم!",
    rating: 5,
  },
  {
    name: "محمود حسن",
    role: "مسؤول المستندات",
    company: "شركة الخليج للصادرات",
    content: "الخدمة توفر الوقت والجهد كثيراً. الفريق متخصص ويفهم متطلبات البنك المركزي بشكل عميق.",
    rating: 5,
  },
  {
    name: "ليلى خالد",
    role: "مديرة العمليات",
    company: "مجموعة الرافدين التجارية",
    content: "أفضل خدمة تخليص جمركي استخدمتها. الاحترافية والسرعة والدقة في كل خطوة.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-navy-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            آراء عملائنا
          </h2>
          <p className="text-navy-600 text-lg">
            ماذا يقول عملاؤنا عن خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-navy-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-navy-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-navy-100 pt-4">
                <p className="font-semibold text-navy-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-navy-600">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
