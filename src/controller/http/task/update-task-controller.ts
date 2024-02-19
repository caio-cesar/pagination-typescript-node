import { TaskDTO, UpdateTaskInputDTO } from "@/application/use-case/dto/task.dto";
import { UpdateTaskUseCase } from "@/application/use-case/task/update-task-use-case";

export class UpdateTaskHttpController {
    
    constructor(private readonly updateTaskUseCase: UpdateTaskUseCase) {}
    
    async handle(input: UpdateTaskInputDTO): Promise<TaskDTO> {
        return await this.updateTaskUseCase.execute(input);
    }
    
}