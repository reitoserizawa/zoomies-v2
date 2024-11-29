import React, { useContext, useEffect } from 'react';

import { FormProvider } from '.';
import { FormContextProps } from './FormContext'; // Import the correct FormContext

interface WithFormProps<State> {
    name: keyof State;
    validators?: ((value: any, data: Partial<State>) => string[])[];
    onChange?: (value: any) => void;
}

const withForm = <State, P extends {}>(InputComponent: React.ComponentType<P & WithFormProps<State>>) => {
    const WrappedWithForm = (props: P & WithFormProps<State>) => {
        const { errors, data, setFieldValue, registerInput } = useContext(FormProvider as React.Context<FormContextProps<State>>);

        useEffect(() => {
            registerInput({
                name: props.name,
                validators: props.validators
            });
        }, [registerInput, props]);

        // Handle value changes
        const onChange = (val: any) => {
            setFieldValue(props.name, val);
            if (props.onChange) {
                props.onChange(val);
            }
        };

        // Get current value and errors for the field
        const inputValue = data[props.name];
        const inputErrors = errors ? errors[props.name] : [];

        // render the wrapped component with injected props
        return <InputComponent {...props} errors={inputErrors} value={inputValue} onChange={onChange} />;
    };

    return WrappedWithForm;
};

export default withForm;
