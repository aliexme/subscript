import type { Shape } from '@mui/system'
import type { Components, ComponentsOverrides } from '@mui/material/styles'

const createMuiListItemButtonStyleOverrides = (shape: Shape): ComponentsOverrides['MuiListItemButton'] => {
  return {
    root: {
      borderRadius: shape.borderRadius,
    },
  }
}

export const createMuiListItemButtonComponent = (shape: Shape): Components['MuiListItemButton'] => {
  const styleOverrides = createMuiListItemButtonStyleOverrides(shape)
  return { styleOverrides }
}
