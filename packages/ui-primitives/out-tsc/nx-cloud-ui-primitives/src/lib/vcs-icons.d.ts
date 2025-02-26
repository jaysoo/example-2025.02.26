import { SUPPORTED_VCS_PROVIDER } from '@nx-cloud/model-db';
import { ReactNode } from 'react';
export declare const VCS_PROVIDER_ICON: Record<SUPPORTED_VCS_PROVIDER, ReactNode>;
export declare const VCS_PROVIDER_ICON_SMALL: Record<SUPPORTED_VCS_PROVIDER, ReactNode>;
export declare const BranchIcon: ({ height, width, color, }: {
    height?: number;
    width?: number;
    color?: string;
}) => import("react/jsx-runtime").JSX.Element;
