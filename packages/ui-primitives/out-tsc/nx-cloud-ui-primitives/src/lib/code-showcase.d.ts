import type { ComponentProps, ReactElement } from 'react';
export declare function CodeShowcase({ content, whitespaceBehavior, ...props }: {
    content: string;
    whitespaceBehavior?: 'normal' | 'pre';
} & ComponentProps<'div'>): ReactElement;
