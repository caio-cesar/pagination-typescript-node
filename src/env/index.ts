import 'dotenv/config'
import { z } from 'zod'

export const HttpServerDriver = {
    EXPRESS: 'express',
    FASTIFY: 'fastify',
} as const

export const DatabaseDriver = {
    MONGO: 'mongodb',
    PRISMA: 'prisma',
} as const

const envSchema = z.object({
  HTTP_SERVER_PORT: z.coerce.number().default(3000),
  HTTP_SERVER_DRIVER: z.nativeEnum(HttpServerDriver).default(HttpServerDriver.EXPRESS),
  DATABASE_DRIVER: z.nativeEnum(DatabaseDriver).default(DatabaseDriver.MONGO),
  DATABASE_URL: z.string(),
  PRISMA_URL: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  const message = `Invalid environment variables: ${_env.error.message}`
  console.log(message)
  throw new Error(message)
}

export const env = _env.data