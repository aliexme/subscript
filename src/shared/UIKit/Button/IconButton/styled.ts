import MuiIconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export type StyledIconButtonProps = {
  shape?: 'circular' | 'rounded'
}

const shouldForwardIconButtonProp = (prop: PropertyKey): boolean => {
  return prop !== 'shape'
}

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: shouldForwardIconButtonProp,
})<StyledIconButtonProps>((props) => {
  const { theme, shape = 'rounded' } = props

  return {
    ...(shape === 'rounded' && {
      borderRadius: theme.shape.borderRadius,
    }),
  }
})
