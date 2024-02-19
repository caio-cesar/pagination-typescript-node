import { TaskRepository } from "@/repository/task/task-repository";
import { TaskDTO, UpdateTaskInputDTO } from "../dto/task.dto";

export class UpdateTaskUseCase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(input: UpdateTaskInputDTO): Promise<TaskDTO> {
        const task = await this.taskRepository.findById(input.id);

        if (!task) {
            throw new Error('Task not found');
        }
        
        return await this.taskRepository.save(input);
    }
    
}