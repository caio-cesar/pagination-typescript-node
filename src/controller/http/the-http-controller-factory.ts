import { CreateTaskHttpController } from "./task/create-task-controller";
import { createCreateTaskUseCase, createDeleteTaskUseCase, createFindAllTasksUseCase, createUpdateTaskUseCase } from "@/application/use-case/use-case-factory";
import { FindAllTasksController } from "./task/find-all-tasks-controller";
import { UpdateTaskHttpController } from "./task/update-task-controller";
import { DeleteTaskHttpController } from "./task/delete-task-controller";

var createTaskController: CreateTaskHttpController;
var findAllTasksController: FindAllTasksController;
var updateTaskController: UpdateTaskHttpController;
var deleteTaskController: DeleteTaskHttpController;

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

export function createUpdateTaskController() {
    if (!updateTaskController) {
        updateTaskController = new UpdateTaskHttpController(createUpdateTaskUseCase());
    }
    return updateTaskController;
}

export function createDeleteTaskController() {
    if (!deleteTaskController) {
        deleteTaskController = new DeleteTaskHttpController(createDeleteTaskUseCase());
    }
    return deleteTaskController;
}