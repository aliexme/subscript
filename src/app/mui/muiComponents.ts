import type { Media } from '@tramvai/module-client-hints'
import type { Shape } from '@mui/system'
import type { Components } from '@mui/material/styles'

import { createMuiPaperComponent } from './components/MuiPaper'
import { createMuiListItemButtonComponent } from './components/MuiListItemButton'
import { createMuiUseMediaQueryComponent } from './components/MuiUseMediaQuery'

export const createMuiComponents = (shape: Shape, media: Media): Components => {
  const MuiPaperComponent = createMuiPaperComponent()
  const MuiListItemButtonComponent = createMuiListItemButtonComponent(shape)
  const MuiUseMediaQueryComponent = createMuiUseMediaQueryComponent(media)

  return {
    MuiPaper: MuiPaperComponent,
    MuiListItemButton: MuiListItemButtonComponent,
    MuiUseMediaQuery: MuiUseMediaQueryComponent,
  }
}
