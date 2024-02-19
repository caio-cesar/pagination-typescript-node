import { z } from 'zod'
import { Request, Response } from "express";
import { createFindAllTasksController } from "@/controller/http/the-http-controller-factory";
import { PageableInput } from "@/commons/pagination/pagination";

export async function findAllTasks(req: Request, res: Response) {
    const controller = createFindAllTasksController();    
    const schema = z.object({
        page: z.coerce.number().default(1),
        size: z.coerce.number().default(10),
        title: z.string().optional(),
        description: z.string().optional()
    })    
    const { page, size, title, description } = schema.parse(req.query);
    const result = await controller.handle(PageableInput.of(page, size), { title, description });
    return res.status(200).send(result);
}