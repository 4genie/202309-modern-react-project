import { PlusIcon } from '@radix-ui/react-icons';

const MoreAction = () => {
  return (
    <div className="mb-8 flex gap-4 pl-6">
      <button className="rounded-full bg-slate-300 p-2 px-4 hover:opacity-90 transition-opacity">
        查看類似商品
      </button>
      <button className="flex items-center rounded-full bg-slate-300 p-2 px-4 hover:opacity-90 transition-opacity">
        <PlusIcon className="mr-1" />
        團購訂單
      </button>
    </div>
  );
};

export default MoreAction;
