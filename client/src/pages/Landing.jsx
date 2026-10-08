import { Link } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Wallet,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-extrabold text-xl">
              ₹
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Expense<span className="text-blue-600">Flow</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link to={"/login"}>
              <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition cursor-pointer">
                Login
              </button>
            </Link>

            <Link to={"/signup"}>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-blue-500/25 transition cursor-pointer flex items-center gap-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Simple & Powerful Money Management
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Take full control of <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  your daily expenses.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Track your income, manage daily expenses, understand your spending habits, and stay on top of your financial goals — all from one intuitive dashboard.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:items-center">
                <Link to="/signup">
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer flex items-center justify-center gap-2">
                    Start Tracking for Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                <Link to="/login">
                  <button className="w-full sm:w-auto px-7 py-3.5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl transition shadow-xs cursor-pointer">
                    View Demo Dashboard
                  </button>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free to use
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant setup
                </span>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 overflow-hidden">

                {/* Dashboard Header */}
                <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Total Balance
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                      ₹84,250
                    </h2>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                    ₹
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-5 border-r border-slate-100 bg-emerald-50/30">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <TrendingUp className="w-3.5 h-3.5" /> Income
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-emerald-600 mt-1">
                      + ₹1,20,000
                    </p>
                  </div>

                  <div className="p-5 bg-rose-50/30">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700">
                      <TrendingDown className="w-3.5 h-3.5" /> Expenses
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-rose-600 mt-1">
                      - ₹35,750
                    </p>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-sm text-slate-900">
                      Recent Activity
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                      View details
                    </span>
                  </div>

                  <div className="space-y-3.5">
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
                      title="Netflix Subscription"
                      category="Entertainment"
                      amount="- ₹649"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Monthly Savings
                  </p>
                  <p className="text-base font-bold text-emerald-600">
                    +18.4% growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-slate-200/80 bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto">
              <span className="text-blue-600 font-bold text-xs tracking-wider uppercase px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                Core Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
                Manage your money with confidence.
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg">
                Everything you need to understand where your money goes and make smarter financial decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              <Feature
                icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
                title="Track Expenses"
                description="Record and categorize your daily expenses so you always know where your hard-earned money is spent."
              />

              <Feature
                icon={<Wallet className="w-6 h-6 text-indigo-600" />}
                title="Manage Income"
                description="Keep track of your salary, freelance payments, and multiple income streams effortlessly in one place."
              />

              <Feature
                icon={<PieChart className="w-6 h-6 text-emerald-600" />}
                title="Understand Spending"
                description="Get clear visual breakdowns of your spending categories to optimize savings and cut unneeded costs."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Start managing your expenses today.
              </h2>
              <p className="text-blue-100/90 mt-4 text-base sm:text-lg leading-relaxed">
                Stop wondering where your money went. Start tracking, understand your habits, and reach your financial goals.
              </p>
              <Link to="/signup">
                <button className="mt-8 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl shadow-lg transition cursor-pointer inline-flex items-center gap-2">
                  Create Your Free Account
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              ₹
            </div>
            <span className="font-bold text-slate-800 text-sm">
              ExpenseFlow
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-500">
            © 2026 ExpenseFlow. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Simple • Clear • In Control
          </p>
        </div>
      </footer>
    </div>
  );
}

function Transaction({ title, category, amount, income = false }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition">
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${
            income
              ? "bg-emerald-100/80 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {income ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
        </div>

        <div>
          <p className="font-semibold text-sm text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">{category}</p>
        </div>
      </div>

      <p
        className={`font-bold text-sm ${
          income ? "text-emerald-600" : "text-slate-900"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-7 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-200">
      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mt-5">{title}</h3>

      <p className="text-slate-600 text-sm leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
}

export default App;