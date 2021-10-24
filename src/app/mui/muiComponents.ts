import type { Media } from '@tramvai/module-client-hints'
import type { Components } from '@mui/material/styles'
import type { Shape } from '@mui/system/createTheme/shape'

import { createMuiPaperComponent } from './components/MuiPaper'
import { createMuiListItemButtonComponent } from './components/MuiListItemButton'
import { createMuiToggleButtonGroupComponent } from './components/MuiToggleButtonGroup'
import { createMuiUseMediaQueryComponent } from './components/MuiUseMediaQuery'

export const createMuiComponents = (shape: Shape, media: Media): Components => {
  const MuiPaperComponent = createMuiPaperComponent()
  const MuiListItemButtonComponent = createMuiListItemButtonComponent(shape)
  const MuiToggleButtonGroupComponent = createMuiToggleButtonGroupComponent()
  const MuiUseMediaQueryComponent = createMuiUseMediaQueryComponent(media)

  return {
    MuiPaper: MuiPaperComponent,
    MuiListItemButton: MuiListItemButtonComponent,
    MuiToggleButtonGroup: MuiToggleButtonGroupComponent,
    MuiUseMediaQuery: MuiUseMediaQueryComponent,
  }
}
