import { CustomError } from '../../interfaces/custom-error';

export class AuthError implements CustomError {
    constructor(public message: string = 'Invalid token', public status_code: number = 401) {}
}
