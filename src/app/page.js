import AboutUs from './news/page';
import Catalog from './catalog/page';
import Contacts from './contacts/page';
import News from './news/page';
import OilChoice from './oil-choice/page';
import PressCenter from './press-center/page';
import Production from './production/page';
import Banner from '@/components/Banner';
import Dvigitel from '@/components/Dvgitel';
import ProductSwiper from '@/components/ProductSwiper';
import Otziv from '@/components/Otziv';
import FactoryInfo from '@/components/FactoryInfo';
import { Section } from 'lucide-react';
import Partner from '@/components/Partner';

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
        </section>
        <section>
        <FactoryInfo/>
        </section>
        <section>
          <Partner/>
        </section>
        <section>
            <Otziv/>
        </section>
    </div>
  );
}
