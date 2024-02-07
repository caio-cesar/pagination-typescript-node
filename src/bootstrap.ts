import express from "express";
import mongoose from "mongoose";
import { TaskMongoRepository } from "./drivers/database/nosql/mongodb/repository/task/task-mongodb-repository";
import { PageableInput } from "./repository/commons/pagination";
import { TaskSqlPrismaRepository } from "./drivers/database/sql/prisma/repository/task/task-sql-prisma.repository";

const app = express();

app.get("/tasks", (req, res) => {
    const repository = new TaskMongoRepository();
    const pageParam = Number(req.query.page) || 1;
    const pageableInput = PageableInput.of(pageParam, Number(req.query.size) || 10);

    repository.findAll(pageableInput, {
        title: req.query.title as string,
        description: req.query.description as string }
    ).then((tasks) => {
        res.json(tasks);
    }).catch((error) => {
        res.status(500).json(error);
    });
})

app.get("/tasks-prisma", (req, res) => {
    const repository = new TaskSqlPrismaRepository();
    const pageParam = Number(req.query.page) || 1;
    const pageableInput = PageableInput.of(pageParam, Number(req.query.size) || 10);

    repository.findAll(pageableInput, {
        title: req.query.title as string,
        description: req.query.description as string }
    ).then((tasks) => {
        res.json(tasks);
    }).catch((error) => {
        res.status(500).json(error);
    });
})
mongoose.connect("mongodb://root:example@127.0.0.1:27017/taskdb?authSource=admin")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})