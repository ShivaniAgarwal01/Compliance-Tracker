import Client from "../models/Client.js";

// @desc Get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getClients };
