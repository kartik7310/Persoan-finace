import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

function SummaryCards({
  income,
  expense,
  balance,
}) {
  const formatMoney = (amount) => {
    return Number(amount || 0).toLocaleString("en-IN");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

      {/* Income */}
      <div className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-emerald-200/80 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Income
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              ₹{formatMoney(income)}
            </h3>

            <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Money received</span>
            </div>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Expense */}
      <div className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-rose-200/80 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Expenses
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              ₹{formatMoney(expense)}
            </h3>

            <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-rose-600">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Money spent</span>
            </div>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-100 group-hover:scale-105 transition-all">
            <TrendingDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Net Balance
            </p>

            <h3
              className={`text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight ${
                balance >= 0
                  ? "text-slate-900"
                  : "text-rose-600"
              }`}
            >
              ₹{formatMoney(balance)}
            </h3>

            <div
              className={`flex items-center gap-1 mt-2 text-xs font-semibold ${
                balance >= 0
                  ? "text-blue-600"
                  : "text-rose-600"
              }`}
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>
                {balance >= 0
                  ? "Available balance"
                  : "Negative balance"}
              </span>
            </div>
          </div>

          <div
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-all ${
              balance >= 0
                ? "bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-100"
                : "bg-rose-50 border-rose-100 text-rose-600 group-hover:bg-rose-100"
            }`}
          >
            ₹
          </div>
        </div>
      </div>

    </div>
  );
}

export default SummaryCards;

