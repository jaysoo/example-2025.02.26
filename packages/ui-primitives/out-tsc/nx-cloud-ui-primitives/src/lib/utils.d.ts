import { LegacyRef, MutableRefObject, RefCallback } from 'react';
export declare function mergeRefs<T = any>(refs: Array<MutableRefObject<T> | LegacyRef<T>>): RefCallback<T>;
export type KeyValuePair = Record<string, string | boolean | number>;
/**
 * Maps to a Key: Value table in the email body
 * ----------------------------------------
 * | Current URL: https://cloud.nx.app/orgs
 * | Key: Value
 * ----------------------------------------
 **/
export declare function formatKeyValuePair(info: KeyValuePair): string;
