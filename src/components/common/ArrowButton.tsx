import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArrowButtonProps {
  href?: string;
  children: React.ReactNode;
  classname?: string;
  animationType?: 'slide' | 'bounce' | 'scale' | 'rotate' | 'fade' | 'custom';
}

export default function ArrowButton({
  href = '#',
  children,
  classname = '',
  animationType = 'slide',
}: ArrowButtonProps) {
  // Different animation configurations
  const animations = {
    slide: {
      className: "btn-mono inline-flex items-center overflow-hidden group",
      content: (
        <span className="flex items-center space-x-3 relative">
          <span className="transform transition-transform duration-300 group-hover:translate-x-4">
            →
          </span>
          <span className="transform transition-transform duration-300 group-hover:-translate-x-4">
            {children}
          </span>
        </span>
      )
    },
    bounce: {
      className: "btn-mono inline-flex items-center group",
      content: (
        <span className="flex items-center space-x-3">
          <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
            →
          </span>
          <span className="transform transition-all duration-300 group-hover:scale-105">
            {children}
          </span>
        </span>
      )
    },
    scale: {
      className: "btn-mono inline-flex items-center group",
      content: (
        <span className="flex items-center space-x-3">
          <span className="transform transition-all duration-300 group-hover:scale-125">
            →
          </span>
          <span className="transform transition-all duration-300 group-hover:scale-110">
            {children}
          </span>
        </span>
      )
    },
    rotate: {
      className: "btn-mono inline-flex items-center group",
      content: (
        <span className="flex items-center space-x-3">
          <span className="transform transition-all duration-300 group-hover:rotate-12 group-hover:translate-x-2">
            →
          </span>
          <span className="transform transition-all duration-300 group-hover:-translate-x-1">
            {children}
          </span>
        </span>
      )
    },
    fade: {
      className: "btn-mono inline-flex items-center group",
      content: (
        <span className="flex items-center space-x-3">
          <span className="transform transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2">
            →
          </span>
          <span className="transform transition-all duration-300 group-hover:opacity-80">
            {children}
          </span>
        </span>
      )
    },
    custom: {
      className: "btn-mono inline-flex items-center group",
      content: (
        <span className="flex items-center space-x-3">
          <span className="transform transition-all duration-500 group-hover:translate-x-6 group-hover:rotate-180">
            →
          </span>
          <span className="transform transition-all duration-500 group-hover:-translate-x-3 group-hover:scale-110">
            {children}
          </span>
        </span>
      )
    }
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      href={href}
      className={`${selectedAnimation.className} ${classname}`}
    >
      {selectedAnimation.content}
    </motion.a>
  );
}