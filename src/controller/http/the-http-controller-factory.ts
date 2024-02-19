import { CreateTaskHttpController } from "./task/create-task-controller";
import { createCreateTaskUseCase, createFindAllTasksUseCase } from "@/application/use-case/use-case-factory";
import { FindAllTasksController } from "./task/find-all-tasks-controller";

var createTaskController: CreateTaskHttpController;
var findAllTasksController: FindAllTasksController;

export function createCreateTaskController(): CreateTaskHttpController {
    if (!createTaskController) {
        createTaskController = new CreateTaskHttpController(createCreateTaskUseCase());
    }
    return createTaskController;
}

export function createFindAllTasksController() {
    if (!findAllTasksController) {
        findAllTasksController = new FindAllTasksController(createFindAllTasksUseCase());
    }
    return findAllTasksController;
}