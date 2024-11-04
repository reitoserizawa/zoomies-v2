import { CustomError } from '../../interfaces/custom-error';

export class NotFoundError implements CustomError {
    constructor(public message: string = 'Not found', public status_code: number = 404) {}
}
