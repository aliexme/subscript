export type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U
