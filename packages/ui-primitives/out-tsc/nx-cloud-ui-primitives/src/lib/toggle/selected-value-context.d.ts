export interface SelectedValueContextValue {
    selectedValue: any;
    handleValueChange: ((value: any) => void) | undefined;
}
export declare const SelectedValueContext: import("react").Context<SelectedValueContextValue>;
