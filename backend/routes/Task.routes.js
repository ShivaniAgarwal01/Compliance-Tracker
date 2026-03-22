import express from "express";
const router = express.Router();
import {getTasksByClient, createTask, updateTaskStatus } from "../controllers/Task.controller.js";

router.get("/:clientId", getTasksByClient);
router.post("/", createTask);
router.put("/:id", updateTaskStatus);

export default router;