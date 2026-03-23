import { updateTask } from "../api";

function TaskList({ tasks, filters, refresh }) {
  const isOverdue = (task) =>
    task.status === "Pending" && new Date(task.due_date) < new Date();

  const filteredTasks = tasks.filter(
    (t) =>
      (filters.status === "All" || t.status === filters.status) &&
      (filters.category === "All" || t.category === filters.category),
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {filteredTasks.map((task) => (
        <div
          key={task._id}
          className={`p-5 rounded-xl border transition ${
            isOverdue(task)
              ? "border-red-500 bg-red-950/40"
              : "border-gray-800 bg-gray-900 hover:bg-gray-800"
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-100">{task.title}</h3>
          <p className="text-sm text-gray-400">{task.category}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(task.due_date).toLocaleDateString()}
          </p>
          <span
            className={`inline-block mt-3 px-2 py-1 text-xs rounded-full ${
              task.status === "Completed"
                ? "bg-green-900 text-green-400"
                : "bg-yellow-900 text-yellow-400"
            }`}
          >
            {task.status}
          </span>
          {task.status !== "Completed" && (
            <button
              onClick={async () => {
                await updateTask(task._id, "Completed");
                refresh();
              }}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Mark Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
