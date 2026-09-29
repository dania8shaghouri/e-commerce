import type { IconType } from "react-icons";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

interface StatsCardProps {
  title: string;
  value: string;
  previousValue: string;
  changePct: number | null;
  icon: IconType;
  iconColor: string;
  iconBg: string;
}

const trendColor = {
  up: "text-green-500",
  down: "text-danger",
  neutral: "text-textSecondary",
} as const;

const StatsCard = ({
  title,
  value,
  previousValue,
  changePct,
  icon: Icon,
  iconColor,
  iconBg,
}: StatsCardProps) => {
  const trend =
    changePct === null || changePct === 0 ? "neutral" : changePct > 0 ? "up" : "down";

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 min-w-0">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
          <Icon size={22} className={iconColor} />
        </div>

        <div className="flex flex-col min-w-0">
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold leading-tight">{value}</h3>

          <span className={`flex items-center gap-1 text-sm font-medium ${trendColor[trend]}`}>
            {trend === "up" && <FiArrowUp size={14} />}
            {trend === "down" && <FiArrowDown size={14} />}
            {changePct === null
              ? "No previous data"
              : `${Math.abs(changePct).toFixed(1)}% vs previous period`}
          </span>

          <span className="text-xs text-textSecondary">Previous period: {previousValue}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;