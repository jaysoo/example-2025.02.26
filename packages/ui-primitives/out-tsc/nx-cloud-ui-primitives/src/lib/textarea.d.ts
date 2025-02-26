import { TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className: string;
    hasError: boolean;
    ariaDescribedby: string;
}
export declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
