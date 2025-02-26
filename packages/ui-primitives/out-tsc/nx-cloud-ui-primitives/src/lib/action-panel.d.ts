import type { ComponentProps, ReactElement } from 'react';
import { ReactNode } from 'react';
export declare function ActionPanelTitle({ children, }: {
    children: ReactNode;
}): ReactElement;
export declare function ActionPanelBody({ children, }: {
    children: ReactNode;
}): ReactElement;
export declare function ActionPanelActions({ children, }: {
    children: ReactNode;
}): ReactElement;
/**
 * @example
 * <ActionPanel>
 *   <ActionPanelTitle>My title</ActionPanelTitle>
 *   <ActionPanelBody>
 *     <p>My text</p>
 *   </ActionPanelBody>
 *   <ActionPanelActions>
 *     <Button ... />
 *   </ActionPanelActions>
 * </ActionPanel>
 */
export declare function ActionPanel({ children, ...props }: {
    children: ReactNode;
} & ComponentProps<'div'>): ReactElement;
