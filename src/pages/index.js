import Banner from '@/component/Banner';
import Breadcrumb from '@/component/Breadcrumb';
import Header from '@/component/Header';
import MoreAction from '@/component/MoreAction';
import ShopInfo from '@/component/ShopInfo';
import ShopMenu from '@/component/ShopMenu';
import MenuCategory from '@/component/MenuCategory';
import CategoryItems from '@/component/CategoryItems';
import Item from '@/component/Item';

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
