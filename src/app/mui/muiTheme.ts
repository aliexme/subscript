import type { Media } from '@tramvai/module-client-hints'
import { createTheme } from '@mui/material/styles'

import type { Theme } from 'modules/theming'

import { createMuiPalette } from './muiPalette'
import { createMuiShape } from './muiShape'
import { createMuiShadows } from './muiShadows'
import { createMuiSpacing } from './muiSpacing'
import { createMuiComponents } from './muiComponents'

export const createMuiTheme = (theme: Theme, media: Media) => {
  const muiPalette = createMuiPalette(theme)
  const muiShape = createMuiShape(theme)
  const muiShadows = createMuiShadows()
  const muiSpacing = createMuiSpacing()
  const muiComponents = createMuiComponents(muiShape, muiSpacing, media)

  return createTheme({
    palette: muiPalette,
    shape: muiShape,
    shadows: muiShadows,
    spacing: muiSpacing,
    components: muiComponents,
  })
}
