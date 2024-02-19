import { DeleteTaskUseCase } from "@/application/use-case/task/delete-task-use.case";

export class DeleteTaskHttpController {
    constructor(private readonly deleteTaskUseCase: DeleteTaskUseCase) {}

    async handle(id: string): Promise<void> {
        return await this.deleteTaskUseCase.execute(id);
    }

}