import type { Components, ComponentsOverrides, ComponentsProps } from '@mui/material/styles'

const createMuiToggleButtonGroupDefaultProps = (): ComponentsProps['MuiToggleButtonGroup'] => {
  return {
    exclusive: true,
  }
}

const createMuiToggleButtonGroupStyleOverrides = (): ComponentsOverrides['MuiToggleButtonGroup'] => {
  return {
    grouped: {
      flexGrow: 1,
    },
  }
}

export const createMuiToggleButtonGroupComponent = (): Components['MuiToggleButtonGroup'] => {
  const defaultProps = createMuiToggleButtonGroupDefaultProps()
  const styleOverrides = createMuiToggleButtonGroupStyleOverrides()
  return { defaultProps, styleOverrides }
}
