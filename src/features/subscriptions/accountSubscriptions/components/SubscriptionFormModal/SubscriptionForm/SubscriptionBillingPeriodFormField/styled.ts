import { styled } from '@mui/material/styles'

import { FormLabel } from 'shared/UIKit/Form'

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(1),
}))
