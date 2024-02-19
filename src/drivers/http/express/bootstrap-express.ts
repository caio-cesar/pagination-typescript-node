import express from 'express';
import cors from 'cors';
import { taskRouter } from './task/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRouter)

export { app }
