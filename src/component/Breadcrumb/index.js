import BreadcrumbContent from './BreadcrumbContent';

const Breadcrumb = () => {
  return (
    <div className="mb-4 flex pl-8 text-sm text-slate-400">
      <BreadcrumbContent>台灣</BreadcrumbContent>
      <BreadcrumbContent>台北市</BreadcrumbContent>
      <BreadcrumbContent>文山區</BreadcrumbContent>
      <BreadcrumbContent last={true}>非常厲害美食館</BreadcrumbContent>
    </div>
  );
};

export default Breadcrumb;
