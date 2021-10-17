import React, { useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import { useTheme } from 'modules/theming'

import { createMuiTheme } from './muiTheme'

export const MuiThemeProvider: React.FC = (props) => {
  const { children } = props

  const theme = useTheme()

  const muiTheme = useMemo(() => {
    return createMuiTheme(theme)
  }, [theme])

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}
