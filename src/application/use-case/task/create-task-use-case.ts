import { TaskRepository } from "@/repository/task/task-repository";
import { TaskStatus } from "@/repository/task/task.types";
import { CreateTaskInputDTO, TaskDTO } from "../dto/task.dto";

export class CreateTaskUseCase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(input: CreateTaskInputDTO): Promise<TaskDTO> {
        return await this.taskRepository.save({...input, status: TaskStatus.OPEN });
    }

}