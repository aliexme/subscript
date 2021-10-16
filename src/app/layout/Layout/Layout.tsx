import React from 'react'

import { MuiThemeProvider } from '../../mui'

export const Layout: React.FC = (props) => {
  const { children } = props

  return <MuiThemeProvider>{children}</MuiThemeProvider>
}
