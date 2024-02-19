import { Response } from 'express';
import { ZodError } from 'zod';

class ExpressErrorHandler {
    public handleError(error: Error , response: Response): void {
        if (error instanceof ZodError) {
            response.status(400).json({ message: 'Validation error', ...error.format()})
        } else {
            response.status(500).json({ message: error.message });
        }
    }
}

export const errorHandler = new ExpressErrorHandler();