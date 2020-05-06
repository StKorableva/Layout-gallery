import React from 'react';
import classnames from 'classnames';

import './checkbox.scss';

export type CheckboxType = {
    labelClassName?: string;
    checkboxClassName?: string;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
};

export default function Checkbox(props: CheckboxType) {
    const { labelClassName, checkboxClassName, value, onChange, label, name, disabled, onClick, ...rest } = props;
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classnames(checkboxClassName, 'checkbox')} onClick={onClick}>
            <input
                className='input'
                type="checkbox"
                onChange={onChange}
                name={name}
                checked={value}
                disabled={disabled}
                {...rest}
            />
            <div className='checkmark'/>
            <LabelMaybe />
        </label>
    );

    function LabelMaybe() {
        if (label === undefined) {
            return null;
        }
        return <span className={classnames(labelClassName, 'label')}>{label}</span>;
    }
}
