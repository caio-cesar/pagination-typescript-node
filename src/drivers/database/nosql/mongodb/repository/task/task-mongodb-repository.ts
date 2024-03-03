import { TaskEntity, TaskSearchQuery } from "@/repository/task/task.types";
import { TaskRepository } from "@/repository/task/task-repository";
import { Page } from "@/commons/pagination/pagination.types";
import { TaskModel } from "../../model/task-model";
import { PageableInput, paginate } from "@/commons/pagination/pagination";
import { buildQuery } from "../../utils/query";
import { ObjectId } from 'mongodb';


export class TaskMongoRepository implements TaskRepository {
    
    async save(task: TaskEntity): Promise<TaskEntity> {
        return task.id ? await this.update(task) : await this.insert(task);
    }

    async update(task: TaskEntity): Promise<TaskEntity> {
        const { id, ...taskWithoutId } = task;
        await TaskModel.findOneAndUpdate(
            { _id: new ObjectId(task.id) },
            { $set: taskWithoutId },
            { new: true });
        return task
    }

    async insert(task: TaskEntity): Promise<TaskEntity> {
        const newTask = await TaskModel.create(task)
        
        return {
            id: newTask._id.toString(),
            ...task
        }
    }

    async findById(id: string): Promise<TaskEntity | null> {
       return await TaskModel.findById(id).exec()
    }

    async findAll(pageableInput: PageableInput, taskInput?: TaskSearchQuery): Promise<Page<TaskEntity>> {
        const query = buildQuery(taskInput)
        const [allTasks, totalTasks] = await Promise.all([
            TaskModel.find(query)
            .skip(pageableInput.skip())
            .limit(pageableInput.size),
            TaskModel.countDocuments(query)
        ])
        return paginate(allTasks, totalTasks, pageableInput);
    }

    async delete(id: string): Promise<void> {
        await TaskModel.findByIdAndDelete(id).exec(); 
    }

}