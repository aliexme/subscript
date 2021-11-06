export enum SubscriptionFormField {
  NAME = 'NAME',
  DESCRIPTION = 'DESCRIPTION',
}

export type SubscriptionFormValues = {
  [SubscriptionFormField.NAME]: string
  [SubscriptionFormField.DESCRIPTION]?: string
}
