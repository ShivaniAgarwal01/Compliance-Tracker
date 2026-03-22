import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    client_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    category: { type: String, required: true },
    due_date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
  },
  { timestamps: true }
);


export default mongoose.model("Task", TaskSchema);