import bcrypt from 'bcrypt';

class PasswordUtil {
    salt_rounds: number;
    hashed_password: string;
    is_match: boolean;

    // TODO: update and add secret key
    constructor(public password: string) {
        this.salt_rounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10;
    }

    async hash(): Promise<string> {
        const hahsed_password = await bcrypt.hash(this.password, this.salt_rounds);

        this.hashed_password = hahsed_password;

        return hahsed_password;
    }

    async verify(hashed_password: string): Promise<boolean> {
        const is_match = await bcrypt.compare(this.password, hashed_password);

        this.is_match = is_match;

        return is_match;
    }
}

export default PasswordUtil;
