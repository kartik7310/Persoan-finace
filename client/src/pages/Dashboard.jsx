import { useEffect, useMemo, useState } from "react";
import { apiRequest } from "../config/api";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import SummaryCards from "../components/dashboard/SummaryCards";
import TransactionFilters from "../components/dashboard/TransactionFilters";
import TransactionTable from "../components/dashboard/TransactionTable";
import Pagination from "../components/dashboard/Pagination";
import TransactionModal from "../components/dashboard/TransactionModal";

const initialForm = {
  title: "",
  amount: "",
  category: "",
  type: "expense",
  date: new Date().toISOString().split("T")[0],
};

function Dashboard() {
  

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [downloading, setDownloading] = useState(false);


  // FILTERS


  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: "",
    startDate: "",
    endDate: "",
  });


  // PAGINATION


  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10,
    totalTransactions: 0,
    totalPages: 1,
  });

  
  // MODAL
  

  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState(null);


  // FORM


  const [formData, setFormData] = useState(initialForm);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  // GET TRANSACTIONS
  

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();

      params.append("page", page);
      params.append("limit", 10);

      if (filters.type) {
        params.append("type", filters.type);
      }

      if (filters.category) {
        params.append("category", filters.category);
      }

      if (filters.startDate) {
        params.append("startDate", filters.startDate);
      }

      if (filters.endDate) {
        params.append("endDate", filters.endDate);
      }

      const data = await apiRequest(
        `/transactions?${params.toString()}`
      );

      setTransactions(data.transactions || []);

      setPagination(
        data.pagination || {
          currentPage: 1,
          limit: 10,
          totalTransactions: 0,
          totalPages: 1,
        }
      );
    } catch (err) {
      console.error(err);

      setError(
        err.message || "Failed to load transactions"
      );
    } finally {
      setLoading(false);
    }
  };

  // FETCH WHEN FILTER/PAGE CHANGES
  

  useEffect(() => {
    fetchTransactions();
  }, [
    page,
    filters.category,
    filters.type,
    filters.startDate,
    filters.endDate,
  ]);

  // ==============================
  // FORM CHANGE
  // ==============================

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // FILTER CHANGE
  // ==============================

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setPage(1);

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // CLEAR FILTERS


  const clearFilters = () => {
    setPage(1);

    setFilters({
      search: "",
      category: "",
      type: "",
      startDate: "",
      endDate: "",
    });
  };

  // OPEN ADD MODAL
 
