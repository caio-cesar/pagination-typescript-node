import { TaskRepository } from "@/repository/task/task-repository";

export class DeleteTaskUseCase {
    
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(id: string): Promise<void> {
        const task = await this.taskRepository.findById(id);

        if (!task) {
            throw new Error('Task not found');
        }
        
        await this.taskRepository.delete(id);
    }
    
}