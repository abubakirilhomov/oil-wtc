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
import HomeSwiper from '@/components/HomeSwiper';
import Missiya from '@/components/Missiya';
import Lineyka from '@/components/Lineyka';
import Xz from '@/components/Sindec';
import NewsPage from './news/page';
import LayoutsPage from './about-us/page';

export default function HomePage() {
  return (
    <div>
      <section className="container mx-auto">
          <Banner />
        </section>
      
        <section>
          <Xz/>
        </section>
        <section className=" container mx-auto">
          <Missiya />
        </section>
        <section className=" container mx-auto min-h-screen max-w-7xl">
          <Lineyka />
          <ProductSwiper />
          <LayoutsPage/>
 

        </section>


  
        <section>
            <Otziv/>
        </section>
    </div>
  );
}