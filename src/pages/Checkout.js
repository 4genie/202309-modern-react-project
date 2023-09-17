import Header from '@/component/Header';
import Breadcrumb from '@/component/Breadcrumb';
import Banner from '@/component/Banner';
import ShoppingList from '@/component/ShoppingList';

const Checkout = () => {
  return (
    <main className="min-h-screen mx-auto max-w-[1920px]">
      <Header />
      <Breadcrumb />
      <Banner />
      <ShoppingList />
    </main>
  );
};

export default Checkout;
