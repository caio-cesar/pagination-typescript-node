import { ControllerPath } from "@/controller/http/controller-path";
import { Router } from "express";
import { createTask, deleteTask, findAllTasks, updateTask } from "./task-express-controller";

export const taskRouter = Router();

taskRouter.post(ControllerPath.TASKS, createTask)
taskRouter.get(ControllerPath.TASKS, findAllTasks)
taskRouter.put(ControllerPath.TASK, updateTask)
taskRouter.delete(ControllerPath.TASK, deleteTask)