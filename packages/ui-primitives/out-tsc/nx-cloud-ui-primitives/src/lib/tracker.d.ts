import { HTMLAttributes } from 'react';
export interface TrackerBlockProps {
    key?: string | number;
    color?: string;
    tooltip?: string;
}
export interface TrackerProps extends HTMLAttributes<HTMLDivElement> {
    data: TrackerBlockProps[];
}
export declare const Tracker: import("react").ForwardRefExoticComponent<TrackerProps & import("react").RefAttributes<HTMLDivElement>>;
