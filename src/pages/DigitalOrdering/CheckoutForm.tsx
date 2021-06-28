import React from 'react'
import type { FC } from 'react'
import { Button, Card, Checkbox, FormLabel, Grid, InputWrapper, Item, Label, List, Option, Radio, RadioGroup, Select, Typography } from '@ncr-design-system/react'
import './style.css'
import { countries, states } from '../../data'
import { withRouter } from 'react-router-dom'

export const CheckoutForm: FC<{}> = () => {

  const CheckoutFormBase = withRouter((props) => {
    const state: any = props?.location?.state
    const finalPrice = (state.finalPrice as number)


    return (
      <Grid container className='digitalOrdering' style={{ padding: '4em' }}>
        <Grid item md={12} style={{ paddingBottom: '2em' }}>
          <Typography variant='title1' bold>Checkout</Typography>
        </Grid>
        <Grid item xs={8}>
          <List>
            <div key='title' style={{ paddingLeft: '1em' }}>
              <Typography variant='title2'>Billing address</Typography>
            </div>

            <Item key='name'>
              <InputWrapper>
                <input placeholder='First Name'></input>
              </InputWrapper>
              <InputWrapper>
                <input placeholder='Last Name'></input>
              </InputWrapper>
            </Item>

            <Item key='username' style={{ paddingTop: '1em' }}>
              <InputWrapper>
                <input placeholder='Username'></input>
              </InputWrapper>
            </Item>

            <Item key='email' style={{ paddingTop: '1em' }}>
              <InputWrapper>
                <input placeholder='Email (Optional)'></input>
              </InputWrapper>
            </Item>

            <Item key='address1' style={{ paddingTop: '1em' }}>
              <InputWrapper>
                <input placeholder='Address'></input>
              </InputWrapper>
            </Item>

            <Item key='address2' style={{ paddingTop: '1em' }}>
              <InputWrapper>
                <input placeholder='Address 2 (Optional)'></input>
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
                <input placeholder='Zip'></input>
              </InputWrapper>
            </Item>

            <div className='border' />

            {/* This section is not put into an Item component, because it removes form styling */}
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

            {/* This section is not put into an Item component, because it removes form styling */}
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

            <Item key='name' style={{ paddingTop: '1em' }}>
              <InputWrapper>
                <input placeholder='Name on card'></input>
              </InputWrapper>
              <InputWrapper>
                <input placeholder='Card number'></input>
              </InputWrapper>
            </Item>
            <div style={{ width: '60%', paddingTop: '.5em' }}>
              <Item key='name'>
                <InputWrapper>
                  <input placeholder='Expiration'></input>
                </InputWrapper>
                <InputWrapper>
                  <input placeholder='CCV'></input>
                </InputWrapper>
              </Item>
            </div>

          </List>
        </Grid>

        <Grid item xs={4}>
          <Card style={{ marginTop: '2.95em', marginLeft: '1em' }}>
            <Typography variant='title2'>
              Summary
            </Typography>
            <Label>Total</Label>
            <Typography variant='title3' bold>${(finalPrice as number).toFixed(2)}</Typography>
          </Card>
        </Grid>

        <div className='border' />

        <Button
          style={{ width: '100%' }}
          key='submit'>
          Complete order
        </Button>
      </Grid>
    )
  })

  return (
    <CheckoutFormBase />
  )
}
