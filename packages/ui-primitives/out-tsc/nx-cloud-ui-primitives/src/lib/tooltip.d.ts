import { ExtendedRefs, ReferenceType, Strategy } from '@floating-ui/react';
import React from 'react';
export declare const useTooltip: (delay?: number) => {
    tooltipProps: {
        open: boolean;
        x: number;
        y: number;
        refs: {
            reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
            floating: React.MutableRefObject<HTMLElement | null>;
            setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
            setFloating: (node: HTMLElement | null) => void;
        } & ExtendedRefs<ReferenceType>;
        strategy: Strategy;
        getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
};
export interface TooltipProps {
    text?: string | React.ReactNode;
    open: boolean;
    x: number | null;
    y: number | null;
    refs: ExtendedRefs<ReferenceType>;
    strategy: Strategy;
    dataTestId?: string;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}
export declare const Tooltip: {
    ({ text, open, x, y, refs, strategy, getFloatingProps, dataTestId, }: TooltipProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
