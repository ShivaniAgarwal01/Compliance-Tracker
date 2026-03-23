function SummaryStats({ tasks }) {
  const now = new Date();

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  const overdueTasks = tasks.filter(
    (task) =>
      task.status !== "Completed" &&
      new Date(task.due_date) < now
  ).length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      
      {/* Total */}
      <div className="bg-blue-50 p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">📋 Total Tasks</p>
        <h2 className="text-2xl font-bold text-gray-900">
          {totalTasks}
        </h2>
      </div>

      {/* Pending */}
      <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">⏳ Pending</p>
        <h2 className="text-2xl font-bold text-yellow-600">
          {pendingTasks}
        </h2>
      </div>

      {/* Overdue */}
      <div className="bg-red-50 p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">⚠️ Overdue</p>
        <h2 className="text-2xl font-bold text-red-600">
          {overdueTasks}
        </h2>
      </div>

    </div>
  );
}

export default SummaryStats;