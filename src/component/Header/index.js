import {
  BackpackIcon,
  DrawingPinFilledIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

const Header = () => {
  return (
    <div className="flex min-h-[100px] items-center">
      <div className="mr-4 flex items-center">
        <div className=" grid w-[80px] place-items-center ">
          <HamburgerMenuIcon className="h-[18px] w-[18px]" />
        </div>
        <div className="text-3xl ">
          Modern <b className="mx-2">Eats</b>
        </div>
      </div>
      <div className=" flex flex-1 items-center">
        <div className="flex min-h-[100px] flex-1 items-center gap-2 bg-white p-2 px-3 ">
          <div>
            <DrawingPinFilledIcon className="h-[16px] w-[16px]" />
          </div>
          <input
            type="text"
            placeholder="請輸入外送地址"
            className="w-4/5 border-b bg-transparent pb-1 hover:outline-none focus:outline-none"
          />
        </div>
        <div className="grid place-items-center px-4">
          <div className="flex items-center gap-2 rounded-full  bg-black p-2 px-4 text-white">
            <div>
              <BackpackIcon />
            </div>
            <div className="text-sm">購物車</div>
            <div className="text-sm">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
