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
      
      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
    <p className="text-gray-400 text-sm">Total Tasks</p>
    <h2 className="text-2xl font-semibold">{totalTasks}</h2>
  </div>

     <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
    <p className="text-gray-400 text-sm">Pending</p>
    <h2 className="text-2xl font-semibold text-yellow-400">
      {pendingTasks}
    </h2>
  </div>

      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
    <p className="text-gray-400 text-sm">Overdue</p>
    <h2 className="text-2xl font-semibold text-red-400">
      {overdueTasks}
    </h2>
  </div>

    </div>
  );
}

export default SummaryStats;