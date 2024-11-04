import { CustomError } from '../../interfaces/custom-error';

export class NoAccessError implements CustomError {
    constructor(public message: string = 'Access denied', public status_code: number = 401) {}
}
