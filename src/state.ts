import {CheckoutState} from './types'

const defaultState: CheckoutState = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  country: "",
  state: "",
  zip: "",
  shippingBillingMatch: false,
  saveInfo: false,
  payment: 'payPal'
}

const handler = {}

const proxy = new Proxy(defaultState, handler)

export const State = proxy