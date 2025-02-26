import { Color } from '@nx-cloud/util-primitives';
import { HTMLAttributes, ReactNode } from 'react';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    size?: Size;
    color?: Color;
    showAnimation?: boolean;
    tooltip?: string;
    radius?: number;
    strokeWidth?: number;
    children?: ReactNode;
}
export declare const ProgressCircle: import("react").ForwardRefExoticComponent<ProgressCircleProps & import("react").RefAttributes<HTMLDivElement>>;
