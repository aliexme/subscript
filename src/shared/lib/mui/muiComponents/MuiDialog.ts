import type { Components, ComponentsOverrides, ComponentsProps } from '@mui/material/styles'

const createMuiDialogDefaultProps = (): ComponentsProps['MuiDialog'] => {
  return {
    fullWidth: true,
    maxWidth: 'xs',
    scroll: 'body',
  }
}

const createMuiDialogStyleOverrides = (): ComponentsOverrides['MuiDialog'] => {
  return {
    scrollBody: {
      '& .MuiDialogContent-root': {
        overflow: 'visible',
      },
    },
  }
}

export const createMuiDialogComponent = (): Components['MuiDialog'] => {
  const defaultProps = createMuiDialogDefaultProps()
  const styleOverrides = createMuiDialogStyleOverrides()
  return { defaultProps, styleOverrides }
}
