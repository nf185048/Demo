import React from 'react'
import type { FC } from 'react'
import { Button, Grid, Typography } from '@ncr-design-system/react'
import { ShoppingItem } from '../../components'
import { clothingItems } from '../../data'
import './style.css'
import { withRouter } from 'react-router-dom';

export const OrderSummary: FC<{}> = () => {
  let subTotal = clothingItems.reduce((tempTotal, item) => tempTotal + item.price, 0)
  let tax = 0.07 * subTotal
  let total = tax + subTotal

  const SubmitButton = withRouter((props) => (
    <Button
      style={{ width: '100%', margin: '2em 0 0 0' }}
      {...props}
      onClick={() => { props.history.push('/pages/CheckoutForm') }}>
      Continue to payment
    </Button>
  ));

  return (
    <Grid container className='orderingContainer'>
      {/* Order Summary Container */}
      <Grid container>
        <Grid item xs={12} style={{ paddingBottom: '1em' }}>
          <Typography variant='title2' bold >Order Summary</Typography>
        </Grid>

        <Grid item xs={12}>
          {clothingItems.map(value => (
            <ShoppingItem name={value.name} price={value.price} description={value.description} />
          ))}
        </Grid>
      </Grid>

      {/* Total Price Container */}
      <Grid container className='totalPrice'>
        <Grid item xs={6} justify='flex-start'>
          <Typography variant='body'>Subtotal:</Typography>
          <Typography variant='body'>Tax:</Typography>
          <Typography variant='body' bold>Total:</Typography>
        </Grid >
        <Grid item xs={6} justify='flex-end' style={{ textAlign: 'right' }}>
          <Typography variant='body'>${subTotal.toFixed(2)}</Typography>
          <Typography variant='body'>${tax.toFixed(2)}</Typography>
          <Typography variant='body' bold>${total.toFixed(2)}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <SubmitButton></SubmitButton>
      </Grid>
    </Grid >
  )
}
