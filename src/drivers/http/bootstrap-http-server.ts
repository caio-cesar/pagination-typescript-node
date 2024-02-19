
import { HttpServerDriver, env } from '@/env'
import { app as expressApp } from './express/bootstrap-express'

export async function bootstrapHttpServer() {
    if (env.HTTP_SERVER_DRIVER === HttpServerDriver.EXPRESS) {
        expressApp.listen(env.HTTP_SERVER_PORT, () => {
            console.log(`Server running at PORT ${env.HTTP_SERVER_PORT}`)
        })
    }
}