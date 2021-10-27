import MuiDivider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

export type StyledDividerProps = {
  spacing?: number
}

export const StyledMuiDivider = styled(MuiDivider)<StyledDividerProps>((props) => {
  const { theme, orientation = 'horizontal', spacing } = props

  return {
    ...(orientation === 'horizontal' &&
      spacing && {
        marginTop: theme.spacing(spacing),
        marginBottom: theme.spacing(spacing),
      }),
    ...(orientation === 'vertical' &&
      spacing && {
        marginLeft: theme.spacing(spacing),
        marginRight: theme.spacing(spacing),
      }),
  }
})
