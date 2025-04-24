import express from "express";
import {
  addNewSprint,
  deleteSprint,
  getAllSprints,
  getSprintById,
  updateSprint,
  addTaskToSprint,
} from "../controllers/sprintController.js";

const router = express.Router();

router.get("/", getAllSprints);
router.get("/:id", getSprintById);
router.post("/", addNewSprint);
router.put("/:id", updateSprint);
router.delete("/:id", deleteSprint);
router.put("/:id/add-task/:taskId", addTaskToSprint);

export default router;
