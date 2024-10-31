import jwt from 'jsonwebtoken';

export type TokenPayload = {
    [key: string]: string | number;
};

class JWTUtil {
    static generate(payload: TokenPayload, expires_in?: number): string {
        if (!process.env.JWT_SECRET_KEY) {
            throw new Error();
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: expires_in ? `${expires_in} days` : '2 days'
        });

        return token;
    }

    static verify(token: string): boolean {
        if (!process.env.JWT_SECRET_KEY) {
            throw new Error();
        }

        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY);

            return true;
        } catch (e) {
            return false;
        }
    }

    static decode(token: string): TokenPayload {
        if (!JWTUtil.verify(token)) {
            throw new Error('Invalid token');
        }

        const body = jwt.decode(token);

        if (!body || typeof body !== 'object') {
            throw new Error('Invalid token');
        }

        return body;
    }
}

export default JWTUtil;
