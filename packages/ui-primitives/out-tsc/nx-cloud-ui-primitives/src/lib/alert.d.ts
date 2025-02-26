import type { ComponentProps, ReactElement } from 'react';
import { ReactNode } from 'react';
type AlertTypes = 'information' | 'error' | 'notice' | 'success' | 'warning';
/**
 * @example
 * <Alert type="notice"
 *        title="My alert title"
 *        handleClose={myFunction}>
 *   <p>My notice content</p>
 * </Alert>
 */
export declare function Alert({ children, handleClose, title, type, ...props }: {
    children?: ReactNode[] | ReactNode | null;
    handleClose?: (() => void) | null;
    title: string;
    type: AlertTypes;
} & ComponentProps<'div'>): ReactElement;
export {};
