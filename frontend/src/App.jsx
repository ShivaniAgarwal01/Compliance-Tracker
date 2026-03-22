import { useEffect, useState } from "react";
import { getClients, getTasks } from "./api";

import ClientList from "./components/ClientList";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filters from "./components/Filters";

function App() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "All", category: "All" });

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

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <ClientList
        clients={clients}
        onSelect={(client) => {
          setSelectedClient(client);
          fetchTasks(client._id);
        }}
      />

      {/* Main */}
      <div className="flex-1 p-6">
        {selectedClient ? (
          <>
            <h1 className="text-2xl font-bold mb-4">
              {selectedClient.company_name}
            </h1>

            <TaskForm
              clientId={selectedClient._id}
              refresh={() => fetchTasks(selectedClient._id)}
            />

            <Filters filters={filters} setFilters={setFilters} />

            <TaskList
              tasks={tasks}
              filters={filters}
              refresh={() => fetchTasks(selectedClient._id)}
            />
          </>
        ) : (
          <p>Select a client</p>
        )}
      </div>
    </div>
  );
}

export default App;