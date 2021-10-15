import { Module, provide } from '@tramvai/core'
import { RenderModule, RENDER_MODE, RENDER_SLOTS, ResourceSlot, ResourceType } from '@tramvai/module-render'

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
  ],
})
export class AppRenderingModule {}
