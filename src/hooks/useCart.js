import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '@/data/slice/cartSlice';

const useCart = (id) => {
  const count = useSelector((state) => state.cart?.[id]);

  const dispatch = useDispatch();
  const Add = (id) => dispatch(add({ id }));
  const Remove = () => dispatch(remove({ id }));

  return {
    count,
    Add,
    Remove,
  };
};

export default useCart;
