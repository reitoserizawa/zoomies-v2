import React, { useEffect } from 'react';
import { useStateContext } from '.';
import { Input } from '../../ui/form.styles';
import { P } from '../../ui/text-tags.styles';
import Error from '../Error';

interface FormInputProps<State> {
    name: keyof State;
    validators?: ((value: any, data: Partial<any>) => string[])[];
    placeholder?: string;
    type?: string;
    label?: string;
}

const FormInput = <State,>({ name, validators, placeholder, label, type = 'text' }: FormInputProps<State>) => {
    const { formState, registerInput, handleChange } = useStateContext<State>();

    useEffect(() => {
        const unregister = registerInput({ name, validators });
        return unregister;
    }, [name, validators, registerInput]);

    const { data, errors } = formState;

    return (
        <>
            {label ? <P $marginLeft={8}>{label}</P> : null}
            <Input name={name as string} value={data[name] ? (data[name] as string) : ''} onChange={e => handleChange(e)} placeholder={placeholder} type={type} />
            {errors[name] && errors[name]?.map((error, i) => <Error key={i} message={error} />)}
        </>
    );
};

export default FormInput;
