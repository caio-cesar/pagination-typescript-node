import { TaskRepository } from "@/repository/task/task-repository";
import { TaskMongoRepository } from "@/drivers/database/nosql/mongodb/repository/task/task-mongodb-repository"; 
import { TaskSqlPrismaRepository } from "@/drivers/database/sql/prisma/repository/task/task-sql-prisma.repository";

import { DatabaseDriver, env } from "@/env";

var taskRepository: TaskRepository;

export function createTaskRepository(): TaskRepository {
    if (!taskRepository) {
        switch (env.DATABASE_DRIVER) {
            case DatabaseDriver.MONGO:
                taskRepository = new TaskMongoRepository();
                break;
            case DatabaseDriver.PRISMA:
                taskRepository = new TaskSqlPrismaRepository();
                break;
            default:
                throw new Error('Database not supported');
        }
    }
    return taskRepository;
}