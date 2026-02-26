import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  type?: 'words' | 'chars' | 'lines';
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'words',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const items = type === 'chars' 
    ? text.split('') 
    : type === 'words' 
    ? text.split(' ') 
    : [text];

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + index * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {item}
            {type === 'words' && index < items.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
