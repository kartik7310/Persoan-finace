import { RefreshCw, Plus, Pencil, Trash2, Receipt, ArrowUpRight, ArrowDownRight, Loader2 } from "lucide-react";

function TransactionTable({
  transactions,
  loading,
  totalTransactions,
  onEdit,
  onDelete,
  onAdd,
  onRefresh,
}) {
  const formatMoney = (amount) => {
    return Number(amount || 0).toLocaleString("en-IN");
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">

      {/* Table Top Bar */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Recent Transactions
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Showing {transactions.length} of {totalTransactions} total entries
          </p>
        </div>

        <button
          onClick={onRefresh}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/70 px-3 py-1.5 rounded-lg transition cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="p-16 text-center">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
          <p className="text-slate-500 text-sm font-medium mt-3">
            Loading transactions...
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && transactions.length === 0 && (
        <div className="p-16 text-center max-w-sm mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mx-auto mb-4">
            <Receipt className="w-7 h-7" />
          </div>

          <h3 className="text-base font-bold text-slate-900">
            No transactions found
          </h3>

          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            There are no transactions matching your filter criteria, or you haven't added any yet.
          </p>

          <button
            onClick={onAdd}
            className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer shadow-sm shadow-blue-500/20"
          >
            <Plus className="w-4 h-4" />
            Add First Transaction
          </button>
        </div>
      )}

      {/* Table Data */}
      {!loading && transactions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-3.5">Title</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Type</th>
                <th className="px-6 py-3.5">Date</th>
                <th className="px-6 py-3.5 text-right">Amount</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              {transactions.map((transaction) => {
                const isIncome = transaction.type === "income";

                return (
                  <tr
                    key={transaction._id}
                    className="hover:bg-slate-50/60 transition-colors group"
                  >
                    {/* Title */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isIncome
                              ? "bg-emerald-100/80 text-emerald-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {isIncome ? (
                            <ArrowUpRight className="w-4 h-4" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-semibold text-slate-900">
                          {transaction.title}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-semibold border border-slate-200/60 capitalize">
                        {transaction.category}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          isIncome
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-rose-50 text-rose-700 border border-rose-200/60"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isIncome ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                        />
                        {isIncome ? "Income" : "Expense"}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-xs text-slate-500 font-medium">
                      {formatDate(transaction.date)}
                    </td>

                    {/* Amount */}
                    <td
                      className={`px-6 py-4 text-right font-extrabold text-sm ${
                        isIncome ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {isIncome ? "+" : "-"} ₹{formatMoney(transaction.amount)}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onEdit(transaction)}
                          className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                          title="Edit transaction"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => onDelete(transaction._id)}
                          className="p-1.5 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                          title="Delete transaction"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransactionTable;