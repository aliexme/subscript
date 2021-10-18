import { Module, provide } from '@tramvai/core'
import {
  LAYOUT_OPTIONS,
  RenderModule,
  RENDER_MODE,
  RENDER_SLOTS,
  ResourceSlot,
  ResourceType,
} from '@tramvai/module-render'

import { Content, Layout, layoutWrapper, Page } from 'layout'

@Module({
  imports: [RenderModule],
  providers: [
    provide({
      provide: RENDER_MODE,
      useValue: 'strict',
    }),
    provide({
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload: '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    }),
    provide({
      provide: LAYOUT_OPTIONS,
      multi: true,
      useValue: [
        {
          components: {
            layout: Layout,
            content: Content,
            page: Page,
          },
          wrappers: {
            layout: layoutWrapper,
          },
        },
      ],
    }),
  ],
})
export class AppRenderingModule {}
