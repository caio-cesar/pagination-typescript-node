import { ControllerPath } from "@/controller/http/controller-path";
import { Router } from "express";
import { createTask, findAllTasks } from "./task-express-controller";

export const taskRouter = Router();

taskRouter.get(ControllerPath.TASKS, findAllTasks)
taskRouter.post(ControllerPath.TASKS, createTask)