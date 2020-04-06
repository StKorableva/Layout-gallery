import React from 'react';

export interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isDisabled?: boolean;
}

export default function Button(props: IButtonProps) {
    const {children, className, onClick, isDisabled=false } = props;
    return (
        <button
            className={className}
            onClick={onClick}
            type='button'
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}