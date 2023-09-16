import { useContext, useState } from 'react';
import debounce from 'lodash/debounce';
import AddButton from '@/component/AddButton';
import { ProductContext } from '@/data/context';

const Item = ({ data = {} }) => {
  const image = data?.image;
  const title = data?.title;
  const price = data?.price;

  const { cart, setCart } = useContext(ProductContext);

  const handleAddBtnClick = debounce((event) => {
    event.stopPropagation;
    //   setCount((prev) => prev + 1);
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[data.id]) {
        newCart[data.id] += 1;
      } else {
        newCart[data.id] = 1;
      }
      return newCart;
    });
  }, 200);

  const handleRemoveBtnClick = debounce((event) => {
    event.stopPropagation;
    // setCount((prev) => prev - 1);
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[data.id]) {
        newCart[data.id] -= 1;
      }
      return newCart;
    });
  }, 200);

  const cartCount = cart[data.id] || 0;

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

      <AddButton
        count={cartCount}
        onAdd={handleAddBtnClick}
        onRemove={handleRemoveBtnClick}
      />
    </div>
  );
};

export default Item;
