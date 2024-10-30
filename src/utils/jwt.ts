import jwt from 'jsonwebtoken';

type TokenPayload = {
    [key: string]: string;
};

class JWTUtil {
    static generate(payload: TokenPayload, expires_in?: number) {
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            algorithm: 'RS256',
            expiresIn: expires_in ? `${expires_in} days` : '2 days'
        });
    }

    static verify(token: string): boolean {
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY, { algorithms: ['RS256'] });

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

        if (!body || typeof body !== 'object' || !('payload' in body)) {
            throw new Error('Invalid token');
        }

        return body.payload;
    }
}

export default JWTUtil;
