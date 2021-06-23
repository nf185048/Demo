import React from 'react'
import { CheckoutState } from './types'

const defaultState: CheckoutState = {
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  country: '',
  state: '',
  zip: '',
  shippingBillingMatch: false,
  saveInfo: false,
  payment: 'payPal',
  shoppingList: []
}

export const State = React.createContext(defaultState)
