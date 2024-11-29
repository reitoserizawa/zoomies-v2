import React from 'react';
import classNames from 'classnames';

import withForm from './withForm';

interface InputProps {
    placeholder?: string;
    name: string; // `name` is required for form integration
    value?: string;
    label?: string;
    type?: string;
    errors?: string[];
    onChange?: (value: string) => void;
    validators?: ((value: any, data: any) => string[])[]; // Added validators prop
}

const TextInput = ({ placeholder = '', name = '', value = '', label, type = 'text', errors = [], onChange }: InputProps): JSX.Element => {
    const hasError = errors && errors.length > 0;

    const renderErrors = () => {
        if (!hasError) return null;
        return (
            <ul className='error-messages'>
                {errors.map((message, i) => (
                    <li key={i}>{message}</li>
                ))}
            </ul>
        );
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
    };

    const klass = classNames('form-group', {
        'has-error': hasError
    });

    return (
        <div className={klass}>
            {label && <label>{label}</label>}
            <input name={name as string} type={type} className='form-control' placeholder={placeholder} value={value} onChange={onInputChange} />
            {renderErrors()}
        </div>
    );
};
const FormTextInput = withForm(TextInput);

export default FormTextInput;
