import { useState, useEffect } from 'react';
import MenuCategory from '@/component/MenuCategory';
import CategoryItems from '@/component/CategoryItems';
import mockData from '@/data/mockData';
import { refinedCategory, refinedItems } from '@/utils/refinedData';
const ShopMenu = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 提取資料的所有分類
    setCategory(refinedCategory(mockData));
    // 根據分類不同，將同類的 item 歸類在一起
    setItems(refinedItems(mockData));
  }, []);

  const handleOnMenuCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const activeCategoryLabel = category?.[activeCategory];

  return (
    <div className="flex pl-6">
      <div className="w-[25%] pr-4">
        <MenuCategory
          data={category}
          active={activeCategory}
          onClick={handleOnMenuCategoryClick}
        />
      </div>
      <div className="right flex-1">
        <CategoryItems data={items} active={activeCategoryLabel} />
      </div>
    </div>
  );
};

export default ShopMenu;
