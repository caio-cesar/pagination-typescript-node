
import { PageableInput } from "../commons/pagination";
import { Page } from "../commons/pagination.types";
import { TaskEntity, TaskSearchQuery } from "./task.types";

export interface TaskRepository {
    findById(id: string): Promise<TaskEntity | null>;
    save(task: TaskEntity): Promise<TaskEntity>;
    findAll(pageableInput: PageableInput, searchQuery?: TaskSearchQuery): Promise<Page<TaskEntity>>;
    delete(id: string): Promise<void>;
}