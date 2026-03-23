function Filters({ filters, setFilters }) {
  return (
    <div className="flex gap-3 mb-6 items-center">
      <select
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
         className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2"
      >
        <p className="text-sm text-gray-500">Filter</p>
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
        
      <input
        placeholder="Category"
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value || "All" })
        }
        className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2"
      />
    </div>
  );
}

export default Filters;