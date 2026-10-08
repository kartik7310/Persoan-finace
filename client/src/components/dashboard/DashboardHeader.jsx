import { useNavigate } from "react-router-dom";

function DashboardHeader({
  onAddTransaction,
  onDownloadCSV,
  downloading,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* BRAND */}

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              ExpenseFlow
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Personal Finance Dashboard
            </p>
          </div>

          {/* ACTIONS */}

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">

            {/* DOWNLOAD CSV */}

            <button
              type="button"
              onClick={onDownloadCSV}
              disabled={downloading}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-2.5
                border
                border-green-200
                rounded-lg
                text-sm
                font-semibold
                text-green-700
                bg-green-50
                hover:bg-green-100
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
                whitespace-nowrap
              "
            >
              {downloading ? (
                <>
                  <span className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <span className="text-base">
                    ↓
                  </span>
                  Download CSV
                </>
              )}
            </button>

            {/* ADD TRANSACTION */}

            <button
              type="button"
              onClick={onAddTransaction}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-4
                py-2.5
                rounded-lg
                font-semibold
                transition
                whitespace-nowrap
              "
            >
              <span className="text-lg leading-none">
                +
              </span>

              Add Transaction
            </button>

            {/* LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-2.5
                border
                border-gray-300
                rounded-lg
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
                transition
                whitespace-nowrap
              "
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;