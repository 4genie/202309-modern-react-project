const MenuCategory = () => {
  const categoryItems = [
    '鬆餅',
    '蛋類',
    '吐司',
    '三文魚',
    '優格',
    '捲',
    '麵包',
    '飲料',
    '穀物',
    '小食',
    '果碗',
    '早餐',
    '餡餅',
    '餅',
    '甜點',
    '三明治',
    '瑪芬',
  ];
  return (
    <div className="no-scrollbar max-h-screen overflow-auto">
      <h3 className="mb-2 text-lg font-bold underline">最熱門</h3>
      <ul className="text-base">
        {categoryItems.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="mb-2 text-slate-500 
          transition-opacity hover:opacity-75"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
