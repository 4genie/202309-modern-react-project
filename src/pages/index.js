import Banner from '@/component/Banner';
import Breadcrumb from '@/component/Breadcrumb';
import Header from '@/component/Header';
import ShopInfo from '@/component/ShopInfo';

export default function Home() {
  return (
    <main>
      <Header />
      <Breadcrumb />
      <Banner />
      <ShopInfo />
    </main>
  );
}
