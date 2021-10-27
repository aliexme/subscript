export type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U

export type PartialProp<T, K extends keyof T> = {
  [P in K]?: T[P]
}
