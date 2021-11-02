import type { Components, ComponentsProps } from '@mui/material/styles'

const createMuiDialogDefaultProps = (): ComponentsProps['MuiDialog'] => {
  return {
    fullWidth: true,
    maxWidth: 'xs',
    scroll: 'body',
  }
}

export const createMuiDialogComponent = (): Components['MuiDialog'] => {
  const defaultProps = createMuiDialogDefaultProps()
  return { defaultProps }
}
