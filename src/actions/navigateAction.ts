import { createAction } from '@tramvai/core'
import { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router'

export const navigateAction = createAction({
  name: 'navigate-action',
  fn: (
    context,
    url: string,
    { pageService }: { pageService: typeof PAGE_SERVICE_TOKEN }
  ) => {
    // Using pageService to navigate between pages
    return pageService.navigate({ url })
  },
  // deps allows you to use any DI dependency in actions
  deps: {
    pageService: PAGE_SERVICE_TOKEN,
  },
})
