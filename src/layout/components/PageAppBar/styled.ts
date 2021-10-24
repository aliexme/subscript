import { styled } from '@mui/material/styles'

import { OpenAsideNavMenuButton } from 'features/asideNavMenu'

export const StyledOpenAsideNavMenuButton = styled(OpenAsideNavMenuButton)(({ theme }) => ({
  flexShrink: 0,
  marginRight: theme.spacing(2),
}))
