import { Module, provide } from '@tramvai/core'
import { META_DEFAULT_TOKEN, SeoModule } from '@tramvai/module-seo'

@Module({
  imports: [SeoModule],
  providers: [
    provide({
      provide: META_DEFAULT_TOKEN,
      useValue: {
        title: 'Subscript',
      },
    }),
  ],
})
export class AppSeoModule {}
