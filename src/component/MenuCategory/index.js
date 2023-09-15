import MenuItem from '@/component/MenuCategory/MenuItem';
const MenuCategory = ({ data, active, onClick }) => {
  return (
    <div className="no-scrollbar max-h-screen overflow-auto">
      <h3 className="mb-2 text-lg font-bold underline">最熱門</h3>
      <ul className="text-base">
        {data?.map((item, index) => (
          <MenuItem
            key={`${item}-${index}`}
            label={item}
            active={active === index}
            onClick={() => onClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
