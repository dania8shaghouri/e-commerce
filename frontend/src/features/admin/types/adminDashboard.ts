import type { AdminOrder, OrderStatus } from "./adminOrder";

export interface PeriodMetric {
  current: number;
  previous: number;
  changePct: number | null;
}

export interface DashboardSummary {
  revenue: PeriodMetric;
  orders: PeriodMetric;
  customers: PeriodMetric;
  products: PeriodMetric;
}

export interface MonthlyRevenuePoint {
  month: string;
  revenue: number;
}

export interface OrderStatusBreakdownItem {
  status: OrderStatus;
  count: number;
  percentage: number;
}

export interface TopProduct {
  title: string;
  image: string;
  unitsSold: number;
  revenue: number;
}

export interface DashboardOverview {
  summary: DashboardSummary;
  monthlyRevenue: MonthlyRevenuePoint[];
  orderStatusBreakdown: OrderStatusBreakdownItem[];
  topProducts: TopProduct[];
  recentOrders: AdminOrder[];
}