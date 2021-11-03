import React, { useMemo } from 'react'
import { useStore } from '@tramvai/state'
import { MediaStore } from '@tramvai/module-client-hints'
import { ThemeProvider } from '@mui/material/styles'

import { useTheme } from 'modules/theming'

import { createMuiTheme } from '../../muiTheme'

export const MuiThemeProvider: React.FC = (props) => {
  const { children } = props

  const theme = useTheme()
  const media = useStore(MediaStore)

  const muiTheme = useMemo(() => {
    return createMuiTheme(theme, media)
  }, [theme, media])

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}
