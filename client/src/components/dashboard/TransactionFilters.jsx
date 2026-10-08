// const categories = [
//   "Food",
//   "rent",
//   "freelance",
//   "Salary",

// ];

// function TransactionFilters({
//   filters,
//   onFilterChange,
//   onClear,
// }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">

//       <div className="flex flex-col lg:flex-row lg:items-end gap-4">

//         {/* Search */}

//         <div className="flex-1">

//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Search
//           </label>

//           <input
//             type="text"
//             name="search"
//             value={filters.search}
//             onChange={onFilterChange}
//             placeholder="Search transactions..."
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//           />

//         </div>

//         {/* Category */}

//         <div className="flex-1">

//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Category
//           </label>

//           <select
//             name="category"
//             value={filters.category}
//             onChange={onFilterChange}
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
//           >

//             <option value="">
//               All Categories
//             </option>

//             {categories.map((category) => (
//               <option
//                 key={category}
//                 value={category}
//               >
//                 {category}
//               </option>
//             ))}

//           </select>

//         </div>

//         {/* Type */}

//         <div className="flex-1">

//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Type
//           </label>

//           <select
//             name="type"
//             value={filters.type}
//             onChange={onFilterChange}
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
//           >

//             <option value="">
//               All Types
//             </option>

//             <option value="income">
//               Income
//             </option>

//             <option value="expense">
//               Expense
//             </option>

//           </select>

//         </div>

//         {/* Start Date */}

//         <div className="flex-1">

//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             From
//           </label>

//           <input
//             type="date"
//             name="startDate"
//             value={filters.startDate}
//             onChange={onFilterChange}
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
//           />

//         </div>

//         {/* End Date */}

//         <div className="flex-1">

//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             To
//           </label>

//           <input
//             type="date"
//             name="endDate"
//             value={filters.endDate}
//             onChange={onFilterChange}
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
//           />

//         </div>

//         {/* Clear */}

//         <button
//           onClick={onClear}
//           className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 whitespace-nowrap"
//         >
//           Clear
//         </button>

//       </div>

//     </div>
//   );
// }

// export default TransactionFilters;

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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">

      {/* Filter Header */}

      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Filter Transactions
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Search and filter your transactions
          </p>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="
            inline-flex items-center gap-2
            px-3.5 py-2
            text-sm font-medium
            text-gray-600
            border border-gray-200
            rounded-lg
            hover:bg-gray-50
            hover:text-gray-900
            transition
          "
        >
          <span className="text-base">
            ↻
          </span>

          Clear Filters
        </button>
      </div>

      {/* Filters */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Search */}

        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              ⌕
            </span>

            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={onFilterChange}
              placeholder="Search transactions..."
              className="
                w-full
                pl-9 pr-4 py-2.5
                border border-gray-200
                rounded-lg
                bg-gray-50
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:bg-white
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-50
              "
            />
          </div>
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="
              w-full
              px-4 py-2.5
              border border-gray-200
              rounded-lg
              bg-gray-50
              text-sm
              text-gray-700
              outline-none
              transition
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-50
            "
          >
            <option value="">
              All Categories
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transaction Type
          </label>

          <select
            name="type"
            value={filters.type}
            onChange={onFilterChange}
            className="
              w-full
              px-4 py-2.5
              border border-gray-200
              rounded-lg
              bg-gray-50
              text-sm
              text-gray-700
              outline-none
              transition
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-50
            "
          >
            <option value="">
              All Types
            </option>

            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>
          </select>
        </div>

        {/* From */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>

          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={onFilterChange}
            className="
              w-full
              px-4 py-2.5
              border border-gray-200
              rounded-lg
              bg-gray-50
              text-sm
              text-gray-700
              outline-none
              transition
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-50
            "
          />
        </div>

        {/* To */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>

          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={onFilterChange}
            className="
              w-full
              px-4 py-2.5
              border border-gray-200
              rounded-lg
              bg-gray-50
              text-sm
              text-gray-700
              outline-none
              transition
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-50
            "
          />
        </div>

      </div>
    </div>
  );
}

export default TransactionFilters;

