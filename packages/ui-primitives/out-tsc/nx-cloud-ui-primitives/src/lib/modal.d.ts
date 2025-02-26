import { ReactNode } from 'react';
export interface ModalProps {
    children: ReactNode;
    title: string;
    initialOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    modalPanelClasses?: string;
}
export interface ModalHandle {
    openModal: () => void;
    closeModal: () => void;
}
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<ModalHandle | undefined>>;
