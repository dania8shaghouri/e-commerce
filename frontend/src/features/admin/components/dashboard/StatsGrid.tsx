import StatsCard from "./StatsCard";
import { FiDollarSign, FiShoppingCart, FiUsers, FiPackage } from "react-icons/fi";
import type { DashboardSummary } from "../../types/adminDashboard";

interface Props {
  summary: DashboardSummary;
}

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const formatNumber = (value: number) => value.toLocaleString("en-US");

const StatsGrid = ({ summary }: Props) => {
  const stats = [
    {
      title: "Revenue",
      value: formatCurrency(summary.revenue.current),
      previousValue: formatCurrency(summary.revenue.previous),
      changePct: summary.revenue.changePct,
      icon: FiDollarSign,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
    {
      title: "Orders",
      value: formatNumber(summary.orders.current),
      previousValue: formatNumber(summary.orders.previous),
      changePct: summary.orders.changePct,
      icon: FiShoppingCart,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      title: "New Customers",
      value: formatNumber(summary.customers.current),
      previousValue: formatNumber(summary.customers.previous),
      changePct: summary.customers.changePct,
      icon: FiUsers,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-50",
    },
    {
      title: "New Products",
      value: formatNumber(summary.products.current),
      previousValue: formatNumber(summary.products.previous),
      changePct: summary.products.changePct,
      icon: FiPackage,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default StatsGrid;