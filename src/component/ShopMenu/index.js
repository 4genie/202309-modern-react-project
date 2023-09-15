import { useState, useEffect } from 'react';
import MenuCategory from '@/component/MenuCategory';
import CategoryItems from '@/component/CategoryItems';
import mockData from '@/data/mockData';

const ShopMenu = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch 到 data 後將資料設計成兩個 function
    // 1. 取得分類資料 refinedCategory
    // 2. 取得分類下的商品資料 refinedItems
    const refinedCategory = mockData
      .map((item) => item.category)
      ?.filter((item, index, array) => array.indexOf(item) === index);
    setCategory(refinedCategory);

    const refinedItems = mockData.reduce((acc, cur) => {
      const category = cur.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(cur);
      return acc;
    }, {});

    setItems(refinedItems);
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
