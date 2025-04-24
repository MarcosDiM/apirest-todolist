import { Sprint } from "../models/Sprint.js";

// GET /sprints
export const getAllSprints = async (req, res) => {
  try {
    const sprints = await Sprint.find();
    res.json(sprints);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener sprints", error });
  }
};
// GET /sprints/:id
export const getSprintById = async (req, res) => {
  try {
    const { id } = req.params;
    const sprint = await Sprint.findById(id).populate("tareas");

    if (!sprint) {
      return res.status(404).json({ error: "Sprint no encontrado" });
    }

    res.json(sprint);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el sprint" });
  }
};

// POST /sprints
export const addNewSprint = async (req, res) => {
  try {
    const { fechaInicio, fechaCierre, tareas = [], color } = req.body;
    const newSprint = new Sprint({ fechaInicio, fechaCierre, tareas, color });
    await newSprint.save();
    res.status(201).json(newSprint);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar sprint", error });
  }
};
// PUT /sprints/:id
export const updateSprint = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSprint = await Sprint.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedSprint) {
      return res.status(404).json({ error: "Sprint no encontrado" });
    }

    res.json(updatedSprint);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el sprint" });
  }
};

// DELETE /sprints/:id
export const deleteSprint = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSprint = await Sprint.findByIdAndDelete(id);

    if (!deletedSprint) {
      return res.status(404).json({ error: "Sprint no encontrado" });
    }

    res.json({ message: "Sprint eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el sprint" });
  }
};
// PUT /sprints/:id/add-task/:taskId
export const addTaskToSprint = async (req, res) => {
  const { id, taskId } = req.params;
  try {
    const sprint = await Sprint.findById(id);
    if (!sprint) {
      return res.status(404).json({ error: "Sprint no encontrado" });
    }

    if (sprint.tareas.includes(taskId)) {
      return res.status(400).json({ error: "La tarea ya está en el sprint" });
    }

    sprint.tareas.push(taskId);
    await sprint.save();

    res.status(200).json({ message: "Tarea agregada al sprint", sprint });
  } catch (error) {
    res.status(500).json({
      error: "Error al agregar tarea al sprint",
      details: error.message,
    });
  }
};
