import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PieChart } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#f43f5e", // Rose
];

function CategoryChart({ transactions = [] }) {
  const chartData = useMemo(() => {
    const categoriesMap = {};

    transactions.forEach((item) => {
      const cat = item.category ? item.category.trim() : "Uncategorized";
      const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1);
      const val = Number(item.amount || 0);

      if (!categoriesMap[formattedCat]) {
        categoriesMap[formattedCat] = 0;
      }
      categoriesMap[formattedCat] += val;
    });

    const labels = Object.keys(categoriesMap);
    const data = Object.values(categoriesMap);

    return {
      labels,
      datasets: [
        {
          label: "Amount (₹)",
          data,
          backgroundColor: COLORS.slice(0, Math.max(labels.length, 1)),
          borderWidth: 2,
          borderColor: "#ffffff",
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 16,
          font: {
            size: 11,
            weight: "500",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const val = context.raw || 0;
            return ` ₹${val.toLocaleString("en-IN")}`;
          },
        },
      },
    },
  };

  const hasData = chartData.labels.length > 0;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <PieChart className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Category Breakdown
          </h3>
          <p className="text-xs text-slate-500">
            Spending & Income distribution by category
          </p>
        </div>
      </div>

      <div className="relative flex-1 min-h-[260px] flex items-center justify-center">
        {hasData ? (
          <Pie data={chartData} options={options} />
        ) : (
          <div className="text-center text-slate-400 text-xs py-10">
            No category data available
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryChart;
