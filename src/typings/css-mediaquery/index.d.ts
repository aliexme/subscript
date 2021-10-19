declare module 'css-mediaquery' {
  export type MatchValues = {
    type: 'all' | 'screen'
    width: string
  }

  export function match(mediaQuery: string, values: MatchValues): boolean

  export function parse(mediaQuery: string): any[]
}
