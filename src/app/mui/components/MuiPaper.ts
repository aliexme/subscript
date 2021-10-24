import type { Components, ComponentsProps } from '@mui/material/styles'

const createMuiPaperDefaultProps = (): ComponentsProps['MuiPaper'] => {
  return {
    elevation: 8,
  }
}

export const createMuiPaperComponent = (): Components['MuiPaper'] => {
  const defaultProps = createMuiPaperDefaultProps()
  return { defaultProps }
}
