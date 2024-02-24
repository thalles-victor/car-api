export class ExceptionError extends Error {
  errorMessage: string;
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);

    this.errorMessage = message;
    this.statusCode = statusCode;
  }

  getBodyResponse() {
    const error = {
      message: this.errorMessage,
      statusCode: this.statusCode,
    };

    return error;
  }
}

export class InternalServerErrorException extends ExceptionError {
  constructor() {
    super("internal server error", 500);
  }
}

export class NotFoundErrorException extends ExceptionError {
  constructor(message?: string) {
    super(`not found ${message}`, 404);
  }
}

export class UnauthorizedAccessException extends ExceptionError {
  constructor() {
    super(`unauthorized access`, 401);
  }
}
