import { CreateTaskUseCase } from "./create-task-use-case";



createTaskUseCase: CreateTaskUseCase;


export function createTaskUseCase() {
    if (!createTaskUseCase) {
        createTaskUseCase = new CreateTaskUseCase();
    }
    return createTaskUseCase;
}