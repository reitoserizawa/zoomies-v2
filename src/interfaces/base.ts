import { Prisma, PrismaClient } from '@prisma/client';

export type ModelDelegates = {
    [K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};

// assume T is a prisma model
export type WhereInput<T extends Prisma.ModelName> = T extends keyof ModelDelegates ? Exclude<Parameters<ModelDelegates[T]['findFirst']>[0], undefined | null>['where'] : never;

// used in fromQuery method
export type ExtractKeys<T, K extends keyof T> = {
    [P in K]: P;
};

export interface BaseInterface {
    id: number;
}

export interface BaseModelInterface<T> {
    id: number;

    properties: T;
    model_name: Prisma.ModelName;
    uncap_model_name: Uncapitalize<Prisma.ModelName>;
}
