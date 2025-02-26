import { ButtonHTMLAttributes, ElementType } from 'react';
export interface ToggleItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string | number;
    text?: string;
    icon?: ElementType;
    iconColor?: 'default' | 'red';
}
export declare const ToggleItem: import("react").ForwardRefExoticComponent<ToggleItemProps & import("react").RefAttributes<HTMLButtonElement>>;
