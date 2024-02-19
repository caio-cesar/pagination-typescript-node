import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import cors from 'cors';
import { taskRouter } from './task/routes';
import { errorHandler } from './error-handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler.handleError(err, res);
});

export { app }
