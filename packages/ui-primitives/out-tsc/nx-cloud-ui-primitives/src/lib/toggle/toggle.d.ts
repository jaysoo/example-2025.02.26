import { HTMLAttributes, ReactElement } from 'react';
type ToggleValue = string | number;
export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue?: ToggleValue;
    value?: ToggleValue;
    onValueChange?: (value: ToggleValue) => void;
    children: ReactElement[] | ReactElement;
}
export declare const Toggle: import("react").ForwardRefExoticComponent<ToggleProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
