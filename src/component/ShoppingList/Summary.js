const Summary = ({ items = {} }) => {
  return (
    <div className="mt-5 space-y-3">
      <div className="text-lg font-bold text-stone-900 mt-10">訂單摘要</div>
      <div className="text-sm opacity-50">{items.length} 項商品</div>
      <div className="space-y-3">
        {items.map((item) => {
          const { id, image, label } = item;
          return (
            <div className="flex items-center gap-4" key={id}>
              <img src={image} alt={label} className="w-10 h-10 rounded-md" />
              <div className="text-sm text-stone-500">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
