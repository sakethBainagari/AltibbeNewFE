
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Altibbe’s system gave us real-time clarity and confidence in our import programs.",
    author: "Agency Official, UAE",
    accent: "border-yellow-400 bg-yellow-50 text-yellow-800",
  },
  {
    quote: "The multilingual reports made compliance and market access much easier.",
    author: "Producer, India",
    accent: "border-green-500 bg-green-50 text-green-800",
  },
  {
    quote: "AI insights helped us prioritize and plan with precision.",
    author: "Policy Advisor, USA",
    accent: "border-yellow-400 bg-yellow-50 text-yellow-800",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      {/* invisible SVG clip-path definition for this section */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="frame-testimonials" clipPathUnits="objectBoundingBox">
            <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-600">Voices from the Field</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from the agencies, producers, and advisors using Altibbe’s platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="aspect-square rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&h=800&q=80"
              alt="Testimonial conversation"
              className="w-full h-full object-cover"
              style={{ clipPath: 'url(#frame-testimonials)' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg border-l-4 shadow bg-white ${t.accent}`}
                >
                  <blockquote className="text-lg italic mb-3">“{t.quote}”</blockquote>
                  <div className="text-sm font-semibold mt-2">— {t.author}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
