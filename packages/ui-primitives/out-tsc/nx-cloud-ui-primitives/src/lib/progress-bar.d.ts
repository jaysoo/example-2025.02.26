import { Color } from '@nx-cloud/util-primitives';
import { HTMLAttributes } from 'react';
/**
 * PROGRESS BAR
 */
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    label?: string;
    tooltip?: string;
    showAnimation?: boolean;
    color?: Color;
}
export declare const ProgressBar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const sumNumericArray: (arr: number[]) => number;
export interface CategoryBarProps extends HTMLAttributes<HTMLDivElement> {
    values: number[];
    colors?: Color[];
    markerValue?: number;
    showLabels?: boolean;
    tooltip?: string;
    showAnimation?: boolean;
}
export declare const CategoryBar: import("react").ForwardRefExoticComponent<CategoryBarProps & import("react").RefAttributes<HTMLDivElement>>;
