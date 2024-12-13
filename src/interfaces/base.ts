import { Prisma, PrismaClient } from '@prisma/client';

type ModelDelegates = {
    [K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};
export type WhereInput<MN extends Prisma.ModelName> = MN extends keyof ModelDelegates ? Exclude<Parameters<ModelDelegates[MN]['findFirst']>[0], undefined | null>['where'] : never;

export type ValidateInput<P> = Partial<Omit<P, 'id'>>;
export type ExtractKeys<P, K extends keyof P> = {
    [Key in K]: P[Key];
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

export type IncludeInput = (string | string[])[];

export type IncludeRelations = {
    include: {
        [key: string]: IncludeRelations | boolean;
    };
};

// function buildIncludeObject(inputs: IncludeInput): { include: IncludeObject } {
//     const include: IncludeObject = {};

//     inputs.forEach(input => {
//         if (typeof input === 'string') {
//             include[input] = true;
//         } else if (Array.isArray(input)) {
//             let current = include;
//             input.forEach((key, index) => {
//                 if (!current[key]) {
//                     current[key] = index === input.length - 1 ? true : {};
//                 }
//                 current = current[key] as IncludeObject;
//             });
//         }
//     });

//     return { include };
// }
