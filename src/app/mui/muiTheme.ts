import type { Media } from '@tramvai/module-client-hints'
import { createTheme } from '@mui/material/styles'

import type { Theme } from 'modules/theming'

import { createMuiPalette } from './muiPalette'
import { createMuiShape } from './muiShape'
import { createMuiComponents } from './muiComponents'

export const createMuiTheme = (theme: Theme, media: Media) => {
  const muiPalette = createMuiPalette(theme)
  const muiShape = createMuiShape(theme)
  const muiComponents = createMuiComponents(muiShape, media)

  return createTheme({
    palette: muiPalette,
    shape: muiShape,
    components: muiComponents,
  })
}
