export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED';

export type CreateTaskHttpInputDTO = {
    title: string;
    description: string;
}

export type UpdateTaskHttpInputDTO = {
    id: string;
    title: string;
    description: string;
    status: string;
}

export type TaskHttpDTO = {
    id?: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export type TaskSearchInputHttpDTO = {
    title?: string;
    description?: string;
    status?: TaskStatus;
}