import Task from "../models/Task.js";

// @desc Get tasks by client
const getTasksByClient = async (req, res) => {
  try {
    const tasks = await Task.find({
      client_id: req.params.clientId,
    }).sort({ due_date: 1 });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Create new task
const createTask = async (req, res) => {
  try {
    const { client_id, title, category, due_date } = req.body;

    // Basic validation ⭐
    if (!client_id || !title || !category || !due_date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const task = new Task(req.body);
    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Update task status
const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status || task.status;

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getTasksByClient, createTask, updateTaskStatus };