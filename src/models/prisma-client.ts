import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PrismaClientModel {
    static prisma = prisma;
}

export default PrismaClientModel;
