import { useEffect, useState } from "react";
import { getDashboardOverview } from "../../services/adminDashboardService";
import type { DashboardOverview } from "../../types/adminDashboard";
import { useAuth } from "../../../../context/Auth/AuthContext";
import StatsGrid from "../../components/dashboard/StatsGrid";
import RevenueChart from "../../components/dashboard/RevenueChart";
import RecentOrdersTable from "../../components/dashboard/RecentOrdersTable";
import TopProducts from "../../components/dashboard/TopProducts";
import OrderStatusChart from "../../components/dashboard/OrderStatusChart";
import Loading from "../../../../components/ui/Loading";

const PERIOD_OPTIONS = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
];

const DashboardPage = () => {
  const { username } = useAuth();
  const [period, setPeriod] = useState(30);
  const [data, setData] = useState<DashboardOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Bu fonksiyon dashboard verisini backend'den alacak
    const fetchOverview = async () => {
      setIsRefreshing(true);
      try {
        const response = await getDashboardOverview(period);
        if (!cancelled) setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        if (!cancelled) {
          setLoading(false);
          setIsRefreshing(false);
        }
      }
    };

    fetchOverview();
    return () => {
      cancelled = true;
    };
  }, [period]);

  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-textPrimary">
            Good morning, {username ?? "Admin"}
          </h1>
          <p className="mt-1 text-sm text-textSecondary">
            Here's what's happening with your store today.
          </p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(Number(e.target.value))}
          className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-textPrimary"
        >
          {PERIOD_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={`transition-opacity ${isRefreshing ? "opacity-60" : "opacity-100"}`}>
        <StatsGrid summary={data.summary} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={data.monthlyRevenue} />
        </div>
        <div className="lg:col-span-1">
          <OrderStatusChart data={data.orderStatusBreakdown} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrdersTable orders={data.recentOrders} />
        </div>
        <div className="lg:col-span-1">
          <TopProducts products={data.topProducts} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;