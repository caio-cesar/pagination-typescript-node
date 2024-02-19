import { CreateTaskUseCase } from "@/application/use-case/task/create-task-use-case";
import { CreateTaskHttpInputDTO, TaskHttpDTO } from "../dto/task.dto";

export class CreateTaskHttpController {
    constructor(private createTaskUseCase: CreateTaskUseCase) {}
    
    async handle(input: CreateTaskHttpInputDTO): Promise<TaskHttpDTO> {
        return await this.createTaskUseCase.execute(input);
    }
    
}