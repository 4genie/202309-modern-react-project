import { ChevronRightIcon } from '@radix-ui/react-icons';

const Breadcrumb = () => {
  return (
    <div className="mb-4 flex pl-8 text-sm text-slate-400">
      <div className="mr-2  flex  items-center">
        台灣
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="mr-2 flex  items-center">
        台北市
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="mr-2  flex items-center ">
        台北
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="mr-2  flex items-center ">
        文山區
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center text-slate-700">非常厲害美食館</div>
    </div>
  );
};

export default Breadcrumb;
