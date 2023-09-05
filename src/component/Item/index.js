const Item = ({ data }) => {
  const image = data?.image;
  const title = data?.title;
  const price = data?.price;

  return (
    <div className="mb-1  cursor-pointer bg-white p-4 transition-shadow hover:drop-shadow-lg">
      <div className=" relative flex aspect-video items-center overflow-hidden">
        <img src={image} alt={title} />

        {/*  sold out UI */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-40">
          <p className="rounded-full bg-white p-4 text-sm font-bold text-stone-950">
            Sold Out
          </p>
        </div> */}
      </div>

      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-slate-400">${price}</p>
      </div>
    </div>
  );
};

export default Item;
