const BASE_URL = "https://compliance-tracker-lf68.onrender.com";

export const getClients = async () => {
  const res = await fetch(`${BASE_URL}/clients`);
  return res.json();
};

export const getTasks = async (clientId) => {
  const res = await fetch(`${BASE_URL}/tasks/${clientId}`);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, status) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
};