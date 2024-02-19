import mongoose from "mongoose";
import { TaskStatus } from "@/repository/task/task.types";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    
    status: {
        type: String,
        required: true,
        enum: Object.values(TaskStatus)
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: Date
});

export const TaskModel = mongoose.model('Task', taskSchema);