import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import cx from 'classnames';
import debounce from 'lodash/debounce';
const Item = ({ data = {} }) => {
  const image = data?.image;
  const title = data?.title;
  const price = data?.price;

  const [count, setCount] = useState(0);

  let isAddBtn = count > 0;

  const handleAddBtnClick = debounce((event) => {
    event.stopPropagation;
    setCount((prev) => prev + 1);
  }, 200);

  const handleRemoveBtnClick = debounce((event) => {
    event.stopPropagation;
    setCount((prev) => prev - 1);
  }, 200);

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

      <div
        className={cx(
          'absolute p-2 top-4 right-4 w-8 h-8 flex items-center justify-center gap-2 bg-black text-white rounded-full  hover:opacity-75 transition-all',
          { 'w-auto justify-between px-2': isAddBtn }
        )}
      >
        {isAddBtn && (
          <>
            <TrashIcon onClick={handleRemoveBtnClick} />
            <div className="text-sm px-2">{count}</div>
          </>
        )}
        <button onClick={handleAddBtnClick}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Item;
