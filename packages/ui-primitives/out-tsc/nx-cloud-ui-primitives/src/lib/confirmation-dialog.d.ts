import type { ReactElement } from 'react';
import { ReactNode } from 'react';
export declare function ConfirmationDialogTitle({ children, }: {
    children: ReactNode;
}): ReactElement;
export declare function ConfirmationDialogContent({ children, }: {
    children: ReactNode;
}): ReactElement;
interface ConfirmationDialogProps {
    children: ReactNode[];
    confirmText?: string;
    cancelText?: string;
    isOpen: boolean;
    handleClose: () => void;
    confirmButton?: ReactNode;
    handleConfirm?: () => void;
    cancelButton?: ReactNode;
    handleCancel?: () => void;
    variant?: 'red' | 'blue';
}
export declare function ConfirmationDialog({ cancelText, children, confirmText, isOpen, confirmButton, handleConfirm, cancelButton, handleCancel, handleClose, variant, }: ConfirmationDialogProps): ReactElement;
export {};
