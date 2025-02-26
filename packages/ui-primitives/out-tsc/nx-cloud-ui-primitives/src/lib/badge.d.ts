type BadgeType = 'notice' | 'information' | 'error' | 'success' | 'warning';
export declare const Badge: import("react").ForwardRefExoticComponent<Omit<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & {
    type: BadgeType;
}, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
export {};
