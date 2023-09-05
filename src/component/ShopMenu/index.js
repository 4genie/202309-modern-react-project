import MenuCategory from '../MenuCategory';
import CategoryItems from '../CategoryItems';

const ShopMenu = () => {
  return (
    <div className="flex pl-6">
      <div className="w-[25%] pr-4">
        <MenuCategory />
      </div>
      <div className="right flex-1">
        <CategoryItems />
      </div>
    </div>
  );
};

export default ShopMenu;
