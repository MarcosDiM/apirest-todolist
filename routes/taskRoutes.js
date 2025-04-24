import express from "express";

import {
  addNewTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import { validateTask } from "../middleweres/validateTask.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", validateTask, addNewTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
