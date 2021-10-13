export enum Pages {
  MAIN = 'main',
  SECOND = 'second',
}

export const PagesPath: Record<keyof typeof Pages, string> = {
  MAIN: '/',
  SECOND: '/second/',
}
