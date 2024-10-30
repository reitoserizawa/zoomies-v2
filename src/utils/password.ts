import bcrypt from 'bcrypt';

class PasswordUtil {
    salt_rounds: number;

    constructor(public password: string) {
        this.salt_rounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10;
    }

    async hash(): Promise<string> {
        const hahsed_password = await bcrypt.hash(this.password, this.salt_rounds);

        return hahsed_password;
    }

    async verify(hash: string): Promise<boolean> {
        const is_match = await bcrypt.compare(this.password, hash);

        return is_match;
    }
}

export default PasswordUtil;
