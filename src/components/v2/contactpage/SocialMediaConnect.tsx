// src/components/v2/contactpage/SocialMediaConnect.tsx
import React from 'react';
import { motion } from 'framer-motion';

const socialPlatforms = [
  {
    name: 'LinkedIn',
    icon: '💼',
    handle: '@altibbe-inc',
    description: 'Professional updates and industry insights',
    link: 'https://www.linkedin.com/company/altibbe-inc',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
  },
  {
    name: 'Instagram',
    icon: '📸',
    handle: '@altibbe',
    description: 'Behind-the-scenes content and wellness tips',
    link: 'https://instagram.com/altibbe',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
  },
  {
    name: 'X (Twitter)',
    icon: '🐦',
    handle: '@altibbe',
    description: 'Real-time updates and health transparency news',
    link: 'https://twitter.com/altibbe',
    color: 'bg-sky-50 border-sky-200 hover:bg-sky-100'
  },
  {
    name: 'YouTube',
    icon: '📺',
    handle: 'Altibbe Channel',
    description: 'Educational videos and producer spotlights',
    link: 'https://youtube.com/@altibbe',
    color: 'bg-red-50 border-red-200 hover:bg-red-100'
  }
];

export default function SocialMediaConnect() {
  return (
    <section id="social" className="py-20 px-6 bg-gray-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect With Us on Social Media
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Stay connected with our community across all platforms. Follow us for daily health insights, 
            transparency tips, and behind-the-scenes glimpses into our mission to advance Health for Humanity.
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className={`${platform.color} border rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer`}
              onClick={() => window.open(platform.link, '_blank')}
            >
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{platform.name}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-3">{platform.handle}</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community Engagement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary-900 text-accent-mint rounded-3xl p-8 md:p-12 text-center"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Join Our Growing Community
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed max-w-4xl mx-auto mb-8"
          >
            Be part of a movement that's transforming health transparency worldwide. Share your thoughts, 
            discover healthy finds, and connect with like-minded individuals who believe in the power of informed choices.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-xl p-6"
            >
              <div className="text-2xl mb-3">🌍</div>
              <h4 className="font-bold text-accent-mint mb-2">Global Community</h4>
              <p className="text-accent-mint/80 text-sm">
                Connect with health-conscious individuals across 4 continents
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-xl p-6"
            >
              <div className="text-2xl mb-3">📚</div>
              <h4 className="font-bold text-accent-mint mb-2">Daily Learning</h4>
              <p className="text-accent-mint/80 text-sm">
                Access exclusive content on transparency, wellness, and sustainable living
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-xl p-6"
            >
              <div className="text-2xl mb-3">🤝</div>
              <h4 className="font-bold text-accent-mint mb-2">Producer Network</h4>
              <p className="text-accent-mint/80 text-sm">
                Connect directly with verified producers and ethical brands
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://instagram.com/altibbe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-500 text-accent-mint px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/altibbe-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-accent-mint text-accent-mint px-8 py-4 rounded-lg hover:bg-accent-mint hover:text-primary-900 transition-colors font-semibold text-lg"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Reminder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Still Have Questions?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              Don't hesitate to reach out directly. We're always here to help and answer any questions 
              about our mission, services, or how you can be part of the Health for Humanity movement.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:corp@altibbe.com"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Send Email
              </a>
              <a
                href="tel:+919614709999"
                className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
              >
                Call Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 