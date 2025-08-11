// src/components/v2/contactpage/WaitlistNewsletter.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistNewsletter() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('consumer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for joining our waitlist! We'll keep you updated on our Health for Humanity mission.`);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-accent-sage" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
            >
              Join Our Waitlist
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-organic-text-light leading-relaxed mb-8"
            >
              Interested in becoming part of Altibbe's journey? Join our Waitlist to be the first to try 
              new offerings and receive updates on our mission. Whether you're a consumer or producer, 
              we'd love to have you with us as we advance <strong>'Health for Humanity'</strong> together.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Early Access</h3>
                  <p className="text-organic-text-light">
                    Be among the first to access new Hedamo services and features before public release.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Mission Updates</h3>
                  <p className="text-organic-text-light">
                    Receive monthly insights about health transparency, industry developments, and Altibbe's global impact.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-2">Community Access</h3>
                  <p className="text-organic-text-light">
                    Connect with like-minded producers and health-conscious consumers in our growing community.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Movement
                </h3>
                <p className="text-gray-600">
                  Step into a transparent future of health and wellness
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    I am a:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="consumer"
                        checked={userType === 'consumer'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-700">Consumer</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="producer"
                        checked={userType === 'producer'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-700">Producer/Brand</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="waitlist-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Join Waitlist</span>
                  <span>🚀</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By joining, you agree to receive updates about Altibbe's mission and products. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Community Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="bg-white/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-primary-800 mb-2">1000+</div>
              <p className="text-organic-text-light">Community Members</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="bg-white/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-primary-800 mb-2">50+</div>
              <p className="text-organic-text-light">Partner Producers</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="bg-white/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-primary-800 mb-2">4</div>
              <p className="text-organic-text-light">Countries Served</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 