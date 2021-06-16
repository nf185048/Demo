import React from 'react'
import type { FC } from 'react'
import { Button, Checkbox, FormLabel, Grid, Input, InputWrapper, Item, List, Option, Radio, RadioGroup, Select, Typography } from '@ncr-design-system/react'
import './style.css'
import { countries, states } from '../../data'

export const CheckoutForm: FC<{}> = () => {

  return (
    <Grid container className='checkoutContainer'>
      <Grid item md={6} style={{ paddingBottom: '2em' }}>
        <Typography variant='title1' bold>Checkout</Typography>
      </Grid>
      <Grid item xs={11}>
        <List>
          <div key='title' style={{ paddingLeft: '1em' }}>
            <Typography variant='title2'>Billing address</Typography>
          </div>

          <Item key='name'>
            <InputWrapper>
              <Input placeholder='First Name'></Input>
            </InputWrapper>
            <InputWrapper>
              <Input placeholder='Last Name'></Input>
            </InputWrapper>
          </Item>

          <Item key='username' style={{ paddingTop: '1em' }}>
            <InputWrapper>
              <Input placeholder='Username'></Input>
            </InputWrapper>
          </Item>

          <Item key='email' style={{ paddingTop: '1em' }}>
            <InputWrapper>
              <Input placeholder='Email (Optional)'></Input>
            </InputWrapper>
          </Item>

          <Item key='address1' style={{ paddingTop: '1em' }}>
            <InputWrapper>
              <Input placeholder='Address'></Input>
            </InputWrapper>
          </Item>

          <Item key='address2' style={{ paddingTop: '1em' }}>
            <InputWrapper>
              <Input placeholder='Address 2 (Optional)'></Input>
            </InputWrapper>
          </Item>

          <Item key='loc' style={{ paddingTop: '1em' }} >
            <InputWrapper>
              <Select placeholder='Country'>
                {countries.map(country => (
                  <Option name={country} value={country} />
                ))}
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Select placeholder='State'>
                {states.map(state => (
                  <Option name={state} value={state} />
                ))}
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Input placeholder='Zip'></Input>
            </InputWrapper>
          </Item>

          <div className='border' />

          <div key='shippingBillingAddresses' style={{ paddingLeft: '1em' }}>
            <FormLabel label='Shipping address is the same as my billing address'>
              <Checkbox

                value='shippingBillingAddresses'
                name='shippingBillingAddresses'
              />
            </FormLabel>
          </div>
          <div key='saveInfo' style={{ paddingLeft: '1em' }}>
            <FormLabel label='Save this information for next time'>
              <Checkbox

                value='saveInfo'
                name='saveInfo'
              />
            </FormLabel>
          </div>

          <div className='border' />

          <div key='paymentMethod' style={{ paddingLeft: '1em' }}>
            <RadioGroup >
              <List>
                <Typography variant='title2'>Payment</Typography>
                <div>
                  <FormLabel label='Credit Card'>
                    <Radio value='CreditCard' />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel label='Debit Card'>
                    <Radio value='DebitCard' />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel label='PayPal'>
                    <Radio value='Paypal' />
                  </FormLabel>
                </div>
              </List>
            </RadioGroup>
          </div>

          <div className='border' />

          <Button
            style={{ width: '100%' }}
            key='submit'>
            Complete order
          </Button>
        </List>
      </Grid>
    </Grid>
  )
}
