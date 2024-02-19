import { bootstrapHttpServer } from "./drivers/http/bootstrap-http-server";
import { bootstrapDatabase } from "./drivers/database/bootstrap-database";

bootstrapHttpServer().then(() => {
    console.log('Server running...')
});

bootstrapDatabase().then(() => {
    console.log('Database connected...')
});