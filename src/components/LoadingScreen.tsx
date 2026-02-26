import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="loading-screen"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full border border-[#c9a962]/30 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t border-[#c9a962]"
                />
                <span className="text-2xl font-light text-[#f5f0e8] tracking-wider">ВМ</span>
              </div>
            </motion.div>

            {/* Text reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-extralight text-[#f5f0e8] tracking-[0.2em] mb-2">
                В Моменте
              </h1>
              <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase">
                Кофейня
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
