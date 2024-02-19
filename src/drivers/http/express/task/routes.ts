import { ControllerPath } from "@/controller/http/controller-path";
import { Router } from "express";
import { findAllTasks } from "./task-express-controller";

export const taskRouter = Router();

taskRouter.get(ControllerPath.TASKS, findAllTasks)