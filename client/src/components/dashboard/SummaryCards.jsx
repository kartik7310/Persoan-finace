
function SummaryCards({
  income,
  expense,
  balance,
}) {
  const formatMoney = (amount) => {
    return Number(amount || 0).toLocaleString("en-IN");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

      {/* Income */}

      <div className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-gray-500">
              Total Income
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">
              ₹{formatMoney(income)}
            </h3>

            <p className="text-xs text-green-600 font-medium mt-2">
              Money received
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 text-2xl font-bold group-hover:bg-green-100 transition">
            ↑
          </div>

        </div>

      </div>

      {/* Expense */}

      <div className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-gray-500">
              Total Expense
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">
              ₹{formatMoney(expense)}
            </h3>

            <p className="text-xs text-red-600 font-medium mt-2">
              Money spent
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 text-2xl font-bold group-hover:bg-red-100 transition">
            ↓
          </div>

        </div>

      </div>

      {/* Balance */}

      <div className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-gray-500">
              Balance
            </p>

            <h3
              className={`text-3xl font-bold mt-2 tracking-tight ${
                balance >= 0
                  ? "text-gray-900"
                  : "text-red-600"
              }`}
            >
              ₹{formatMoney(balance)}
            </h3>

            <p
              className={`text-xs font-medium mt-2 ${
                balance >= 0
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {balance >= 0
                ? "Available balance"
                : "Negative balance"}
            </p>
          </div>

          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition ${
              balance >= 0
                ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                : "bg-red-50 text-red-600 group-hover:bg-red-100"
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

