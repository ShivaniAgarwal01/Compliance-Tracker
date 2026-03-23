import { useState } from "react";
import { createTask } from "../api";

function TaskForm({ clientId, refresh }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    due_date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createTask({ ...form, client_id: clientId });

    setForm({ title: "", category: "", due_date: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}  className="bg-gray-900 p-4 rounded-xl border border-gray-800 flex flex-wrap gap-3 mb-6">

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2 flex-1"
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
         className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2"
      />
      <input
        type="date"
        value={form.due_date}
        onChange={(e) => setForm({ ...form, due_date: e.target.value })}
        className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;