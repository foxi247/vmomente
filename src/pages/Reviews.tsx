import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextReveal } from '../components/TextReveal';

const reviews = [
  {
    id: 1,
    author: 'Анна М.',
    rating: 5,
    date: '2 недели назад',
    text: 'Невероятно вкусно! Раф ваниль — очень нежный, с идеальным балансом сладости. Обязательно попробуйте их круассаны, они просто тают во рту.',
    likes: 12,
    platform: 'Google',
  },
  {
    id: 2,
    author: 'Дмитрий К.',
    rating: 5,
    date: '3 недели назад',
    text: 'С огромным удовольствием посещаю это суперуютное место. Хочется возвращаться снова и снова. Бариста настоящие профессионалы, всегда помогут с выбором.',
    likes: 8,
    platform: 'Яндекс',
  },
  {
    id: 3,
    author: 'Елена В.',
    rating: 5,
    date: 'месяц назад',
    text: 'Не просто кофейня. Атмосферное место, где каждый уголок продуман. Можно прийти с ноутбуком поработать или просто насладиться тишиной с книгой.',
    likes: 15,
    platform: 'Google',
  },
  {
    id: 4,
    author: 'Михаил П.',
    rating: 5,
    date: 'месяц назад',
    text: 'Лучший кофе в Туле, без преувеличений. Фильтр-кофе просто волшебный, чувствуется качество зёрен и мастерство приготовления.',
    likes: 6,
    platform: 'Яндекс',
  },
  {
    id: 5,
    author: 'Ольга С.',
    rating: 5,
    date: '2 месяца назад',
    text: 'Принесли собаку — нас встретили с улыбкой. Пет-френдли атмосфера, вкуснейший матча латте и невероятно красивый интерьер.',
    likes: 9,
    platform: 'Google',
  },
  {
    id: 6,
    author: 'Алексей Н.',
    rating: 5,
    date: '2 месяца назад',
    text: 'Работаю удалённо, и это мой любимый коворкинг. Wi-Fi отличный, розетки есть везде, кофе бесконечный. Что ещё нужно?',
    likes: 11,
    platform: 'Яндекс',
  },
  {
    id: 7,
    author: 'Ксения Л.',
    rating: 5,
    date: '2 месяца назад',
    text: 'Чизкейк здесь — это что-то невероятное. Нежный, с правильной текстурой, не приторный. Идеально сочетается с их флэт уайтом.',
    likes: 7,
    platform: 'Google',
  },
  {
    id: 8,
    author: 'Игорь В.',
    rating: 5,
    date: '3 месяца назад',
    text: 'Пришёл на свидание — остались в восторге оба. Интимная атмосфера, приглушённый свет, отличный сервис. Рекомендую для романтических встреч.',
    likes: 14,
    platform: 'Яндекс',
  },
  {
    id: 9,
    author: 'Наталья Р.',
    rating: 5,
    date: '3 месяца назад',
    text: 'Наконец-то в Туле появилось место с настоящим specialty coffee. Бариста рассказали о происхождении зёрен, это ценно.',
    likes: 5,
    platform: 'Google',
  },
  {
    id: 10,
    author: 'Сергей М.',
    rating: 5,
    date: '3 месяца назад',
    text: 'Завтраки здесь — отдельная история. Авокадо-тост с яйцом пашот — мой must-have каждое утро. Свежие ингредиенты, красивая подача.',
    likes: 10,
    platform: 'Яндекс',
  },
  {
    id: 11,
    author: 'Виктория А.',
    rating: 5,
    date: '4 месяца назад',
    text: 'Обожаю их сезонные напитки. Лавандовый раф — это поэзия, а не просто кофе. Жду каждое обновление меню с нетерпением.',
    likes: 8,
    platform: 'Google',
  },
  {
    id: 12,
    author: 'Андрей Т.',
    rating: 5,
    date: '4 месяца назад',
    text: 'Был проездом в Туле, зашёл по отзывам. Не пожалел! Теперь каждый раз, когда бываю в городе, обязательно захожу.',
    likes: 4,
    platform: 'Яндекс',
  },
  {
    id: 13,
    author: 'Марина К.',
    rating: 5,
    date: '4 месяца назад',
    text: 'Интерьер в стиле минимализма, но очень тёплый. Дерево, мягкий свет, удобные кресла. Можно сидеть часами.',
    likes: 6,
    platform: 'Google',
  },
  {
    id: 14,
    author: 'Павел З.',
    rating: 5,
    date: '5 месяцев назад',
    text: 'Цены адекватные для такого качества. Капучино за 240 ₽ — это подарок. В Москве такой стоил бы в два раза дороже.',
    likes: 13,
    platform: 'Яндекс',
  },
  {
    id: 15,
    author: 'Юлия Е.',
    rating: 5,
    date: '5 месяцев назад',
    text: 'Праздновала здесь день рождения с подругами. Персонал был невероятно внимательным, даже свечку в десерт поставили. Спасибо!',
    likes: 9,
    platform: 'Google',
  },
  {
    id: 16,
    author: 'Роман С.',
    rating: 5,
    date: '5 месяцев назад',
    text: 'Кофе с собой всегда упаковано идеально — не прольётся, не остынет быстро. Детали, которые ценишь как постоянный клиент.',
    likes: 7,
    platform: 'Яндекс',
  },
  {
    id: 17,
    author: 'Татьяна Н.',
    rating: 5,
    date: '6 месяцев назад',
    text: 'Мой сын в восторге от их горячего шоколада. Говорит, что это "настоящий", не из порошка. Редкость в наше время.',
    likes: 5,
    platform: 'Google',
  },
  {
    id: 18,
    author: 'Григорий Л.',
    rating: 5,
    date: '6 месяцев назад',
    text: 'Провёл здесь целый день, готовился к экзаменам. Тишина, комфорт, отличный кофе — идеальные условия для концентрации.',
    likes: 8,
    platform: 'Яндекс',
  },
  {
    id: 19,
    author: 'Светлана О.',
    rating: 5,
    date: '6 месяцев назад',
    text: 'Тирамису здесь — лучший в городе. Пропитан идеально, кофейный вкус насыщенный, но не горький. Настоящий итальянский рецепт.',
    likes: 11,
    platform: 'Google',
  },
  {
    id: 20,
    author: 'Денис В.',
    rating: 5,
    date: '7 месяцев назад',
    text: 'Локация отличная — рядом парк, можно взять кофе и пойти гулять. Или наоборот, отдохнуть после прогулки.',
    likes: 6,
    platform: 'Яндекс',
  },
  {
    id: 21,
    author: 'Алина М.',
    rating: 5,
    date: '7 месяцев назад',
    text: 'Фотографировала здесь контент для блога. Получилось эстетично и органично. Интерьер очень Instagram-friendly.',
    likes: 14,
    platform: 'Google',
  },
  {
    id: 22,
    author: 'Борис К.',
    rating: 5,
    date: '7 месяцев назад',
    text: 'Как любитель кофе, могу сказать — здесь знают толк в зёрнах. Профили обжарки разные, можно выбрать под свой вкус.',
    likes: 9,
    platform: 'Яндекс',
  },
  {
    id: 23,
    author: 'Жанна Р.',
    rating: 5,
    date: '8 месяцев назад',
    text: 'Медовик — бомба! Многослойный, сметанный крем, не приторный. Делюсь всегда с мамой, она теперь тоже фанат.',
    likes: 7,
    platform: 'Google',
  },
  {
    id: 24,
    author: 'Владимир П.',
    rating: 5,
    date: '8 месяцев назад',
    text: 'Привык к сетевым кофейням, но это место совсем другое. Душа, внимание к деталям, персональный подход.',
    likes: 10,
    platform: 'Яндекс',
  },
  {
    id: 25,
    author: 'Екатерина С.',
    rating: 5,
    date: '8 месяцев назад',
    text: 'Веганские опции есть! Растительное молоко без доплаты, что редкость. Овсяное латте — мой фаворит.',
    likes: 12,
    platform: 'Google',
  },
  {
    id: 26,
    author: 'Артём З.',
    rating: 5,
    date: '9 месяцев назад',
    text: 'Гранола с йогуртом — идеальный старт дня. Домашняя, с сезонными фруктами, не из пакета.',
    likes: 5,
    platform: 'Яндекс',
  },
  {
    id: 27,
    author: 'Полина В.',
    rating: 5,
    date: '9 месяцев назад',
    text: 'Шоколадный фондан с ванильным мороженым — must try! Жидкий центр, насыщенный вкус, идеальное сочетание температур.',
    likes: 15,
    platform: 'Google',
  },
  {
    id: 28,
    author: 'Максим Л.',
    rating: 5,
    date: '9 месяцев назад',
    text: 'Провёл здесь первое свидание с девушкой, которая стала моей женой. Теперь приходим на годовщины. Особенное место.',
    likes: 20,
    platform: 'Яндекс',
  },
  {
    id: 29,
    author: 'Ирина Н.',
    rating: 5,
    date: '10 месяцев назад',
    text: 'Чистота, порядок, всё блестит. Видно, что следят за гигиеной. Важно для меня как для перфекциониста.',
    likes: 8,
    platform: 'Google',
  },
  {
    id: 30,
    author: 'Станислав М.',
    rating: 5,
    date: '10 месяцев назад',
    text: 'Круассан миндальный — это что-то с чем-то. Хрустящий, с нежной начинкой, не слишком сладкий.',
    likes: 6,
    platform: 'Яндекс',
  },
  {
    id: 31,
    author: 'Вероника А.',
    rating: 5,
    date: '10 месяцев назад',
    text: 'Обслуживание быстрое, даже когда очередь. Бариста работают слаженно, не теряются в пиковые часы.',
    likes: 7,
    platform: 'Google',
  },
  {
    id: 32,
    author: 'Константин Р.',
    rating: 5,
    date: '11 месяцев назад',
    text: 'Матча латте — лучший в городе. Правильно взбита, без комочков, яркий вкус. Настоящая японская матча.',
    likes: 11,
    platform: 'Яндекс',
  },
  {
    id: 33,
    author: 'Людмила Т.',
    rating: 5,
    date: '11 месяцев назад',
    text: 'Привела сюда подругу из Москвы — она была в восторге. Сказала, что не хуже столичных заведений.',
    likes: 9,
    platform: 'Google',
  },
  {
    id: 34,
    author: 'Евгений К.',
    rating: 5,
    date: 'год назад',
    text: 'С первого визита понял, что это моё место. За год ничего не изменилось — качество на высоте, атмосфера по-прежнему уютная.',
    likes: 13,
    platform: 'Яндекс',
  },
];

