export declare function useFullscreen<T extends HTMLElement = any>(): {
    readonly ref: (element: T | null) => void;
    readonly toggle: () => Promise<void>;
    readonly isFullscreen: boolean;
};
