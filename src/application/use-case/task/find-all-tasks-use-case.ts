import { TaskRepository } from "@/repository/task/task-repository";
import { TaskDTO, TaskSearchInputDTO } from "../dto/task.dto";
import { Page } from "@/commons/pagination/pagination.types";
import { PageableInput } from "@/commons/pagination/pagination";

export class FindAllTasksUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(pageableInput: PageableInput, input?: TaskSearchInputDTO): Promise<Page<TaskDTO>> {
        return await this.taskRepository.findAll(pageableInput, input);
    }

}