import { Backlog } from "../models/Backlog.js";
import { Task } from "../models/Task.js";

// GET /backlog
export const getBacklog = async (req, res) => {
  try {
    const backlog = await Backlog.findOne().populate("tareas");
    if (!backlog)
      return res.status(404).json({ error: "No se encontró el backlog" });
    res.json(backlog);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el backlog" });
  }
};

// POST /backlog
export const createBacklog = async (req, res) => {
  try {
    // Evitar crear más de un backlog
    const existing = await Backlog.findOne();
    if (existing)
      return res.status(400).json({ error: "Ya existe un backlog" });

    const newBacklog = new Backlog({ tareas: [] });
    await newBacklog.save();
    res.status(201).json(newBacklog);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el backlog" });
  }
};

// PUT /backlog/add-task/:taskId
export const addTaskToBacklog = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    let backlog = await Backlog.findOne();
    if (!backlog) {
      backlog = new Backlog({ tareas: [] });
    }

    if (backlog.tareas.includes(taskId)) {
      return res.status(400).json({ error: "La tarea ya está en el backlog" });
    }

    backlog.tareas.push(taskId);
    await backlog.save();

    res.status(200).json({ message: "Tarea agregada al backlog", backlog });
  } catch (error) {
    res.status(500).json({
      error: "Error al agregar tarea al backlog",
      details: error.message,
    });
  }
};
