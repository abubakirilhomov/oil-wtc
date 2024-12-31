'use client'

import Image from 'next/image'

export default function Page() {
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
                ПРОИЗВОДСТВО
              </h1>
              
              <div className="mb-12 space-y-2">
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Завод
                </h2>
                <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  SINTEC
                </h3>
                <h4 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Lubricants
                </h4>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg text-white/90 lg:text-xl">
                На сегодняшний день завод SINTEC Lubricants в г. Обнинск Калужской области – одна из самых современных и крупных площадок по производству смазочных материалов в Европе. Предприятие официально сертифицировано на соответствие мировым стандартам ISO9001:2008 и ISO/TS 16949:2002, что подтверждает высокий уровень качества продукции SINTEC.
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 flex gap-8">
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">01</div>
              <div className="text-xl font-bold text-white">45 000 тонн -</div>
              <div className="text-lg text-white/90">резервуарный парк</div>
            </div>
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">02</div>
              <div className="text-xl font-bold text-white">380 000 тонн</div>
              <div className="text-lg text-white/90">готовой продукции в год</div>
            </div>
            <div className="text-right">
              <div className="mb-2 text-2xl font-bold text-white">03</div>
              <div className="text-xl font-bold text-white">65 000</div>
              <div className="text-lg text-white/90">палето-мест</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Center Section */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl">НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР</h2>
          <p className="text-lg mb-12 max-w-4xl">
            Научно-исследовательский центр SINTEC Lubricants объединяет 7 лабораторий, оборудованных по последнему слову техники: хроматографы и спектрометры всех типов, двухконтурные циркуляционные стенды для проведения коррозионных испытаний в условиях, имитирующих реальную эксплуатацию, оборудование для испытаний характеристик кавитационной и эрозионной коррозии алюминиевых насосов в соответствии с ASTM D2809.
          </p>
          
          <div className="relative h-[600px] w-full">
            <Image
              src="https://pr-lg.ru/images/view?file=20231101081835ZnfRoTYm.jpg"
              alt="SINTEC research center"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-16 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl">
            Складские помещения и логистические возможности
          </h2>
          <p className="text-lg mb-12 max-w-4xl">
            Ультрасовременный складской комплекс на 65 000 паллет мест. Высокая степень автоматизации обеспечивает быструю и точную обработку операций. Процесс инвентаризации роботизирован, поэтому происходит в максимально сжатые сроки и не мешает повседневной работе склада.
          </p>
          
          <div className="relative h-[600px] w-full">
            <Image
              src="https://a.d-cd.net/ftDLUYeHya-AaetkPwO13oVy4mE-960.jpg"
              alt="Warehouse and logistics facilities"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

