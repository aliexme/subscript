import type { Media } from '@tramvai/module-client-hints'
import type { Components } from '@mui/material/styles'

import { createMuiUseMediaQueryComponent } from './components/MuiUseMediaQuery'

export const createMuiComponents = (media: Media): Components => {
  const MuiUseMediaQueryComponent = createMuiUseMediaQueryComponent(media)

  return {
    MuiUseMediaQuery: MuiUseMediaQueryComponent,
  }
}
