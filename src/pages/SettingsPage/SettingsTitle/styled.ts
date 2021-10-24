import { styled } from '@mui/material/styles'

import { Typography } from 'shared/UIKit/Typography'

export const StyledTitle = styled(Typography)((props) => {
  const { theme, gutterBottom } = props

  return {
    ...(gutterBottom && {
      marginBottom: theme.spacing(1.5),
    }),
  }
})
