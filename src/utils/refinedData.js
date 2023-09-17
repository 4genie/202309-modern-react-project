// 1. 取得分類資料 refinedCategory
export const refinedCategory = (data) => {
  if (!data) return;
  return data
    .map((item) => item.category)
    ?.filter((item, index, array) => array.indexOf(item) === index);
};

// 2. 取得分類下的商品資料 refinedItems
export const refinedItems = (data) => {
  if (!data) return;
  return data.reduce((acc, cur) => {
    const category = cur.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cur);
    return acc;
  }, {});
};
