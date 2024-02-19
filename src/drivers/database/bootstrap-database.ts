import { DatabaseDriver, env } from "@/env"
import mongoose from "mongoose"

export async function bootstrapDatabase(): Promise<unknown> {
    if (env.DATABASE_DRIVER === DatabaseDriver.MONGO) {
        return await connectToMongo()
    }
}

export async function connectToMongo() {
    return await mongoose.connect(env.DATABASE_URL)
}
