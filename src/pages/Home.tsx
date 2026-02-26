import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Star, Clock, Dog, ArrowRight, Phone, Navigation } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { StatusIndicator } from '../components/StatusIndicator';

const features = [
  {
    icon: Coffee,
    title: 'Еда навынос',
    description: 'Возьмите с собой любимые блюда',
  },
  {
    icon: Clock,
    title: 'Кофе с собой',
    description: 'Свежесваренный кофе в пути',
  },
  {
    icon: Dog,
    title: 'Можно с собакой',
    description: 'Дружелюбно к питомцам',
  },
];

const galleryPreview = [
  { id: 1, alt: 'Интерьер кофейни' },
  { id: 2, alt: 'Кофе латте арт' },
  { id: 3, alt: 'Десерты' },
  { id: 4, alt: 'Атмосфера' },
];

const highlightedReviews = [
  {
    text: 'Невероятно вкусно! Раф ваниль — очень нежный, с идеальным балансом сладости.',
    author: 'Анна М.',
  },
  {
    text: 'Суперуютное место, где хочется возвращаться снова и снова.',
    author: 'Дмитрий К.',
  },
  {
    text: 'Не просто кофейня. Атмосферное место, где каждый уголок продуман.',
    author: 'Елена В.',
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.15)_0%,_transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c9a962]/5 blur-3xl" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#c9a962] tracking-wide">
              <Star className="w-4 h-4 fill-[#c9a962]" />
              <span>5,0 • 38 оценок</span>
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-[#f5f0e8] tracking-tight mb-6">
            <TextReveal text="В Моменте" delay={0.4} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-[#f5f0e8]/60 font-light tracking-wide mb-12"
          >
            Кофе. В точном моменте.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/menu"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a962] text-[#0a0a0a] font-medium tracking-wide hover:bg-[#d4b87a] transition-all duration-300"
            >
              <span>Меню</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacts"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] tracking-wide hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              <span>Как добраться</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-[#c9a962]/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-[#c9a962] rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Rating & Status Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="text-5xl md:text-6xl font-extralight text-[#f5f0e8]">5,0</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#f5f0e8]/60">38 оценок</p>
                </div>

                <div className="text-center border-y md:border-y-0 md:border-x border-[#c9a962]/10 py-6 md:py-0 md:px-8">
                  <StatusIndicator />
                </div>

                <div className="text-center md:text-right">
                  <p className="text-sm text-[#f5f0e8]/60 mb-1">Капучино</p>
                  <p className="text-3xl font-extralight text-[#c9a962]">240–280 ₽</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Особенности</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f0e8]">
                Создано для комфорта
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <div className="glass rounded-2xl p-8 h-full group hover:border-[#c9a962]/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-[#c9a962]" />
                    </div>
                    <h3 className="text-xl font-light text-[#f5f0e8] mb-2">{feature.title}</h3>
                    <p className="text-[#f5f0e8]/60">{feature.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Галерея</p>
                <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f0e8]">
                  Атмосфера
                </h2>
              </div>
              <Link
                to="/gallery"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#c9a962] hover:text-[#d4b87a] transition-colors group"
              >
                <span>Смотреть все 61 фото</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.1}>
                <Link to="/gallery" data-cursor="zoom">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#1a1a1a] group">
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span className="text-[#f5f0e8]/20 text-sm">{photo.alt}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Отзывы</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f0e8]">
                Что говорят гости
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {highlightedReviews.map((review, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
                    ))}
                  </div>
                  <p className="text-[#f5f0e8]/80 mb-6 leading-relaxed">"{review.text}"</p>
                  <p className="text-sm text-[#c9a962]">— {review.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all duration-300"
              >
                <span>Все 34 отзыва</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Локация</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#f5f0e8] mb-6">
                  Как добраться
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#c9a962] mt-1" />
                    <div>
                      <p className="text-[#f5f0e8]">Тула, ул. Софьи Перовской, 37</p>
                      <p className="text-sm text-[#f5f0e8]/60">500 м от Белоусовского парка</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Navigation className="w-5 h-5 text-[#c9a962]" />
                    <p className="text-sm text-[#f5f0e8]/60">Такси от 235 ₽</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+79051117137"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a962] text-[#0a0a0a] font-medium hover:bg-[#d4b87a] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Позвонить</span>
                  </a>
                  <Link
                    to="/contacts"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all"
                  >
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-[#1a1a1a] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#c9a962] mx-auto mb-4" />
                    <p className="text-[#f5f0e8]/60">Карта</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f0e8]">
                Частые вопросы
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: 'Можно с собакой?', a: 'Да, мы рады видеть вас с питомцами. У нас пет-френдли атмосфера.' },
              { q: 'Есть кофе навынос?', a: 'Конечно. Мы готовим кофе в специальных стаканах, которые сохраняют температуру.' },
              { q: 'Сколько стоит капучино?', a: 'Капучино стоит от 240 до 280 ₽ в зависимости от размера и выбора молока.' },
              { q: 'Есть ли парковка?', a: 'Рядом с кофейней есть уличная парковка и парковка торгового центра.' },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#f5f0e8] mb-2">{faq.q}</h3>
                  <p className="text-[#f5f0e8]/60">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c9a962]/30 flex items-center justify-center">
                <span className="text-sm font-light text-[#f5f0e8] tracking-wider">ВМ</span>
              </div>
              <span className="text-lg font-extralight text-[#f5f0e8] tracking-wider">В Моменте</span>
            </div>
            <p className="text-sm text-[#f5f0e8]/40">
              Тула, ул. Софьи Перовской, 37
            </p>
            <a
              href="tel:+79051117137"
              className="text-[#c9a962] hover:text-[#d4b87a] transition-colors"
            >
              +7 (905) 111-71-37
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