export function Reviews() {
  const [visibleCount, setVisibleCount] = useState(6);

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  const ratingDistribution = [
    { stars: 5, count: 34, percentage: 100 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Отзывы</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#f5f0e8] mb-6">
              <TextReveal text="Голоса гостей" />
            </h1>
            <p className="text-lg text-[#f5f0e8]/60 max-w-2xl mx-auto">
              34 истории. 34 момента. Каждый отзыв — это благодарность.
            </p>
          </div>
        </ScrollReveal>

        {/* Rating Summary */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Big Rating */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-6xl md:text-7xl font-extralight text-[#f5f0e8]">
                    {averageRating.toFixed(1)}
                  </span>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />
                      ))}
                    </div>
                    <span className="text-sm text-[#f5f0e8]/60">{totalReviews} оценок</span>
                  </div>
                </div>
                <p className="text-[#f5f0e8]/60">
                  На основе отзывов с Google Maps и Яндекс.Карт
                </p>
              </div>

              {/* Right - Distribution */}
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm text-[#f5f0e8]/60 w-8">{item.stars}</span>
                    <Star className="w-4 h-4 text-[#c9a962]" />
                    <div className="flex-1 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#c9a962] rounded-full"
                      />
                    </div>
                    <span className="text-sm text-[#f5f0e8]/40 w-8 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="glass rounded-2xl p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-[#f5f0e8] font-light">{review.author}</h3>
                      <p className="text-xs text-[#f5f0e8]/40">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#c9a962] text-[#c9a962]" />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-[#f5f0e8]/70 text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#c9a962]/10">
                    <span className="text-xs text-[#f5f0e8]/40">{review.platform}</span>
                    <div className="flex items-center gap-1 text-xs text-[#f5f0e8]/40">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{review.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < reviews.length && (
          <ScrollReveal>
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => Math.min(prev + 6, reviews.length))}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all duration-300"
              >
                <span>Показать ещё</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="glass rounded-3xl p-8 md:p-12">
              <MessageCircle className="w-12 h-12 text-[#c9a962] mx-auto mb-4" />
              <h3 className="text-2xl font-extralight text-[#f5f0e8] mb-2">
                Поделитесь впечатлениями
              </h3>
              <p className="text-[#f5f0e8]/60 mb-6">
                Ваш отзыв помогает нам становиться лучше
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://g.co/kgs/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#c9a962] text-[#0a0a0a] font-medium hover:bg-[#d4b87a] transition-colors"
                >
                  Google Maps
                </a>
                <a
                  href="https://yandex.ru/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all"
                >
                  Яндекс.Карты
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
