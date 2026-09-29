import api from "../../../api/axios";
import type { DashboardOverview } from "../types/adminDashboard";

export const getDashboardOverview = (period: number) =>
  api.get<DashboardOverview>("/admin/dashboard" , { params: { period } });
