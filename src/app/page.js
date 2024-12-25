import AboutUs from './news/page';
import Catalog from './catalog/page';
import Contacts from './contacts/page';
import News from './news/page';
import OilChoice from './oil-choice/page';
import PressCenter from './press-center/page';
import Production from './production/page';
import Products from './products/page';
import Banner from '@/components/Banner';
import Dvigitel from '@/components/Dvgitel';
import ProductSwiper from '@/components/ProductSwiper';
import Otziv from '@/components/Otziv';
import Partner from '@/components/Partner';
import { Factory } from 'lucide-react';
import FactoryInfo from '@/components/FactoryInfo';
import HomeSwiper from '@/components/HomeSwiper';

export default function HomePage() {
  return (
    <div>
      <section className="container mx-auto">
          <Banner />
        </section>
        <section className=" container mx-auto">
          <Dvigitel />
        </section>
        <section>
          <ProductSwiper />
          <section>
            <section className='pt-10 pb-10'>
              <HomeSwiper/>
            </section>

            <FactoryInfo/>
          </section>
          <section>
            <Partner/>
          </section>
        </section>
        <section>
            <Otziv/>
        </section>
    </div>
  );
}
