export const TaskStatusDTO = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    CANCELLED: 'CANCELLED'
} as const;

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
    status: keyof typeof TaskStatusDTO;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export type TaskSearchInputDTO = {
    title?: string;
    description?: string;
    status?: keyof typeof TaskStatusDTO;
}