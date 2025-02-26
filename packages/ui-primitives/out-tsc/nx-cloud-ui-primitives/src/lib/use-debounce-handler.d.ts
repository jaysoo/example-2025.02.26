interface Handler<P extends any[]> {
    (...params: P): void;
}
/**
 * Creates a debounced version of the handler that is passed. The invocation of [fn] is
 * delayed for [delay] milliseconds from the last invocation of the debounced function.
 *
 * This implementation adds to the lodash implementation in that it handles updates to the
 * delay value.
 */
export declare function useDebouncedHandler<P extends any[]>(fn: Handler<P>, delay: number): Handler<P>;
export {};
