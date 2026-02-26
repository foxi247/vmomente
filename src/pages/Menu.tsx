import { motion } from 'framer-motion';
import { Coffee, CupSoda, Cake, Sandwich } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';

const categories = [
  { id: 'coffee', name: 'Кофе', icon: Coffee },
  { id: 'drinks', name: 'Напитки', icon: CupSoda },
  { id: 'desserts', name: 'Десерты', icon: Cake },
  { id: 'food', name: 'Еда', icon: Sandwich },
];

const menuItems = {
  coffee: [
    { name: 'Эспрессо', price: '120 ₽', description: 'Классический, насыщенный' },
    { name: 'Американо', price: '150 ₽', description: 'Мягкий, с объёмом' },
    { name: 'Капучино', price: '240–280 ₽', description: 'Нежная пенка, идеальный баланс' },
    { name: 'Латте', price: '260–300 ₽', description: 'Молочный, с латте-артом' },
    { name: 'Флэт Уайт', price: '280 ₽', description: 'Интенсивный, бархатистый' },
    { name: 'Раф ваниль', price: '320 ₽', description: 'Как шёлк. Наша фишка.' },
    { name: 'Раф карамель', price: '320 ₽', description: 'Солёная карамель, сливки' },
    { name: 'Раф лаванда', price: '340 ₽', description: 'Цветочные ноты, нежность' },
    { name: 'Фильтр-кофе', price: '200 ₽', description: 'Сезонные зёрна, яркий вкус' },
    { name: 'Айс-латте', price: '300 ₽', description: 'Освежающий, с молоком' },
  ],
  drinks: [
    { name: 'Чай зелёный', price: '180 ₽', description: 'Сенча, жасмин' },
    { name: 'Чай чёрный', price: '180 ₽', description: 'Эрл Грей, бергамот' },
    { name: 'Матча латте', price: '350 ₽', description: 'Японская зелёная, молоко' },
    { name: 'Лимонад классический', price: '250 ₽', description: 'Домашний, мята' },
    { name: 'Лимонад ягодный', price: '280 ₽', description: 'Сезонные ягоды' },
    { name: 'Свежевыжатый сок', price: '300 ₽', description: 'Апельсин, грейпфрут' },
    { name: 'Морс клюквенный', price: '200 ₽', description: 'Домашний, не слишком сладкий' },
  ],
  desserts: [
    { name: 'Чизкейк классический', price: '320 ₽', description: 'Нью-Йорк стайл' },
    { name: 'Чизкейк манго-маракуйя', price: '350 ₽', description: 'Тропический, кислинка' },
    { name: 'Тирамису', price: '380 ₽', description: 'Итальянская классика' },
    { name: 'Медовик', price: '280 ₽', description: 'Многослойный, сметанный крем' },
    { name: 'Шоколадный фондан', price: '400 ₽', description: 'С жидким центром, ванильное мороженое' },
    { name: 'Круассан классический', price: '180 ₽', description: 'Сливочное масло, слоёный' },
    { name: 'Круассан миндальный', price: '250 ₽', description: 'С миндальным кремом' },
    { name: 'Панна-котта', price: '300 ₽', description: 'С ягодным соусом' },
  ],
  food: [
    { name: 'Авокадо-тост', price: '450 ₽', description: 'Хлеб на закваске, яйцо пашот' },
    { name: 'Сырники', price: '380 ₽', description: 'С сметаной и ягодным соусом' },
    { name: 'Гранола с йогуртом', price: '350 ₽', description: 'Домашняя, сезонные фрукты' },
    { name: 'Сэндвич с лососем', price: '520 ₽', description: 'Крем-чиз, каперсы, ржаной хлеб' },
    { name: 'Киш лорен', price: '420 ₽', description: 'С курицей и грибами' },
    { name: 'Салат Цезарь', price: '480 ₽', description: 'Классический, пармезан' },
  ],
};

export function Menu() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Меню</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#f5f0e8] mb-6">
              <TextReveal text="Напитки и десерты" />
            </h1>
            <p className="text-lg text-[#f5f0e8]/60 max-w-2xl mx-auto">
              Каждый напиток — это момент внимания к деталям. 
              Отборные зёрна, точная температура, идеальная текстура.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.1}>
              <TiltCard tiltAmount={5}>
                <div className="glass rounded-2xl p-6 text-center group cursor-pointer hover:border-[#c9a962]/30 transition-colors">
                  <category.icon className="w-8 h-8 text-[#c9a962] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-[#f5f0e8] font-light">{category.name}</h3>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.id} id={category.id}>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <category.icon className="w-6 h-6 text-[#c9a962]" />
                  <h2 className="text-2xl md:text-3xl font-extralight text-[#f5f0e8]">
                    {category.name}
                  </h2>
                  <div className="flex-1 h-px bg-[#c9a962]/20" />
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-4">
                {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                  <ScrollReveal key={item.name} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="group flex items-start justify-between p-6 rounded-2xl hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer"
                    >
                      <div>
                        <h3 className="text-lg text-[#f5f0e8] font-light mb-1 group-hover:text-[#c9a962] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[#f5f0e8]/50">{item.description}</p>
                      </div>
                      <span className="text-[#c9a962] font-light whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <p className="text-sm text-[#f5f0e8]/40">
              * Цены могут незначительно отличаться. Уточняйте у бариста.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
