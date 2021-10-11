import { createAction } from '@tramvai/core'

export const globalAction = createAction({
  name: 'global-action',
  fn: (context, payload) => {
    console.log('Performed for each transition on the server and on the client')
  },
  conditions: {
    always: true,
  },
})
