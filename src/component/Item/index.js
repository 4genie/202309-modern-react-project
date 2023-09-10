import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
const Item = ({ data = {} }) => {
  const image = data?.image;
  const title = data?.title;
  const price = data?.price;

  const [count, setCount] = useState(0);

  let isAddBtn = count > 0;

  const handleAddBtnClick = (event) => {
    event.stopPropagation;
    setCount((prev) => prev + 1);
  };

  const handlePlusBtnClick = (event) => {
    event.stopPropagation;
    setCount((prev) => prev + 1);
  };
  const handleRemoveBtnClick = (event) => {
    event.stopPropagation;
    setCount((prev) => prev - 1);
  };

  return (
    <div className="relative mb-1  cursor-pointer bg-white p-4 transition-shadow hover:drop-shadow-lg">
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

      <div className="absolute p-2 top-4 right-4 flex items-center gap-2 bg-black text-white rounded-full">
        {!isAddBtn && (
          <button onClick={handleAddBtnClick}>
            <PlusIcon className="w-6 h-6" />
          </button>
        )}

        {isAddBtn && (
          <>
            <button onClick={handleRemoveBtnClick}>
              <TrashIcon />
            </button>

            <div>{count}</div>
            <button onClick={handlePlusBtnClick}>
              <PlusIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
