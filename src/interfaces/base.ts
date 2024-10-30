import { Prisma, PrismaClient } from '@prisma/client';

export type ModelDelegates = {
    [K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};

export interface BaseInterface {
    id: number;
}

export interface BaseModelInterface<T> {
    id: number;
    properties: T;
}
