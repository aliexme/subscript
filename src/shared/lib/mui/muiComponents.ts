import type { Media } from '@tramvai/module-client-hints'
import type { Components } from '@mui/material/styles'
import type { Shape } from '@mui/system/createTheme/shape'
import type { Spacing } from '@mui/system/createTheme/createSpacing'

import { createMuiPaperComponent } from './muiComponents/MuiPaper'
import { createMuiButtonComponent } from './muiComponents/MuiButton'
import { createMuiListItemButtonComponent } from './muiComponents/MuiListItemButton'
import { createMuiToggleButtonGroupComponent } from './muiComponents/MuiToggleButtonGroup'
import { createMuiDialogComponent } from './muiComponents/MuiDialog'
import { createMuiUseMediaQueryComponent } from './muiComponents/MuiUseMediaQuery'

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
