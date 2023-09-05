import Item from '../Item';
const CategoryItems = () => {
  const breakfastItems = [
    {
      image: 'images/1.webp',
      title: '經典鬆餅',
      price: 8.99,
    },
    {
      image: 'images/2.webp',
      title: '班尼迪克蛋',
      price: 10.49,
    },
    {
      image: 'images/3.webp',
      title: '酪梨吐司',
      price: 6.75,
    },
    {
      image: 'images/4.webp',
      title: '法式吐司',
      price: 9.25,
    },
    {
      image: 'images/5.webp',
      title: '芝士煎蛋餅',
      price: 7.99,
    },
    {
      image: 'images/6.webp',
      title: '培根煎蛋',
      price: 8.75,
    },
    {
      image: 'images/7.webp',
      title: '煙燻三文魚貝果',
      price: 11.5,
    },
    {
      image: 'images/8.webp',
      title: '希臘優格芭菲',
      price: 9.99,
    },
    {
      image: 'images/9.webp',
      title: '純素早餐捲',
      price: 7.25,
    },
    {
      image: 'images/10.webp',
      title: '肉桂捲',
      price: 5.49,
    },
    {
      image: 'images/21.webp',
      title: '榛果巧克力薄餅',
      price: 12.99,
    },
    {
      image: 'images/22.webp',
      title: '巴西莓碗',
      price: 9.5,
    },
    {
      image: 'images/23.webp',
      title: '英式早餐',
      price: 11.99,
    },
    {
      image: 'images/24.webp',
      title: '菠菜芝士餡餅',
      price: 7.25,
    },
    {
      image: 'images/25.webp',
      title: '香蕉鬆餅',
      price: 5.99,
    },
    {
      image: 'images/26.webp',
      title: '早餐玉米餅',
      price: 6.49,
    },
  ];
  return (
    <div className="grid grid-cols-4 ">
      {breakfastItems.map((item, index) => (
        <Item key={`${item.title}-${index}`} data={item} />
      ))}
    </div>
  );
};

export default CategoryItems;
