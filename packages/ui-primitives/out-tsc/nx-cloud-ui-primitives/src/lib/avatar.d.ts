import type { ComponentProps, ReactElement } from 'react';
export declare function Avatar({ className, imageUrl, name, ...props }: {
    className?: string;
    imageUrl?: string | null;
    name: string;
} & ComponentProps<'span'>): ReactElement;
