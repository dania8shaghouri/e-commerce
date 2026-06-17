import StatsCard from "../../components/dashboard/StatsGrid.jsx";
// import RevenueChart from "../../components/dashboard/RevenueChart";
// import RecentOrdersTable from "../../components/dashboard/RecentOrdersTable";
// import TopProducts from "../../components/dashboard/TopProducts";
// import OrderStatusChart from "../../components/dashboard/OrderStatusChart";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <StatsCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{/* <RevenueChart /> */}</div>

        <div>{/* <OrderStatusChart /> */}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <RecentOrdersTable />
        <TopProducts /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
