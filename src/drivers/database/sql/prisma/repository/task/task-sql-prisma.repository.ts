import { PageableInput, paginate } from "@/repository/commons/pagination";
import { Page } from "@/repository/commons/pagination.types";
import { TaskRepository } from "@/repository/task/task-repository";
import { TaskEntity, TaskSearchQuery } from "@/repository/task/task.types";
import { Task, TaskStatus } from "@prisma/client";
import { PrismaFilter } from "../../utils/prisma-filter";
import { prisma } from "../../prisma-driver";

export class TaskSqlPrismaRepository implements TaskRepository {

    async save(task: TaskEntity): Promise<TaskEntity> {
        return task.id ? await this.update(task) : await this.insert(task);
    }

    async insert(task: TaskEntity): Promise<TaskEntity> {
        const { id, ...taskWithoutId } = task;
        const newTask = await prisma.task.create({
            data: {
                ...taskWithoutId,
            }
        });
        return this.taskEntity(newTask)
    }

    async update(task: TaskEntity): Promise<TaskEntity> {
        const { id, ...taskWithoutId } = task;
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(id)
            },
            data: {
                ...taskWithoutId
            }
        })
        return this.taskEntity(updatedTask)
    }

    async findById(id: string): Promise<TaskEntity | null> {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(id)
            }
        });

        return task && this.taskEntity(task)
    }

    async findAll(pageableInput: PageableInput, taskInput?: TaskSearchQuery): Promise<Page<TaskEntity>> {
        const filter = new PrismaFilter().addLikeFilterForStringFields(taskInput).build();

        const [results, count] = await Promise.all([prisma.task.findMany({
            where: filter,
            skip: pageableInput.skip(),
            take: pageableInput.size
        }),
        prisma.task.count({
            where: filter
        })]);

        return paginate(results.map(this.taskEntity), count, pageableInput);
    }

    private taskEntity(task: Task): TaskEntity {
        return {
            ...task,
            id: task.id.toString(),
            status: task.status as TaskStatus
        }
    }

    async delete(id: string): Promise<void> {
        await prisma.task.delete({
            where: {
                id: Number(id)
            }
        })
    }

}