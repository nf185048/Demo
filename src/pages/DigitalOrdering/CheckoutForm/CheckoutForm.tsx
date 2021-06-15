import React, { useState } from 'react'
import type { FC } from 'react'
import { Checkbox, FormLabel, Grid, Input, InputWrapper, Item, List, Option, Radio, RadioGroup, Select, Typography } from '@ncr-design-system/react'
import './CheckoutForm.css'
import { countries, states } from '../../../data'

export const CheckoutForm: FC<{}> = () => {
  const [value, setValue] = useState<string>('PayPal')

  const handleChange = (e: CustomEvent<{ value: string }>) => {
    e.preventDefault()
    setValue(e.detail.value)
  }


  return (
    <Grid container className='checkoutContainer'>
      <Grid item md={6} style={{ paddingBottom: '1em' }}>
        <Typography variant='title1'>Billing Address</Typography>
      </Grid>
      <List>
        <Item>
          <InputWrapper>
            <Input placeholder='First Name'></Input>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Last Name'></Input>
          </InputWrapper>
        </Item>

        <Item style={{ paddingTop: '1em' }}>
          <InputWrapper>
            <Input placeholder='Username'></Input>
          </InputWrapper>
        </Item>

        <Item style={{ paddingTop: '1em' }}>
          <InputWrapper>
            <Input placeholder='Email (Optional)'></Input>
          </InputWrapper>
        </Item>

        <Item style={{ paddingTop: '1em' }}>
          <InputWrapper>
            <Input placeholder='Address'></Input>
          </InputWrapper>
        </Item>

        <Item style={{ paddingTop: '1em' }}>
          <InputWrapper>
            <Input placeholder='Address 2 (Optional)'></Input>
          </InputWrapper>
        </Item>


        <Item style={{ paddingTop: '1em' }} >
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

        <Item >
          <FormLabel label='Shipping address is the same as my billing address'>
            <Checkbox
              checked
              value='shippingBillingAddresses'
              name='shippingBillingAddresses'
            />
          </FormLabel>
        </Item>
        <Item >
          <FormLabel label='Save this information for next time'>
            <Checkbox
              checked
              value='saveInfo'
              name='saveInfo'
            />
          </FormLabel>
        </Item>

        <div className='border' />

        <Item>
          <RadioGroup value={value} onNcrChange={handleChange} >
            <List>
              <Typography variant='title2'>Payment</Typography>

              <Item>
                <FormLabel label='Credit Card'>
                  <Radio value='CreditCard' />
                </FormLabel>
              </Item>
              <Item>
                <FormLabel label='Debit Card'>
                  <Radio value='DebitCard' />
                </FormLabel>
              </Item>
              <Item>
                <FormLabel label='PayPal'>
                  <Radio value='Paypal' />
                </FormLabel>
              </Item>
            </List>
          </RadioGroup>
        </Item>


      </List>
    </Grid>
  )
}
