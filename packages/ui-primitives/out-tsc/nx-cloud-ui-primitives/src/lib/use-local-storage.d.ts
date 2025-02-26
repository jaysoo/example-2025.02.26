/**
 * Get and set values from local storage (remix friendly)
 * https://remix.run/docs/en/1.19.3/guides/constraints#rendering-with-browser-only-apis
 */
export declare function useLocalStorage(key: string, defaultValue?: string | null): [string | null, (value: string) => void];
