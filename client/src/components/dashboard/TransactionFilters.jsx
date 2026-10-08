import { Search, Filter, RotateCcw, Calendar, Tag, Layers } from "lucide-react";

const categories = [
  "Food",
  "rent",
  "freelance",
  "Salary",
];

function TransactionFilters({
  filters,
  onFilterChange,
  onClear,
}) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">

      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Filter Transactions
            </h3>
            <p className="text-xs text-slate-500">
              Narrow down transactions by text, category, type, or date range
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="
            inline-flex items-center gap-1.5
            px-3.5 py-2
            text-xs font-semibold
            text-slate-600
            bg-slate-100/70
            hover:bg-slate-200/70
            hover:text-slate-900
            rounded-xl
            transition
            cursor-pointer
            self-start sm:self-auto
          "
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Clear Filters
        </button>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Search */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" /> Search
          </label>

          <div className="relative">
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={onFilterChange}
              placeholder="Search title or category..."
              className="
                w-full
                pl-3.5 pr-4 py-2.5
                border border-slate-200
                rounded-xl
                bg-slate-50/60
                text-sm
                text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:bg-white
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> Category
          </label>

          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="
              w-full
              px-3.5 py-2.5
              border border-slate-200
              rounded-xl
              bg-slate-50/60
              text-sm
              text-slate-900
              outline-none
              transition
              focus:bg-white
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
              cursor-pointer
            "
          >
            <option value="">All Categories</option>

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
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Type
          </label>

          <select
            name="type"
            value={filters.type}
            onChange={onFilterChange}
            className="
              w-full
              px-3.5 py-2.5
              border border-slate-200
              rounded-xl
              bg-slate-50/60
              text-sm
              text-slate-900
              outline-none
              transition
              focus:bg-white
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
              cursor-pointer
            "
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* From Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> From Date
          </label>

          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={onFilterChange}
            className="
              w-full
              px-3.5 py-2.5
              border border-slate-200
              rounded-xl
              bg-slate-50/60
              text-sm
              text-slate-900
              outline-none
              transition
              focus:bg-white
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* To Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> To Date
          </label>

          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={onFilterChange}
            className="
              w-full
              px-3.5 py-2.5
              border border-slate-200
              rounded-xl
              bg-slate-50/60
              text-sm
              text-slate-900
              outline-none
              transition
              focus:bg-white
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

      </div>
    </div>
  );
}

export default TransactionFilters;

