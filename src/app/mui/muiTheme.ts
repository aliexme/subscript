import type { Media } from '@tramvai/module-client-hints'
import { createTheme } from '@mui/material/styles'

import type { Theme } from 'modules/theming'

import { createMuiPalette } from './muiPalette'
import { createMuiComponents } from './muiComponents'

export const createMuiTheme = (theme: Theme, media: Media) => {
  const muiPalette = createMuiPalette(theme)
  const muiComponents = createMuiComponents(media)

  return createTheme({
    palette: muiPalette,
    components: muiComponents,
  })
}
