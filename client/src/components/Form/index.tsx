import React, { useState, useEffect, useCallback } from 'react';
import FormContext from './FormContext'; // Import the provided FormContext

export type StateKeys<State> = keyof State;

export interface FormState<State> {
    data: Partial<State>;
    validators?: { [key in StateKeys<State>]?: ((value: any, data: Partial<State>) => string[])[] };
    errors?: { [key in StateKeys<State>]?: string[] };
}

export interface FormProps<State> {
    initialValues?: Partial<State>;
    onSubmit: (data: Partial<State>) => void;
    onReset?: () => void;
    className?: string;
    id?: string;
    children?: React.ReactNode;
}

let FormProvider: any;

const Form = <State,>(props: FormProps<State>) => {
    const [formState, setFormState] = useState<FormState<State>>({
        data: { ...props.initialValues },
        validators: {},
        errors: {}
    });

    // update formState when `initialValues` change
    useEffect(() => {
        setFormState({
            data: { ...props.initialValues },
            validators: {},
            errors: {}
        });
    }, [props.initialValues]);

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) props.onSubmit(formState.data);
    };

    const validate = (): boolean => {
        const { validators, data } = formState;

        if (!validators || Object.keys(validators).length === 0) return true;

        const formErrors = Object.entries(validators).reduce((errors, [name, fieldValidators]) => {
            const messages = (fieldValidators as ((value: any, data: Partial<State>) => string[])[]).reduce<string[]>((result, validator) => {
                const value = data[name as keyof typeof data];
                const err = validator(value, data);
                return [...result, ...err];
            }, []);
            if (messages.length > 0) errors[name] = messages;
            return errors;
        }, {} as Record<string, string[]>);

        if (Object.keys(formErrors).length === 0) return true;

        setFormState(state => ({ ...state, errors: formErrors }));
        return false;
    };

    const onResetHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState({
            data: { ...props.initialValues },
            validators: {},
            errors: {}
        });
        props.onReset?.();
    };

    // Set form field value
    const setFieldValue = <K extends StateKeys<State>>(name: K, value: State[K]) => {
        setFormState(state => ({
            ...state,
            data: { ...state.data, [name]: value },
            errors: { ...state.errors, [name]: [] } // clear errors for the field
        }));
    };

    const registerInput = useCallback(({ name, validators }: { name: StateKeys<State>; validators: ((value: any, data: Partial<State>) => string[])[] }) => {
        setFormState(prevState => {
            if (prevState.validators && prevState.validators[name] === validators) {
                return prevState; // avoid unnecessary state change if validators haven't changed
            }
            return {
                ...prevState,
                validators: {
                    ...prevState.validators,
                    [name]: validators || []
                },
                errors: {
                    ...prevState.errors,
                    [name]: [] // clear errors for the field
                }
            };
        });

        return () => {
            setFormState(prevState => {
                const { data, errors, validators: currentValidators } = prevState;
                delete data[name];
                errors && delete errors[name];
                currentValidators && delete currentValidators[name];
                return { data, errors, validators: currentValidators };
            });
        };
    }, []);

    const contextValue = {
        errors: formState.errors,
        data: formState.data,
        setFieldValue,
        registerInput
    };

    FormProvider = FormContext<State>(contextValue);

    return (
        <FormProvider.Provider value={contextValue}>
            <form onSubmit={onSubmitHandler} onReset={onResetHandler} className={props.className} id={props.id}>
                {props.children}
            </form>
        </FormProvider.Provider>
    );
};

export default Form;

export { FormProvider };
