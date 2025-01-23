'use client'

import Image from 'next/image'

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="https://avatars.mds.yandex.net/get-vertis-journal/4465444/15.jpg_1702462279077/orig"
          alt="Industrial facility aerial view"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full w-full">
          <div className="flex justify-between p-12">
            <div className="max-w-xl">
              <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                WTC
              </h1>

              <div className="mb-12 space-y-2">
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Инфо о заводе
                </h2>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg text-white/90 lg:text-xl">
                СП ООО "World Trading Company" основано в 2013 году, занимается производством охлаждающих жидкостей 
                (антифризов) для автомобильной и промышленной техники, высоковольтных проводов (свечных проводов), 
                воздушных фильтров, готовых моторных масел и AUS 32 (AdBlue) - 32,5% водного раствора мочевины для очистки 
                выхлопных газов дизельных двигателей, с использованием современного оборудования и технологий. 
                Предприятие является первопроходцем в применении современных «карбоксилатных» технологий в производстве 
                антифризов класса G12+ в Узбекистане.
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 flex gap-8">
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">01</div>
              <div className="text-xl font-bold text-white">150 000 тонн</div>
              <div className="text-lg text-white/90">антифризов</div>
            </div>
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">02</div>
              <div className="text-xl font-bold text-white">500 000 комплектов</div>
              <div className="text-lg text-white/90">свечных проводов</div>
            </div>
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">03</div>
              <div className="text-xl font-bold text-white">10 000 тонн</div>
              <div className="text-lg text-white/90">моторных масел</div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Facilities Section */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl">
            Производственные и складские помещения
          </h2>
          <p className="text-lg mb-12 max-w-4xl">
            Территория завода составляет 4,13 гектара. Производственные и складские помещения расположены в 5 блоках 
            общей площадью 8 000 кв. м. Имеется 3 емкостных парка для хранения сырья и готовой продукции с объемом 3200 тонн. 
            Складские помещения позволяют хранить одновременно 5 000 тонн готовой продукции.
          </p>

          <div className="relative h-[600px] w-full">
            <Image
              src="https://pr-lg.ru/images/view?file=20231101081835ZnfRoTYm.jpg"
              alt="Production and storage facilities"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="py-16 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl">
            Испытательная лаборатория
          </h2>
          <p className="text-lg mb-12 max-w-4xl">
            На предприятии налажено производство канистр. Каждый выпускаемый ассортимент имеет свой уникальный дизайн 
            канистр. Лаборатория проводит контроль качества на каждом этапе производства, от входного контроля сырья до 
            выпуска готовой продукции. Из каждой партии отбирается арбитражная проба и хранится до конца гарантийного срока.
          </p>

          <div className="relative h-[600px] w-full">
            <Image
              src="https://a.d-cd.net/ftDLUYeHya-AaetkPwO13oVy4mE-960.jpg"
              alt="Testing laboratory"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg max-w-4xl">
            Предприятие имеет свою ж/д ветку, которая дает возможность погрузки и выгрузки товаров прямо на своей территории. 
            Ближайшей ж/д станцией является Пахтакор УТИ. Налажен экспорт в такие страны как: Казахстан, Кыргызстан, Таджикистан, 
            Турция, Грузия, Литва и др. европейские страны. Для отгрузки товара на экспорт ближайшими таможенными постами являются 
            (с расстоянием до предприятия):
          </p>

          <ul className="mt-8 space-y-4 text-lg">
            <li>• ПТП «Сырдарья» - 120 км (Казахстан); птП «Яллама» - 140 км (Казахстан);</li>
            <li>• ПТП «С. Наджимов» - 150 км (Казахстан);</li>
            <li>• ПТП «Дустлик» - 470 км (Кыргызстан);</li>
            <li>• ПТП «Ойбек» - 170 км (Таджикистан);</li>
            <li>• ПТП «Алат» - 490 км (Туркменистан).</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
