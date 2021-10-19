import React, { forwardRef } from 'react'
import { Link as RouterLink } from '@tramvai/module-router'

export type RouteLinkProps = React.ComponentProps<typeof RouterLink>

export const RouteLink = forwardRef<never, RouteLinkProps>((props, _ref) => {
  const { ...routerLinkProps } = props

  return <RouterLink {...routerLinkProps} />
})
