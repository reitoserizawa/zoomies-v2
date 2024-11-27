import { createContext } from 'react';

type StateKeys<State> = keyof State;

export interface FormState<State> {
    data: Partial<State>;
    validators?: { [key in StateKeys<State>]?: ((value: any, data: Partial<State>) => string[])[] };
    errors?: { [key in StateKeys<State>]?: string[] };
}

export interface FormContextProps<State> {
    errors: FormState<State>['errors'];
    data: FormState<State>['data'];
    setFieldValue: <K extends StateKeys<State>>(name: K, value: any) => void;
    registerInput: (input: { name: StateKeys<State>; validators: ((value: any, data: Partial<State>) => string[])[] }) => void;
}

const FormContext = <State,>(initial: FormContextProps<State>) => {
    return createContext<FormContextProps<State>>(initial);
};

export default FormContext;
