export type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U

export type PartialProp<T, K extends keyof T> = Overwrite<
  T,
  {
    [P in K]?: T[P]
  }
>

export type RequiredProp<T, K extends keyof T> = Overwrite<
  T,
  {
    [P in K]-?: T[P]
  }
>
