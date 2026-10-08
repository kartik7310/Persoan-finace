function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-between">

      <p className="text-sm text-gray-500">
        Page{" "}
        <span className="font-semibold text-gray-700">
          {page}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-700">
          {totalPages}
        </span>
      </p>

      <div className="flex gap-2">

        <button
          disabled={page === 1}
          onClick={onPrevious}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
        >
          ← Previous
        </button>

        <button
          disabled={page === totalPages}
          onClick={onNext}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default Pagination;