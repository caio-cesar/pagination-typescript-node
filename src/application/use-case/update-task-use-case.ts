import { TaskRepository } from "@/repository/task/task-repository";
import { TaskEntity } from "@/repository/task/task.types";

export class UpdateTaskUseCase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(task: TaskEntity): Promise<TaskEntity> {
        return await this.taskRepository.save(task);
    }
}