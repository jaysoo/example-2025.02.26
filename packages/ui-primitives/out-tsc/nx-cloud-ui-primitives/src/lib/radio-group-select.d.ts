import type { ReactElement } from 'react';
interface RadioGroupOption {
    value: any;
    name: string;
    description?: string;
}
export declare function RadioGroupSelect({ label, showGroupLabel, options, value, handleSelect, }: {
    label: string;
    showGroupLabel: boolean;
    options: RadioGroupOption[];
    value: any;
    handleSelect: (value: any) => void;
}): ReactElement;
export {};
