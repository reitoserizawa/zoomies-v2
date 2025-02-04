import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import { InputProps } from '../../ui/form.styles';
import { P } from '../../ui/text-tags.styles';

import { useStateContext } from '.';

import DatePicker from 'react-datepicker';
import Error from '../Error';

const DatePickerStyles = createGlobalStyle<InputProps>`
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container input{
        width: 100%;
        border: none;

        padding: 8px;

        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .react-datepicker__input-container &:focus {
        outline: 2px solid ${({ $outlineRed }) => ($outlineRed ? 'red' : '#999')};
    }
`;

interface FormInputProps<State> {
    name: keyof State;
    validators?: ((value: any, data: Partial<any>) => string[])[];
    placeholder?: string;
    type?: string;
    label?: string;
}

const FormDate = <State,>({ name, validators, placeholder, label, type = 'text' }: FormInputProps<State>) => {
    const { formState, registerInput, handleDateChange } = useStateContext<State>();

    useEffect(() => {
        const unregister = registerInput({ name, validators });
        return unregister;
    }, [name, validators, registerInput]);

    const { data, errors } = formState;

    return (
        <>
            {label ? <P>{label}</P> : null}
            <DatePicker selected={data[name] ? (data[name] as unknown as Date) : null} onChange={date => handleDateChange(name, date)} />
            <DatePickerStyles $outlineRed={!data[name]} />
            {errors[name] && errors[name]?.map((error, i) => <Error key={i} message={error} />)}
        </>
    );
};

export default FormDate;
