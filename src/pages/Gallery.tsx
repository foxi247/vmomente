import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextReveal } from '../components/TextReveal';

// Generate 61 placeholder photos
const photos = Array.from({ length: 61 }, (_, i) => ({
  id: i + 1,
  alt: `Фото ${i + 1}`,
  category: i % 4 === 0 ? 'интерьер' : i % 4 === 1 ? 'кофе' : i % 4 === 2 ? 'десерты' : 'атмосфера',
}));

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const openPhoto = (id: number) => {
    setSelectedPhoto(id);
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    const newId = direction === 'next' 
      ? selectedPhoto >= 61 ? 1 : selectedPhoto + 1
      : selectedPhoto <= 1 ? 61 : selectedPhoto - 1;
    setSelectedPhoto(newId);
  };

  // Split photos into columns for masonry effect
  const column1 = photos.filter((_, i) => i % 3 === 0);
  const column2 = photos.filter((_, i) => i % 3 === 1);
  const column3 = photos.filter((_, i) => i % 3 === 2);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Галерея</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#f5f0e8] mb-6">
              <TextReveal text="61 момент" />
            </h1>
            <p className="text-lg text-[#f5f0e8]/60 max-w-2xl mx-auto">
              Каждый кадр — это атмосфера. Тепло, текстура, свет.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-4">
            {column1.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openPhoto(photo.id)}
                  data-cursor="zoom"
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1a1a1a] cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#f5f0e8]/20 text-sm">{photo.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-[#f5f0e8]">{photo.alt}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-4">
            {column2.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.05 + 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openPhoto(photo.id)}
                  data-cursor="zoom"
                  className={`relative rounded-2xl overflow-hidden bg-[#1a1a1a] cursor-pointer group ${
                    index % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#f5f0e8]/20 text-sm">{photo.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-[#f5f0e8]">{photo.alt}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-4">
            {column3.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.05 + 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openPhoto(photo.id)}
                  data-cursor="zoom"
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1a1a1a] cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#f5f0e8]/20 text-sm">{photo.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-[#f5f0e8]">{photo.alt}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closePhoto}
          >
            {/* Close button */}
            <button
              onClick={closePhoto}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center text-[#f5f0e8] hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center text-[#f5f0e8] hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center text-[#f5f0e8] hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo */}
            <motion.div
              key={selectedPhoto}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl text-[#f5f0e8]/40 mb-2">Фото {selectedPhoto}</p>
                  <p className="text-sm text-[#c9a962]">{photos[selectedPhoto - 1]?.category}</p>
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#f5f0e8]/60">
              {selectedPhoto} / 61
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
