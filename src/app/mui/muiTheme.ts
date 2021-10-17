import { createTheme } from '@mui/material/styles'

import type { Theme } from 'modules/theming'

import { createMuiPalette } from './muiPalette'

export const createMuiTheme = (theme: Theme) => {
  const muiPalette = createMuiPalette(theme)

  return createTheme({
    palette: muiPalette,
  })
}