const handleDownloadCSV = async () => {
  try {
    setDownloading(true);

    // Get ALL transactions
    const data = await apiRequest(
      "/transactions?limit=100000&page=1"
    );

    const transactions = data.transactions || [];

    if (transactions.length === 0) {
      alert("No transactions found.");
      return;
    }

    // CSV header
    const headers = [
      "Title",
      "Amount",
      "Category",
      "Type",
      "Date",
    ];

    // Convert transactions to CSV rows
    const rows = transactions.map((transaction) => [
      transaction.title || "",
      transaction.amount || 0,
      transaction.category || "",
      transaction.type || "",
      transaction.date
        ? new Date(transaction.date).toLocaleDateString("en-IN")
        : "",
    ]);

    // Create CSV
    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => {
            const text = String(value);
            return `"${text.replace(/"/g, '""')}"`;
          })
          .join(",")
      )
      .join("\n");

    // Create file
    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    // Create download URL
    const url = URL.createObjectURL(blob);

    // Create temporary link
    const link = document.createElement("a");

    link.href = url;
    link.download = "expenseflow-transactions.csv";

    document.body.appendChild(link);

    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

  } catch (err) {
    console.error("CSV download error:", err);

    alert(
      err.message || "Failed to download CSV"
    );
  } finally {
    setDownloading(false);
  }
};

  const openAddModal = () => {
    setEditingTransaction(null);

    setFormData({
      ...initialForm,
      date: new Date().toISOString().split("T")[0],
    });

    setFormError("");
    setShowModal(true);
  };


  // OPEN EDIT MODAL
  

  const openEditModal = (transaction) => {
    setEditingTransaction(transaction);

    setFormData({
      title: transaction.title || "",
      amount: transaction.amount || "",
      category: transaction.category || "",
      type: transaction.type || "expense",
      date: transaction.date
        ? transaction.date.split("T")[0]
        : "",
    });

    setFormError("");
    setShowModal(true);
  };

  
  // CLOSE MODAL
  

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingTransaction(null);
    setFormData(initialForm);
    setFormError("");
  };

  
  // VALIDATE FORM
  

  const validateForm = () => {
    if (!formData.title.trim()) {
      return "Title is required";
    }

    if (!formData.amount) {
      return "Amount is required";
    }

    if (Number(formData.amount) <= 0) {
      return "Amount must be greater than 0";
    }

    if (!formData.category) {
      return "Please select a category";
    }

    if (!formData.type) {
      return "Please select transaction type";
    }

    if (!formData.date) {
      return "Date is required";
    }

    return "";
  };

  
  // CREATE / UPDATE
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setFormError(validationError);
      return;
    }

    try {
      setSaving(true);
      setFormError("");

      const payload = {
        title: formData.title.trim(),
        amount: Number(formData.amount),
        category: formData.category,
        type: formData.type,
        date: formData.date,
      };

      
      // UPDATE
      

      if (editingTransaction) {
        const data = await apiRequest(
          `/transactions/${editingTransaction._id}`,
          {
            method: "PUT",
            body: JSON.stringify(payload),
          }
        );

        setTransactions((prev) =>
          prev.map((transaction) =>
            transaction._id === editingTransaction._id
              ? data.transaction
              : transaction
          )
        );
      }

    
      // CREATE
    

      else {
        const data = await apiRequest(
          "/transactions",
          {
            method: "POST",
            body: JSON.stringify(payload),
          }
        );

        setTransactions((prev) => [
          data.transaction,
          ...prev,
        ]);
      }

      closeModal();
    } catch (err) {
      console.error(err);

      setFormError(
        err.message || "Failed to save transaction"
      );
    } finally {
      setSaving(false);
    }
  };


  // DELETE


  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    try {
      await apiRequest(`/transactions/${id}`, {
        method: "DELETE",
      });

      setTransactions((prev) =>
        prev.filter(
          (transaction) => transaction._id !== id
        )
      );

      // If last transaction on current page was deleted
      if (transactions.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error(err);

      alert(
        err.message || "Failed to delete transaction"
      );
    }
  };

 
  // SEARCH


  const filteredTransactions = useMemo(() => {
    if (!filters.search.trim()) {
      return transactions;
    }

    const search = filters.search.toLowerCase();

    return transactions.filter(
      (transaction) =>
        transaction.title
          ?.toLowerCase()
          .includes(search) ||
        transaction.category
          ?.toLowerCase()
          .includes(search)
    );
  }, [transactions, filters.search]);

  
  // SUMMARY
  

  const income = useMemo(() => {
    return filteredTransactions
      .filter(
        (transaction) => transaction.type === "income"
      )
      .reduce(
        (total, transaction) =>
          total + Number(transaction.amount),
        0
      );
  }, [filteredTransactions]);

  const expense = useMemo(() => {
    return filteredTransactions
      .filter(
        (transaction) => transaction.type === "expense"
      )
      .reduce(
        (total, transaction) =>
          total + Number(transaction.amount),
        0
      );
  }, [filteredTransactions]);

  const balance = income - expense;


  // UI
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}

      <DashboardHeader
        onAddTransaction={openAddModal}
         onDownloadCSV={handleDownloadCSV}
           downloading={downloading}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* PAGE TITLE */}

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="text-gray-500 mt-1">
            Track your income, expenses and balance.
          </p>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        {/* SUMMARY */}

        <SummaryCards
          income={income}
          expense={expense}
          balance={balance}
        />

        {/* FILTERS */}

        <TransactionFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={clearFilters}
        />

        {/* TABLE */}

        <TransactionTable
          transactions={filteredTransactions}
          loading={loading}
          totalTransactions={
            pagination.totalTransactions
          }
          onEdit={openEditModal}
          onDelete={handleDelete}
          onAdd={openAddModal}
          onRefresh={fetchTransactions}
        />

        {/* PAGINATION */}

        <Pagination
          page={page}
          totalPages={pagination.totalPages}
          onPrevious={() =>
            setPage((prev) => prev - 1)
          }
          onNext={() =>
            setPage((prev) => prev + 1)
          }
        />
      </main>

      {/* MODAL */}

      <TransactionModal
        isOpen={showModal}
        editingTransaction={editingTransaction}
        formData={formData}
        formError={formError}
        saving={saving}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        onClose={closeModal}
      />
    </div>
  );
}

export default Dashboard;