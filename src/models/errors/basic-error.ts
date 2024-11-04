import { CustomError } from '../../interfaces/custom-error';

export class BasicError implements CustomError {
    constructor(public message: string, public status_code = 500) {}
}
