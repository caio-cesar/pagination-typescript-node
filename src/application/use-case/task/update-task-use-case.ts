import { TaskRepository } from "@/repository/task/task-repository";
import { TaskDTO, UpdateTaskInputDTO } from "../dto/task.dto";

export class UpdateTaskUseCase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(input: UpdateTaskInputDTO): Promise<TaskDTO> {
        return await this.taskRepository.save(input);
    }
    
}