const categories = [
  "Food",
  "rent",
  "freelance",
  "salary"
];

function TransactionModal({
  isOpen,
  editingTransaction,
  formData,
  formError,
  saving,
  onChange,
  onSubmit,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">

        {/* Header */}

        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-gray-900">
              {editingTransaction
                ? "Edit Transaction"
                : "Add Transaction"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {editingTransaction
                ? "Update transaction details"
                : "Enter your transaction details"}
            </p>

          </div>

          <button
            onClick={onClose}
            disabled={saving}
            className="w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-500 text-xl"
          >
            ×
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={onSubmit}
          className="p-6 space-y-5"
        >

          {/* Error */}

          {formError && (

            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {formError}
            </div>

          )}

          {/* Title */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              placeholder="e.g. Grocery shopping"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Amount */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={onChange}
              placeholder="Enter amount"
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Category */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={onChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
            >

              <option value="">
                Select category
              </option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}

            </select>

          </div>

          {/* Type */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-3">
              Transaction Type
            </label>

            <div className="grid grid-cols-2 gap-3">

              <label
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition ${
                  formData.type === "expense"
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-300"
                }`}
              >

                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={
                    formData.type === "expense"
                  }
                  onChange={onChange}
                  className="accent-red-600"
                />

                Expense

              </label>

              <label
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition ${
                  formData.type === "income"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-300"
                }`}
              >

                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={
                    formData.type === "income"
                  }
                  onChange={onChange}
                  className="accent-green-600"
                />

                Income

              </label>

            </div>

          </div>

          {/* Date */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Buttons */}

          <div className="flex gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="flex-1 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold disabled:bg-blue-400"
            >
              {saving
                ? "Saving..."
                : editingTransaction
                ? "Update Transaction"
                : "Add Transaction"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default TransactionModal;