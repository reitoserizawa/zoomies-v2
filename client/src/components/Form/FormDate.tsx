import React, { ReactNode, useEffect } from 'react';
import { useStateContext } from '.';
import { Input, InputProps } from '../../ui/form.styles';
import { P } from '../../ui/text-tags.styles';
import { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';

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
            {errors[name] &&
                errors[name]?.map((error, index) => (
                    <div key={index} style={{ color: 'red' }}>
                        {error}
                    </div>
                ))}
        </>
    );
};

export default FormDate;
