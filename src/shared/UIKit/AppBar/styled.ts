import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'

export type StyledAppBarProps = {
  gutterBottom?: boolean
}

const shouldForwardAppBarProp = (prop: PropertyKey): boolean => {
  return prop !== 'gutterBottom'
}

export const StyledMuiAppBar = styled(MuiAppBar, { shouldForwardProp: shouldForwardAppBarProp })<StyledAppBarProps>(
  (props) => {
    const { theme, gutterBottom } = props

    return {
      ...(gutterBottom && {
        marginBottom: theme.spacing(3),
      }),
    }
  }
)
