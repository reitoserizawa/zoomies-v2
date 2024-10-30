import { Prisma, PrismaClient } from '@prisma/client';

export type ModelDelegates = {
    [K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};

// Assuming T is a specific Model type from Prisma
export type WhereInput<T extends Prisma.ModelName> = T extends keyof ModelDelegates ? Exclude<Parameters<ModelDelegates[T]['findFirst']>[0], undefined | null>['where'] : never;

export interface BaseInterface {
    id: number;
}

export interface BaseModelInterface<T> {
    id: number;

    properties: T;
    model_name: string;
}
