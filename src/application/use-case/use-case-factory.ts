import { createTaskRepository } from "@/repository/repository-factory";
import { CreateTaskUseCase } from "./task/create-task-use-case";
import { UpdateTaskUseCase } from "./task/update-task-use-case";
import { FindAllTasksUseCase } from "./task/find-all-tasks-use-case";
import { DeleteTaskUseCase } from "./task/delete-task-use.case";

var createTaskUseCase: CreateTaskUseCase;
var updateTaskUseCase: UpdateTaskUseCase;
var findAllTasksUseCase: FindAllTasksUseCase;
var deleteTaskUseCase: DeleteTaskUseCase;

export function createCreateTaskUseCase(): CreateTaskUseCase {
    if (!createTaskUseCase) {
        createTaskUseCase = new CreateTaskUseCase(createTaskRepository());
    }
    return createTaskUseCase;
}

export function createUpdateTaskUseCase(): UpdateTaskUseCase {
    if (!updateTaskUseCase) {
        updateTaskUseCase = new UpdateTaskUseCase(createTaskRepository());
    }
    return updateTaskUseCase;
}

export function createFindAllTasksUseCase(): FindAllTasksUseCase {
    if (!findAllTasksUseCase) {
        findAllTasksUseCase = new FindAllTasksUseCase(createTaskRepository());
    }
    return findAllTasksUseCase;
}

export function createDeleteTaskUseCase(): DeleteTaskUseCase {
    if (!deleteTaskUseCase) {
        deleteTaskUseCase = new DeleteTaskUseCase(createTaskRepository());
    }
    return deleteTaskUseCase;
}