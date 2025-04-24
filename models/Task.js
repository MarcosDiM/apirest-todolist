import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pendiente", "en progreso", "completada"],
    default: "pendiente",
  },
  fechaLimite: {
    type: Date,
    required: true,
  },
  color: {
    type: String,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
