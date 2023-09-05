import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Cart from '../Cart';
import SearchBar from '../SearchBar';

const Header = () => {
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
        <Cart />
      </div>
    </div>
  );
};

export default Header;
