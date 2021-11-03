export enum Pages {
  MAIN = 'main',
  SETTINGS = 'settings',
}

export const PagesPath: Record<keyof typeof Pages, string> = {
  MAIN: '/',
  SETTINGS: '/settings/',
}
