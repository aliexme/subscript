import type { Shape } from '@mui/system'

import type { Theme } from 'modules/theming'

export const createMuiShape = (theme: Theme): Shape => {
  return {
    borderRadius: theme.shape.borderRadius,
  }
}
