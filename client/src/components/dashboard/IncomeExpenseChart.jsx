import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChart3 } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function IncomeExpenseChart({ transactions = [] }) {
  const chartData = useMemo(() => {
    const monthsMap = {};

    const sorted = [...transactions].sort(
      (a, b) => new Date(a.date || 0) - new Date(b.date || 0)
    );

    sorted.forEach((item) => {
      if (!item.date) return;
      const d = new Date(item.date);
      if (isNaN(d.getTime())) return;

      const monthYear = d.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      });

      if (!monthsMap[monthYear]) {
        monthsMap[monthYear] = { income: 0, expense: 0 };
      }

      const amt = Number(item.amount || 0);
      if (item.type === "income") {
        monthsMap[monthYear].income += amt;
      } else if (item.type === "expense") {
        monthsMap[monthYear].expense += amt;
      }
    });

    const labels = Object.keys(monthsMap);
    const incomeData = labels.map((m) => monthsMap[m].income);
    const expenseData = labels.map((m) => monthsMap[m].expense);

    return {
      labels,
      datasets: [
        {
          label: "Income (₹)",
          data: incomeData,
          backgroundColor: "#10b981", // Emerald 500
          borderRadius: 6,
          maxBarThickness: 50,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
        {
          label: "Expense (₹)",
          data: expenseData,
          backgroundColor: "#f43f5e", // Rose 500
          borderRadius: 6,
          maxBarThickness: 50,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
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
            return ` ${context.dataset.label}: ₹${val.toLocaleString("en-IN")}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
      y: {
        border: { dash: [4, 4] },
        grid: { color: "#f1f5f9" },
        ticks: {
          callback: (val) => `₹${val.toLocaleString("en-IN")}`,
          font: { size: 11 },
        },
      },
    },
  };

  const hasData = chartData.labels.length > 0;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <BarChart3 className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Monthly Income vs Expense
          </h3>
          <p className="text-xs text-slate-500">
            Compare monthly earnings against spending
          </p>
        </div>
      </div>

      <div className="relative flex-1 min-h-[260px] flex items-center justify-center">
        {hasData ? (
          <Bar data={chartData} options={options} />
        ) : (
          <div className="text-center text-slate-400 text-xs py-10">
            No monthly data available
          </div>
        )}
      </div>
    </div>
  );
}

export default IncomeExpenseChart;
