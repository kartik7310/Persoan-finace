import { X, Loader2, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !saving) {
          onClose();
        }
      }}
    >
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden transform transition-all">

        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {editingTransaction ? "Edit Transaction" : "Add Transaction"}
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {editingTransaction
                ? "Update your transaction details below"
                : "Enter the details for your new transaction"}
            </p>
          </div>

          <button
            onClick={onClose}
            disabled={saving}
            className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition disabled:opacity-50 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="p-6 space-y-4"
        >

          {/* Form Error Alert */}
          {formError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Transaction Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              placeholder="e.g. Grocery Shopping"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={onChange}
              placeholder="0.00"
              min="1"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 font-semibold"
            />
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 cursor-pointer"
            >
              <option value="">Select category</option>
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

          {/* Type Segmented Radio Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Transaction Type
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer transition font-semibold text-xs ${
                  formData.type === "expense"
                    ? "border-rose-300 bg-rose-50 text-rose-700 shadow-xs"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={formData.type === "expense"}
                  onChange={onChange}
                  className="sr-only"
                />
                <ArrowDownRight className="w-4 h-4 text-rose-600" />
                Expense
              </label>

              <label
                className={`flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer transition font-semibold text-xs ${
                  formData.type === "income"
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700 shadow-xs"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={formData.type === "income"}
                  onChange={onChange}
                  className="sr-only"
                />
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                Income
              </label>
            </div>
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="flex-1 py-3 border border-slate-200 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold text-xs sm:text-sm transition shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : editingTransaction ? (
                "Update Transaction"
              ) : (
                "Add Transaction"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default TransactionModal;