import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const metrics = [
  { label: 'National Programs', value: 10, suffix: '+', color: 'text-yellow-500' },
  { label: 'Products Traced', value: 50_000_000, suffix: 'M+', color: 'text-green-600', isMillion: true },
  { label: 'Languages Supported', value: 8, suffix: '', color: 'text-yellow-500' },
  { label: 'Agency & Producer Partners', value: 100, suffix: '+', color: 'text-green-600' },
];

function useCountUp(target: number, start: boolean, duration = 1.2, format?: (n: number) => string) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [start, target, duration]);
  return format ? format(count) : count;
}

function formatNumber(n: number, metric: any) {
  if (metric.isMillion) {
    // Animate as 0M+, 1M+, ..., 50M+
    const millions = Math.floor(n / 1_000_000);
    return `${millions}M+`;
  }
  return `${n}${metric.suffix}`;
}

export default function ImpactMetrics() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Impact at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => {
            const animatedValue = useCountUp(metric.value, inView, 1.2, n => formatNumber(n, metric));
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border-t-4 border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`text-5xl font-bold mb-2 ${metric.color}`}>{animatedValue}</div>
                <div className="text-lg text-gray-700 font-medium">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}