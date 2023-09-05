import Banner from '@/component/Banner';
import Breadcrumb from '@/component/Breadcrumb';
import Header from '@/component/Header';
import MoreAction from '@/component/MoreAction';
import ShopInfo from '@/component/ShopInfo';
import ShopMenu from '@/component/ShopMenu';

export default function Home() {
  return (
    <main>
      <Header />
      <Breadcrumb />
      <Banner />
      <ShopInfo />
      <MoreAction />
      <ShopMenu />
    </main>
  );
}
