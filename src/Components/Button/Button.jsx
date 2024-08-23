import { cva, variants } from 'class-variance-authority';
import React from 'react';
import './Button.css';

export const ButtonStyles = cva('base', {
    variants: {
        intent: {
            primary: 'primary-intent',
            secondary: 'secondary-intent',
            teriaty: 'teriaty-intent'
        },
        size: {
            small: 'small-size',
            large: 'large-size'
        },
        defaultVariants: {
            intent: "primary",
            size: "small",
        }
    }
});

const Button = ({ intent, size, label, ...props }) => {

    return (
        <button
            className={
                ButtonStyles({ intent, size })
            }
            {...props}
        >{label}</button>
    )
}

export default Button;