import { LinkProps } from '@remix-run/react';
import { AnchorHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'secondary-danger';
export type ButtonSize = 'large' | 'default' | 'small';
interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode | ReactNode[];
}
/**
 * Simple button that looks like a button.
 */
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
type WithHref = {
    href: string;
    to?: never;
};
type WithTo = {
    to: LinkProps['to'];
    href?: never;
};
type HrefOrTo = WithHref | WithTo;
export type ButtonLinkProps = ButtonProps & {
    className?: string;
    title: string;
    reloadDocument?: boolean;
    preventScrollReset?: boolean;
} & HrefOrTo & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
/**
 * A link that looks like a button.
 * - If `href` is passed in, `a` tag will be rendered with `target=_blank` and `rel="noreferrer"`
 */
export declare const ButtonLink: import("react").ForwardRefExoticComponent<ButtonLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export {};
