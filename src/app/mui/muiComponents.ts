import type { Media } from '@tramvai/module-client-hints'
import type { Components } from '@mui/material/styles'
import type { Shape } from '@mui/system/createTheme/shape'
import type { Spacing } from '@mui/system/createTheme/createSpacing'

import { createMuiPaperComponent } from './components/MuiPaper'
import { createMuiButtonComponent } from './components/MuiButton'
import { createMuiListItemButtonComponent } from './components/MuiListItemButton'
import { createMuiToggleButtonGroupComponent } from './components/MuiToggleButtonGroup'
import { createMuiDialogComponent } from './components/MuiDialog'
import { createMuiUseMediaQueryComponent } from './components/MuiUseMediaQuery'

export const createMuiComponents = (shape: Shape, spacing: Spacing, media: Media): Components => {
  const MuiPaperComponent = createMuiPaperComponent()
  const MuiButtonComponent = createMuiButtonComponent(spacing)
  const MuiListItemButtonComponent = createMuiListItemButtonComponent(shape)
  const MuiToggleButtonGroupComponent = createMuiToggleButtonGroupComponent()
  const MuiDialogComponent = createMuiDialogComponent()
  const MuiUseMediaQueryComponent = createMuiUseMediaQueryComponent(media)

  return {
    MuiPaper: MuiPaperComponent,
    MuiButton: MuiButtonComponent,
    MuiListItemButton: MuiListItemButtonComponent,
    MuiToggleButtonGroup: MuiToggleButtonGroupComponent,
    MuiDialog: MuiDialogComponent,
    MuiUseMediaQuery: MuiUseMediaQueryComponent,
  }
}
