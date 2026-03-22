function Filters({ filters, setFilters }) {
  return (
    <div className="flex gap-3 mb-6">
      <select
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
         className="border rounded-lg px-3 py-2"
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
        className="border p-2"
      />
    </div>
  );
}

export default Filters;