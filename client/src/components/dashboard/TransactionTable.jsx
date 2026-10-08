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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Transactions
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {totalTransactions} total transactions
          </p>
        </div>

        <button
          onClick={onRefresh}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Refresh
        </button>

      </div>

      {/* Loading */}

      {loading && (

        <div className="p-16 text-center">

          <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />

          <p className="text-gray-500 mt-4">
            Loading transactions...
          </p>

        </div>

      )}

      {/* Empty */}

      {!loading && transactions.length === 0 && (

        <div className="p-16 text-center">

          <div className="text-5xl mb-4">
            ₹
          </div>

          <h3 className="text-lg font-semibold text-gray-900">
            No transactions found
          </h3>

          <p className="text-gray-500 mt-2">
            Add a transaction or change your filters.
          </p>

          <button
            onClick={onAdd}
            className="mt-5 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700"
          >
            Add Transaction
          </button>

        </div>

      )}

      {/* Table */}

      {!loading && transactions.length > 0 && (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b border-gray-200">

              <tr>

                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Transaction
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Type
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Amount
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {transactions.map((transaction) => (

                <tr
                  key={transaction._id}
                  className="hover:bg-gray-50 transition"
                >

                  {/* Title */}

                  <td className="px-6 py-4">

                    <p className="font-semibold text-gray-900">
                      {transaction.title}
                    </p>

                  </td>

                  {/* Category */}

                  <td className="px-6 py-4">

                    <span className="px-2.5 py-1 bg-gray-100 rounded-md text-sm text-gray-700">
                      {transaction.category}
                    </span>

                  </td>

                  {/* Type */}

                  <td className="px-6 py-4">

                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                        transaction.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.type === "income"
                        ? "Income"
                        : "Expense"}
                    </span>

                  </td>

                  {/* Date */}

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(transaction.date)}
                  </td>

                  {/* Amount */}

                  <td
                    className={`px-6 py-4 text-right font-bold ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "income"
                      ? "+"
                      : "-"}
                    ₹{formatMoney(transaction.amount)}
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          onEdit(transaction)
                        }
                        className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          onDelete(transaction._id)
                        }
                        className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default TransactionTable;