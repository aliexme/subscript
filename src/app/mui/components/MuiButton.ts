import type { Components, ComponentsOverrides } from '@mui/material/styles'
import type { Spacing } from '@mui/system/createTheme/createSpacing'

export const createMuiButtonStyleOverrides = (spacing: Spacing): ComponentsOverrides['MuiButton'] => {
  return {
    sizeMedium: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
  }
}

export const createMuiButtonComponent = (spacing: Spacing): Components['MuiButton'] => {
  const styleOverrides = createMuiButtonStyleOverrides(spacing)
  return { styleOverrides }
}
