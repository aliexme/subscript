import React from 'react'

import { MuiLocalizationProvider, MuiThemeProvider } from 'shared/lib/mui'
import type { ObjectType } from 'shared/utils/objects'

export const LayoutWrapper: React.FC = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider>
      <MuiLocalizationProvider>{children}</MuiLocalizationProvider>
    </MuiThemeProvider>
  )
}

export const layoutWrapper = <P extends ObjectType>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  return (wrappedComponentProps) => {
    return (
      <LayoutWrapper>
        <WrappedComponent {...wrappedComponentProps} />
      </LayoutWrapper>
    )
  }
}
