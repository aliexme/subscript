import React from 'react'

import type { ObjectType } from 'shared/utils/objects'

import { MuiThemeProvider } from '../../mui'

export const LayoutWrapper: React.FC = (props) => {
  const { children } = props

  return <MuiThemeProvider>{children}</MuiThemeProvider>
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
