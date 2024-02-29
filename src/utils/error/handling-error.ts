import type { Request, Response, NextFunction } from "express";
import { ExceptionError } from "./ExceptionError";

export function ErrorHandler(
  error: ExceptionError | Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (response.headersSent) {
    return next(error);
  }

  if (error instanceof ExceptionError) {
    const statusCode = error.statusCode;
    const body = error.getBodyResponse();

    return response.status(statusCode).json(body);
  }

  console.error(error);
  response
    .status(500)
    .json({ message: "internal server error", statuscode: 500 });
}
