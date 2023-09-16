import { ChevronRightIcon } from '@radix-ui/react-icons';
const BreadcrumbContent = ({ last, children }) => {
  const notLastItem = (
    <div className="mr-2 flex items-center hover:opacity-70 hover:underline hover:cursor-pointer">
      {children}
      <ChevronRightIcon className="ml-2" />
    </div>
  );
  const lastItem = (
    <div className="flex items-center text-slate-700">{children}</div>
  );
  return <>{last ? lastItem : notLastItem}</>;
};

export default BreadcrumbContent;
