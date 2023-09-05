import { DrawingPinFilledIcon } from '@radix-ui/react-icons';

const SearchBar = () => {
  return (
    <div className="flex min-h-[100px] flex-1 items-center gap-2 px-2 relative ">
      <DrawingPinFilledIcon className="h-4 w-4 absolute ml-2" />
      <input
        type="text"
        placeholder="請輸入外送地址"
        className=" border-b-2 bg-gray-200/60 w-4/5 pl-8 py-2 hover:outline-none focus:outline-none focus:border-b-stone-500"
      />
    </div>
  );
};

export default SearchBar;
