export const TaskStatus = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    CANCELLED: 'CANCELLED'
} as const;

export type TaskEntity = {
    id?: string;
    title: string;
    description: string;
    status: TaskStatus[keyof typeof TaskStatus];
    createdAt?: Date;
    updatedAt?: Date | null;
}

export type TaskSearchQuery = {
    title?: string;
    description?: string;
}