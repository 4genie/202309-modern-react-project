import Banner from '@/component/Banner';
import Breadcrumb from '@/component/Breadcrumb';
import Header from '@/component/Header';
import MoreAction from '@/component/MoreAction';
import ShopInfo from '@/component/ShopInfo';
import { PlusIcon } from '@radix-ui/react-icons';
export default function Home() {
  return (
    <main>
      <Header />
      <Breadcrumb />
      <Banner />
      <ShopInfo />
      <MoreAction />
    </main>
  );
}
