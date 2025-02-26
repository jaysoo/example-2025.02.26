import { Dispatch, SetStateAction } from 'react';
export declare const useInternalState: <T>(defaultValueProp: T, valueProp: T) => [T, Dispatch<SetStateAction<T>>];
