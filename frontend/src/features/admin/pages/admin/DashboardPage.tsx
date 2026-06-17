import StatsGrid from "../../components/dashboard/StatsGrid.jsx";
import RevenueChart from "../../components/dashboard/RevenueChart.jsx";
import RecentOrdersTable from "../../components/dashboard/RecentOrdersTable";
// import TopProducts from "../../components/dashboard/TopProducts";
// import OrderStatusChart from "../../components/dashboard/OrderStatusChart";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{<RevenueChart />}</div>

        <div>{/* <OrderStatusChart /> */}</div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          <RecentOrdersTable />
          // <TopProducts />
        }
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrdersTable />
        </div>

        <div className="lg:col-span-1">{/* Top Products */}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
