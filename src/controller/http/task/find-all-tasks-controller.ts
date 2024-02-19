import { Page } from "@/commons/pagination/pagination.types";
import { TaskHttpDTO, TaskSearchInputHttpDTO } from "../dto/task.dto";
import { PageableInput } from "@/commons/pagination/pagination";
import { FindAllTasksUseCase } from "@/application/use-case/task/find-all-tasks-use-case";

export class FindAllTasksController {
    constructor(private readonly findAllTasksUseCase: FindAllTasksUseCase) {}
    
    async handle(pageableInput: PageableInput, input?: TaskSearchInputHttpDTO): Promise<Page<TaskHttpDTO>> {
        return await this.findAllTasksUseCase.execute(pageableInput, input);
    }
    
}