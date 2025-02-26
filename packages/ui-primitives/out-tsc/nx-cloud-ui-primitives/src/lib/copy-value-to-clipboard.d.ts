import type { ReactElement } from 'react';
/**
 * Small and non-styled component giving you the "Click to copy" feature.
 * For a styled approach, use the CodeShowcase component instead.
 * @param {string} actionLabel (optional) String shown on hover, default is `Click to copy`
 * @param {string} displayedValue String shown representing the value, useful to show "****" instead if value is a secret
 * @param {string} value
 * @constructor
 */
export declare function CopyValueToClipboard({ actionLabel, displayedValue, value, }: {
    actionLabel?: string;
    displayedValue: string;
    value: string;
}): ReactElement;
export declare function CopyValueToClipboardIconOnly({ displayedValue, value, }: {
    displayedValue: string;
    value: string;
}): ReactElement;
export interface CopyToClipboardButtonProps {
    text: string;
    tooltipText?: string;
    tooltipAlignment?: 'left' | 'right';
    className?: string;
    children?: React.ReactNode;
}
export declare function CopyToClipboardButton({ text, tooltipAlignment, tooltipText, className, children, }: CopyToClipboardButtonProps): import("react/jsx-runtime").JSX.Element;
