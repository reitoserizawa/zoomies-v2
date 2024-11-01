import { Prisma, PrismaClient } from '@prisma/client';

type ModelDelegates = {
    [K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};
export type WhereInput<MN extends Prisma.ModelName> = MN extends keyof ModelDelegates ? Exclude<Parameters<ModelDelegates[MN]['findFirst']>[0], undefined | null>['where'] : never;
export type UpdateInput<MN> = Partial<MN>;

export type ValidateInput<P> = Partial<Omit<P, 'id'>>;
export type ExtractKeys<P, K extends keyof P> = {
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
