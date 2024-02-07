export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED';

export type CreateTaskInputDTO = {
    title: string;
    description: string;
}

export type UpdateTaskInputDTO = {
    id: string;
    title: string;
    description: string;
    status: string;
}

export type TaskDTO = {
    id?: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt?: Date;
    updatedAt?: Date | null;
}