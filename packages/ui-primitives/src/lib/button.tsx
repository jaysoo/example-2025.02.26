import { Link, LinkProps } from '@remix-run/react';
import type { ComponentProps, ReactElement } from 'react';
import {
  AnchorHTMLAttributes,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react';
import { cx } from './ctx';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'secondary-danger';
export type ButtonSize = 'large' | 'default' | 'small';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode | ReactNode[];
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-500 dark:bg-sky-500 text-white group-hover:bg-blue-600 dark:group-hover:bg-sky-600 group-focus:ring-2 group-focus:ring-blue-500 dark:group-focus:ring-sky-500 group-focus:ring-offset-2',
  secondary:
    'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 group-hover:bg-slate-50 dark:group-hover:bg-slate-700 group-focus:ring-2 group-focus:ring-blue-500 dark:group-focus:ring-sky-500 group-focus:ring-offset-2',
  danger:
    'border border-transparent bg-red-600 dark:bg-red-500 text-white group-hover:bg-red-700 dark:group-hover:bg-red-600 group-focus:outline-none group-focus:ring-2 group-focus:ring-red-500 dark:group-focus:ring-red-600 group-focus:ring-offset-2',
  'secondary-danger':
    'border border-red-300 dark:border-red-700 bg-white dark:bg-red-800 text-red-700 dark:text-red-200 group-hover:bg-red-50 dark:group-hover:bg-red-700 group-focus:ring-2 group-focus:ring-red-500 dark:group-focus:ring-red-500 group-focus:ring-offset-2',
};
const sizes: Record<ButtonSize, string> = {
  large: 'space-x-4 px-4 py-2 text-lg',
  default: 'space-x-3 px-4 py-2 text-sm',
  small: 'space-x-2 px-2.5 py-1.5 text-sm',
};

/**
 * Shared layout containing specific button styles.
 */
function getLayoutClassName(className = ''): string {
  return cx(
    'group relative inline-flex opacity-100 focus:outline-none disabled:opacity-80 disabled:cursor-not-allowed transition',
    className,
  );
}

/**
 * This is the interior of the button that is properly styled.
 */
function ButtonInner({
  children,
  variant = 'primary',
  size = 'default',
}: ButtonProps): ReactElement {
  return (
    <span
      className={cx(
        'flex h-full w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent font-medium shadow-sm transition',
        variantStyles[variant],
        sizes[size],
      )}
    >
      {children}
    </span>
  );
}

/**
 * Simple button that looks like a button.
 */
export const Button = forwardRef(function (
  {
    children,
    className = '',
    variant = 'primary',
    size = 'large',
    ...props
  }: ButtonProps & ComponentProps<'button'>,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement {
  return (
    <button ref={ref} className={getLayoutClassName(className)} {...props}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </button>
  );
});

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
} & HrefOrTo &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

/**
 * A link that looks like a button.
 * - If `href` is passed in, `a` tag will be rendered with `target=_blank` and `rel="noreferrer"`
 */
export const ButtonLink = forwardRef(function (
  {
    children,
    className = '',
    href,
    to,
    size = 'default',
    variant = 'primary',
    title = '',
    preventScrollReset = false,
    ...props
  }: ButtonLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
): ReactElement {
  return to ? (
    <Link
      ref={ref}
      to={to}
      title={title}
      className={getLayoutClassName(className)}
      preventScrollReset={preventScrollReset}
      {...props}
    >
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </Link>
  ) : (
    <a
      ref={ref}
      href={href}
      title={title}
      className={getLayoutClassName(className)}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </a>
  );
});
