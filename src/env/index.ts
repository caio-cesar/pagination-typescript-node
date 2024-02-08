import { z } from 'zod'

const DatabaseDriver = {
    MONGO: 'mongodb',
    PRISMA: 'prisma',
} as const

export const envSchema = z.object({
  HTTP_SERVER_PORT: z.number().default(3000),
  DATABASE_DRIVER: z.nativeEnum(DatabaseDriver).default(DatabaseDriver.MONGO),
  DATABASE_URL: z.string(),
  PRISMA_URL: z.string()
})