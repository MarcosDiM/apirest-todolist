import { Task } from "../models/Task.js";

// GET /tasks
export const getAllTasks = async (req, res) => {
  try {
    const { estado, ordenar } = req.query;
    const filter = {};

    if (estado) {
      filter.status = estado;
    }

    let query = Task.find(filter);

    // Ordenar por fecha-limite
    if (ordenar === "fechaLimite") {
      query = query.sort({ fechaLimite: 1 });
    }

    const tasks = await query;
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas" });
  }
};

// POST /tasks
export const addNewTask = async (req, res) => {
  try {
    const { titulo, descripcion, status, sprint, fechaLimite, color } =
      req.body;
    const newTask = new Task({
      titulo,
      descripcion,
      status,
      sprint,
      fechaLimite,
      color,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error al crear una nueva tarea." });
  }
};
// PUT /tasks/:id
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

// DELETE /tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
