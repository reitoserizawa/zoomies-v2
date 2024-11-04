import { CustomError } from '../../interfaces/custom-error';

export class BadRequestError implements CustomError {
    constructor(public message: string = 'Bad request', public status_code: number = 400) {}
}
