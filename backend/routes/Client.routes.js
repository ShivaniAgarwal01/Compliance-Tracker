import express from "express";
import { getClients } from "../controllers/Client.controller.js";
const router = express.Router();

router.get("/", getClients);

export default router;