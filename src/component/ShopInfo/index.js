import ShopInfoContent from './ShopInfoContent';
const ShopInfo = () => {
  return (
    <div className="mb-4 pl-6">
      <h2 className="mb-2 text-3xl font-bold">非常厲害美食館 信義活力吳興店</h2>
      <div className=" text-sm text-slate-500">
        <ShopInfoContent>
          4.9 (42 評分) • 早餐和早午餐 • $ 詳細資訊
        </ShopInfoContent>
        <ShopInfoContent>30–45 分鐘 • 57TWD 費用</ShopInfoContent>
        <ShopInfoContent>
          在上方輸入地址，即可查看外送及自取預估時間。
        </ShopInfoContent>
        <ShopInfoContent>$ • 早餐和早午餐</ShopInfoContent>
      </div>
    </div>
  );
};

export default ShopInfo;
