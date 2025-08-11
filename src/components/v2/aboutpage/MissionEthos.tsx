// src/components/v2/aboutpage/MissionEthos.tsx
import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Transparency',
    description: 'We believe knowledge is power; we provide full visibility into product origins and practices.',
    icon: '🔍',
    color: 'text-green-600'
  },
  {
    title: 'Holistic Health',
    description: 'Wellness encompasses mind, body, and spirit, connecting ancient wisdom with modern science.',
    icon: '🌿',
    color: 'text-green-600'
  },
  {
    title: 'Sustainability',
    description: 'Protecting our planet while nourishing our bodies for future generations.',
    icon: '🌍',
    color: 'text-blue-600'
  },
  {
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology while honoring time-tested traditions.',
    icon: '⚡',
    color: 'text-purple-600'
  },
  {
    title: 'Trust',
    description: 'Building confidence through integrity, truthful reporting, and no greenwashing.',
    icon: '🤝',
    color: 'text-amber-600'
  }
];

export default function MissionEthos() {
  return (
    <section id="mission-ethos" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mission & Ethos
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              Altibbe's guiding mission, encapsulated in the motto <strong className="text-green-600">"Health for Humanity,"</strong> emphasizes 
              holistic wellness and global transparency. This motto drives the company to blend modern science with 
              traditional wisdom, ensuring that innovation in health remains human-centric and ethical.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed mb-6"
            >
              We bridge the gap between ancestral health knowledge and cutting-edge technology to restore trust 
              in what we consume. Altibbe is not just a business, but a movement for good.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our ethos centers on transparency, sustainability, and empowerment, blending AI and blockchain 
              while honoring time-tested practices that have supported human health for generations.
            </motion.p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 ${principle.color}`}>
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h3>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="border-l-4 border-green-500 pl-6"
              >
                <h4 className="font-bold text-gray-800 mb-2">Integrity</h4>
                <p className="text-gray-600">
                  Truthful reporting and no greenwashing – we believe in honest communication about 
                  product origins, benefits, and limitations.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h4 className="font-bold text-gray-800 mb-2">Community</h4>
                <p className="text-gray-600">
                  Building a network of like-minded health producers and consumers who share our 
                  commitment to transparency and wellness.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="border-l-4 border-purple-500 pl-6"
              >
                <h4 className="font-bold text-gray-800 mb-2">Innovation Balanced with Tradition</h4>
                <p className="text-gray-600">
                  Leveraging AI and blockchain while honoring time-tested practices that have 
                  supported human health for generations.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&h=800&q=80"
              alt="Organic laboratory research"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-900/20 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Founder Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 bg-accent-sage rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-primary-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-serif text-primary-800 leading-relaxed mb-6">
              Health for Humanity isn't just our motto, it's our north star guiding every decision.
            </blockquote>
            <cite className="text-lg text-organic-text-light">
              — <strong>Shams Ahmed</strong>, Founder & CEO<br/>
              <span className="text-sm">Visionary blending AI, ethics, and wellness to build global trust in health-conscious products</span>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 