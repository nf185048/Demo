export interface ShoppingItemBase {
  name: string
  price: number
  description: string
  image?: ReactElement
}

export interface CheckoutState {
  firstName?: string
  lastName?: string
  email?: string
  address1?: string
  address2?: string
  country?: string
  state?: string
  zip?: string
  shippingBillingMatch?: boolean
  saveInfo?: boolean
  payment?: 'creditCard' | 'debitCard' | 'payPal' | string
}
