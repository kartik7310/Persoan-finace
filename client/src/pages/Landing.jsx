import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">₹</span>
            </div>

            <span className="text-xl font-bold tracking-tight">
              ExpenseFlow
            </span>
          </div>

          <div className="flex items-center gap-3">
           <Link to={"/login"}>
            <button className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900">
              Login
            </button>
           </Link>

            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Simple money management
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-950">
                Take control of
                <span className="block text-blue-600">
                  your expenses.
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                Track your income, manage expenses, understand your
                spending habits, and stay on top of your finances —
                all from one simple dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-sm">
                  Start Tracking for Free
                </button>

                <button className="px-7 py-3.5 border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold rounded-lg transition">
                  See How It Works
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <span>✓ Free to use</span>
                <span>✓ No credit card</span>
                <span>✓ Easy to start</span>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/70 overflow-hidden">

                {/* Dashboard Header */}
                <div className="border-b border-gray-100 px-6 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Total Balance
                    </p>

                    <h2 className="text-3xl font-bold mt-1">
                      ₹84,250
                    </h2>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">₹</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="p-6 border-r border-gray-100">
                    <p className="text-sm text-gray-500">
                      Income
                    </p>

                    <p className="text-xl font-bold text-green-600 mt-2">
                      + ₹1,20,000
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500">
                      Expenses
                    </p>

                    <p className="text-xl font-bold text-red-500 mt-2">
                      - ₹35,750
                    </p>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-semibold">
                      Recent Transactions
                    </h3>

                    <span className="text-sm text-blue-600">
                      View all
                    </span>
                  </div>

                  <div className="space-y-4">

                    <Transaction
                      title="Groceries"
                      category="Food"
                      amount="- ₹2,450"
                    />

                    <Transaction
                      title="Salary"
                      category="Income"
                      amount="+ ₹80,000"
                      income
                    />

                    <Transaction
                      title="Electricity Bill"
                      category="Bills"
                      amount="- ₹1,850"
                    />

                    <Transaction
                      title="Netflix"
                      category="Entertainment"
                      amount="- ₹649"
                    />

                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl shadow-lg px-5 py-4">
                <p className="text-xs text-gray-500">
                  Monthly savings
                </p>

                <p className="text-xl font-bold text-green-600 mt-1">
                  +18.4%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-blue-600 font-semibold text-sm">
                EVERYTHING YOU NEED
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Manage your money without the complexity.
              </h2>

              <p className="text-gray-600 mt-4">
                Everything you need to understand where your money
                goes and make better financial decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <Feature
                icon="📊"
                title="Track Expenses"
                description="Record and categorize your daily expenses so you always know where your money is going."
              />

              <Feature
                icon="💰"
                title="Manage Income"
                description="Keep track of your salary, freelance income, and other sources of money in one place."
              />

              <Feature
                icon="📈"
                title="Understand Spending"
                description="Get a clear view of your spending patterns and make smarter financial decisions."
              />

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Start managing your expenses today.
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stop wondering where your money went. Start tracking,
            understand your spending, and take control.
          </p>

          <button className="mt-8 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Create Your Free Account
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © 2026 ExpenseFlow. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Simple. Clear. In control.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Transaction({ title, category, amount, income = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          {income ? "↓" : "↑"}
        </div>

        <div>
          <p className="font-medium text-sm">
            {title}
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            {category}
          </p>
        </div>
      </div>

      <p
        className={`font-semibold text-sm ${
          income ? "text-green-600" : "text-gray-900"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
      <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mt-5">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-6 mt-2">
        {description}
      </p>
    </div>
  );
}

export default App;