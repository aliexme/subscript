import MuiToggleButton from '@mui/material/ToggleButton'
import { styled } from '@mui/material/styles'

export const StyledMuiToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}))
