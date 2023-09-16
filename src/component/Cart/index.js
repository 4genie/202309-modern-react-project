import { BackpackIcon } from '@radix-ui/react-icons';

const Cart = ({ count }) => {
  return (
    <div className="grid place-items-center px-4">
      <div className="flex items-center gap-2 rounded-full  bg-black p-2 px-4 text-white">
        <div>
          <BackpackIcon />
        </div>
        <div className="text-sm">購物車 •</div>
        <div className="text-sm">{count}</div>
      </div>
    </div>
  );
};

export default Cart;
