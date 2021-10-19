import type { Media } from '@tramvai/module-client-hints'
import type { Components, ComponentsProps } from '@mui/material/styles'
import mediaQuery from 'css-mediaquery'

const createSsrMediaMatcher = (media: Media) => (query: string): { matches: boolean } => {
  const matches = mediaQuery.match(query, {
    type: 'screen',
    width: `${media.width}px`,
  })

  return { matches }
}

const createMuiUseMediaQueryDefaultProps = (media: Media): ComponentsProps['MuiUseMediaQuery'] => {
  const ssrMatchMedia = createSsrMediaMatcher(media)

  return {
    ssrMatchMedia,
  }
}

export const createMuiUseMediaQueryComponent = (media: Media): Components['MuiUseMediaQuery'] => {
  const defaultProps = createMuiUseMediaQueryDefaultProps(media)

  return {
    defaultProps,
  }
}
