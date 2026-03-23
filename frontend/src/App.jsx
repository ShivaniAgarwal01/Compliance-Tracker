import { useEffect, useState } from "react";
import { getClients, getTasks } from "./api";
import ClientList from "./components/ClientList";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filters from "./components/Filters";
import SummaryStats from "./components/SummaryStats";

function App() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "All", category: "All" });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [taskSort, setTaskSort] = useState("date-asc");

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const data = await getClients();
    setClients(data);
  };

  const fetchTasks = async (clientId) => {
    const data = await getTasks(clientId);
    setTasks(data);
  };

  const filteredClients = clients
    .filter((client) =>
      client.company_name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOption === "name-asc") {
        return a.company_name.localeCompare(b.company_name);
      } else if (sortOption === "name-desc") {
        return b.company_name.localeCompare(a.company_name);
      }
      return 0;
    });

  const sortedTasks = [...tasks].sort((a, b) => {
    if (taskSort === "date-asc") {
      return new Date(a.due_date) - new Date(b.due_date);
    } else if (taskSort === "date-desc") {
      return new Date(b.due_date) - new Date(a.due_date);
    }
    return 0;
  });

  return (
    <div className="h-screen bg-gray-50 font-sans flex flex-col">
      {/*  TOP HEADER */}
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Compliance Tracker</h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg px-10 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg px-3 py-2 ml-4"
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
        </select>
      </div>

      {/*  MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ClientList
          clients={filteredClients}
          onSelect={(client) => {
            setSelectedClient(client);
            fetchTasks(client._id);
          }}
        />

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {selectedClient ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedClient.company_name}
              </h1>

              <SummaryStats tasks={tasks} />
              
              <TaskForm
                clientId={selectedClient._id}
                refresh={() => fetchTasks(selectedClient._id)}
              />

              <Filters filters={filters} setFilters={setFilters} />

              <div className="flex justify-end mb-4">
                <select
                  value={taskSort}
                  onChange={(e) => setTaskSort(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="date-asc">Due Date ↑</option>
                  <option value="date-desc">Due Date ↓</option>
                </select>
              </div>
              <TaskList
                tasks={sortedTasks}
                filters={filters}
                refresh={() => fetchTasks(selectedClient._id)}
              />
            </>
          ) : (
            <p className="text-gray-500 text-lg">
              Select a client to view tasks
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
