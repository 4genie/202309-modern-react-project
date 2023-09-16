import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import cx from 'classnames';
const AddButton = ({ count, onAdd, onRemove }) => {
  const isAdded = count > 0;
  return (
    <div
      className={cx(
        'absolute top-6 right-6 w-8 h-8 flex items-center justify-center gap-2 bg-black text-white rounded-full  hover:opacity-75 transition-all',
        { 'w-auto justify-between px-2': isAdded }
      )}
    >
      {isAdded && (
        <>
          <TrashIcon onClick={onRemove} />
          <div className="text-sm px-2">{count}</div>
        </>
      )}
      <button onClick={onAdd}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default AddButton;
