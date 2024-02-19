import { z } from 'zod'
import { Request, Response } from "express";
import { createCreateTaskController, createDeleteTaskController, createFindAllTasksController, createUpdateTaskController } from "@/controller/http/the-http-controller-factory";
import { PageableInput } from "@/commons/pagination/pagination";
import { TaskStatusDTO } from '@/application/use-case/dto/task.dto';

export async function createTask(req: Request, res: Response) {
    const controller = createCreateTaskController();
    const schema = z.object({
        title: z.string().min(3),
        description: z.string().min(3)
    })

    const { title, description } = schema.parse(req.body); 
    const result = await controller.handle({ title, description });
    return res.status(201).send({ task: result});
}

export async function findAllTasks(req: Request, res: Response) {
    const controller = createFindAllTasksController();
    const schema = z.object({
        page: z.coerce.number().min(1).default(1),
        size: z.coerce.number().min(1).default(10),
        title: z.string().optional(),
        description: z.string().optional()
    })
    const { page, size, title, description } = schema.parse(req.query);
    const result = await controller.handle(PageableInput.of(page, size), { title, description });
    return res.status(200).send(result);
}

export async function updateTask(req: Request, res: Response) {
    const controller = createUpdateTaskController();
    const schema = z.object({
        title: z.string().min(3),
        description: z.string().min(3),
        status: z.nativeEnum(TaskStatusDTO)
    })
    
    const { id } = z.object({
        id: z.string().min(1)
    }).parse(req.params);

    const { title, description, status} = schema.parse(req.body); 
    const result = await controller.handle({ id, title, description, status });
    return res.status(200).send({ task: result});
}

export async function deleteTask(req: Request, res: Response) {
    const controller = createDeleteTaskController();
    const { id } = z.object({
         id: z.string().min(1)
     }).parse(req.params);
     const result = await controller.handle(id);
     return res.status(204).send();
}