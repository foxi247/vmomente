import { MapPin, Phone, Clock, Navigation, Car, Train, Dog, Coffee, Package } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TextReveal } from '../components/TextReveal';
import { StatusIndicator } from '../components/StatusIndicator';

export function Contacts() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-[#c9a962] tracking-[0.3em] uppercase mb-4">Контакты</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#f5f0e8] mb-6">
              <TextReveal text="Приходите в гости" />
            </h1>
            <p className="text-lg text-[#f5f0e8]/60 max-w-2xl mx-auto">
              Мы ждём вас каждый день. Просто найдите свой момент.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 h-full">
              <MapPin className="w-8 h-8 text-[#c9a962] mb-4" />
              <h3 className="text-lg text-[#f5f0e8] font-light mb-2">Адрес</h3>
              <p className="text-[#f5f0e8]/60 mb-1">Тула, ул. Софьи Перовской, 37</p>
              <p className="text-sm text-[#c9a962]">500 м от Белоусовского парка</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <Phone className="w-8 h-8 text-[#c9a962] mb-4" />
              <h3 className="text-lg text-[#f5f0e8] font-light mb-2">Телефон</h3>
              <a
                href="tel:+79051117137"
                className="text-[#f5f0e8]/60 hover:text-[#c9a962] transition-colors block mb-1"
              >
                +7 (905) 111-71-37
              </a>
              <p className="text-sm text-[#f5f0e8]/40">Звоните или пишите</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-8 h-full">
              <Clock className="w-8 h-8 text-[#c9a962] mb-4" />
              <h3 className="text-lg text-[#f5f0e8] font-light mb-2">Режим работы</h3>
              <p className="text-[#f5f0e8]/60 mb-1">Ежедневно: 8:00 – 22:00</p>
              <div className="mt-3">
                <StatusIndicator />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass rounded-2xl p-8 h-full">
              <Navigation className="w-8 h-8 text-[#c9a962] mb-4" />
              <h3 className="text-lg text-[#f5f0e8] font-light mb-2">Такси</h3>
              <p className="text-[#f5f0e8]/60 mb-1">От центра: от 235 ₽</p>
              <p className="text-sm text-[#f5f0e8]/40">Яндекс.Go, Ситимобил</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Map Section */}
        <ScrollReveal>
          <div className="glass rounded-3xl overflow-hidden mb-16">
            <div className="aspect-[21/9] md:aspect-[3/1] bg-[#1a1a1a] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#c9a962] mx-auto mb-4" />
                  <p className="text-xl text-[#f5f0e8] mb-2">ул. Софьи Перовской, 37</p>
                  <p className="text-[#f5f0e8]/60">Тула</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#c9a962]/30 rounded-full" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#c9a962]/20 rounded-full" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#c9a962]/40 rounded-full" />
            </div>
          </div>
        </ScrollReveal>

        {/* How to Get There */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-extralight text-[#f5f0e8] mb-8">
                Как добраться
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="text-[#f5f0e8] font-light mb-1">На машине</h3>
                    <p className="text-[#f5f0e8]/60 text-sm">
                      Рядом есть уличная парковка. Также можно воспользоваться парковкой торгового центра на соседней улице.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="text-[#f5f0e8] font-light mb-1">Общественный транспорт</h3>
                    <p className="text-[#f5f0e8]/60 text-sm">
                      Остановка «Улица Перовской» — автобусы 1, 12, 25, 44. От остановки 3 минуты пешком.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="text-[#f5f0e8] font-light mb-1">Пешком</h3>
                    <p className="text-[#f5f0e8]/60 text-sm">
                      500 метров от Белоусовского парка. Приятная прогулка через сквер.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-extralight text-[#f5f0e8] mb-8">
                Что вас ждёт
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6 text-center">
                  <Coffee className="w-8 h-8 text-[#c9a962] mx-auto mb-3" />
                  <h3 className="text-[#f5f0e8] font-light mb-1">Кофе с собой</h3>
                  <p className="text-sm text-[#f5f0e8]/60">В специальных стаканах</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <Package className="w-8 h-8 text-[#c9a962] mx-auto mb-3" />
                  <h3 className="text-[#f5f0e8] font-light mb-1">Еда навынос</h3>
                  <p className="text-sm text-[#f5f0e8]/60">Упакуем аккуратно</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <Dog className="w-8 h-8 text-[#c9a962] mx-auto mb-3" />
                  <h3 className="text-[#f5f0e8] font-light mb-1">Можно с собакой</h3>
                  <p className="text-sm text-[#f5f0e8]/60">Пет-френдли</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-[#c9a962] mx-auto mb-3" />
                  <h3 className="text-[#f5f0e8] font-light mb-1">Wi-Fi</h3>
                  <p className="text-sm text-[#f5f0e8]/60">Быстрый и бесплатный</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-extralight text-[#f5f0e8] mb-4">
              Ждём вас в «В Моменте»
            </h2>
            <p className="text-[#f5f0e8]/60 mb-8 max-w-xl mx-auto">
              Каждый визит — это возможность остановить время и насладиться идеальным кофе.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+79051117137"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a962] text-[#0a0a0a] font-medium hover:bg-[#d4b87a] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Позвонить</span>
              </a>
              <a
                href="https://yandex.ru/maps/?rtext=~54.1961,37.6184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#c9a962]/30 text-[#f5f0e8] hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>Построить маршрут</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
