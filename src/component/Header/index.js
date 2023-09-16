import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Cart from '../Cart';
import SearchBar from '../SearchBar';
import { useSelector } from 'react-redux';
import map from 'lodash/map';
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const cartTotalCount = map(cart).reduce((acc, cur) => acc + cur, 0);

  // const cartTotalCount = 0;
  return (
    <div className="flex min-h-[100px] items-center">
      <div className="mr-4 flex items-center">
        {/* logo */}
        <div className=" grid w-[80px] place-items-center ">
          <HamburgerMenuIcon className="h-[18px] w-[18px]" />
        </div>
        {/* brand name */}
        <div className="text-3xl ">
          Modern <b className="mx-2">Eats</b>
        </div>
      </div>

      <div className=" flex flex-1 items-center">
        <SearchBar />
        <Cart count={cartTotalCount} />
      </div>
    </div>
  );
};

export default Header;
